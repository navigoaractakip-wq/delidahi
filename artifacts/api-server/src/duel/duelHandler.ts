import { Server, Socket } from "socket.io";
import { db } from "@workspace/db";
import { duelSessionsTable } from "@workspace/db/schema";
import {
  addWaitingPlayer,
  removeWaitingPlayer,
  findOpponent,
  createRoom,
  getRoom,
  getRoomBySocket,
  removeRoom,
  removeSocketFromRoom,
  submitAnswer,
  bothAnswered,
  applyScoresAndReset,
  advanceQuestion,
  getWinner,
  getPlayerScores,
  DuelRoom,
} from "./roomManager.js";

const RESULT_SHOW_MS = 2_000;

async function saveDuelSession(
  playerA: string,
  playerB: string,
  category: string,
  scores: { username: string; score: number }[],
  winner: string | null
) {
  try {
    const scoreA = scores.find((s) => s.username === playerA)?.score ?? 0;
    const scoreB = scores.find((s) => s.username === playerB)?.score ?? 0;
    await db.insert(duelSessionsTable).values({ playerA, playerB, winner, scoreA, scoreB, category, totalQuestions: 10 });
  } catch (e) {
    console.error("[Duel] Failed to save session:", e);
  }
}

function finishRoom(io: Server, room: DuelRoom) {
  const winner = getWinner(room);
  const finalScores = getPlayerScores(room);
  for (const p of room.players) {
    io.to(p.socketId).emit("duel:finished", { players: finalScores, winner });
  }
  saveDuelSession(room.players[0].username, room.players[1].username, room.category, finalScores, winner);
  removeRoom(room.id);
}

function sendNextQuestion(io: Server, room: DuelRoom) {
  room.questionTimer = scheduleTimeout(io, room);
  for (const p of room.players) {
    io.to(p.socketId).emit("duel:question", { index: room.currentQuestionIndex, total: room.totalQuestions });
  }
}

function resolveQuestion(io: Server, room: DuelRoom, correctIndex: number) {
  if (room.questionTimer) { clearTimeout(room.questionTimer); room.questionTimer = null; }
  applyScoresAndReset(room);
  const scores = getPlayerScores(room);
  room.phase = "question_result";
  for (const p of room.players) {
    io.to(p.socketId).emit("duel:question_result", { players: scores, correctIndex });
  }
  setTimeout(() => {
    const r = getRoom(room.id);
    if (!r) return;
    const hasNext = advanceQuestion(r);
    if (hasNext) {
      r.phase = "playing";
      sendNextQuestion(io, r);
    } else {
      finishRoom(io, r);
    }
  }, RESULT_SHOW_MS);
}

function scheduleTimeout(io: Server, room: DuelRoom): ReturnType<typeof setTimeout> {
  const roomId = room.id;
  const questionIndex = room.currentQuestionIndex;
  const timeMs = (room.questionTime + 1) * 1000;
  return setTimeout(() => {
    const r = getRoom(roomId);
    if (!r || r.phase !== "playing" || r.currentQuestionIndex !== questionIndex) return;
    resolveQuestion(io, r, r.lastCorrectIndex ?? 0);
  }, timeMs);
}

export function registerDuelHandlers(io: Server, socket: Socket) {
  socket.on("duel:search", (data: { username: string; category: string; totalQuestions?: number; questionTime?: number }) => {
    if (!data?.username || !data?.category) return;
    socket.data.username = data.username;
    const totalQuestions = Math.min(Math.max(data.totalQuestions ?? 10, 5), 20);
    const questionTime = Math.min(Math.max(data.questionTime ?? 15, 10), 30);
    console.log(`[Duel] SEARCH: ${data.username} -> category=${data.category} q=${totalQuestions} t=${questionTime}s | socketId=${socket.id}`);

    const opponent = findOpponent(data.username, data.category);
    console.log(`[Duel] Opponent found: ${opponent ? opponent.username : "none"}`);

    if (opponent) {
      removeWaitingPlayer(opponent.username);
      // Use waiting player's settings (they set up the "lobby")
      const roomQ = opponent.totalQuestions ?? totalQuestions;
      const roomT = opponent.questionTime ?? questionTime;
      const room = createRoom(
        { socketId: socket.id, username: data.username },
        { socketId: opponent.socketId, username: opponent.username },
        data.category,
        roomQ,
        roomT
      );

      const foundPayload = { roomId: room.id, opponent: opponent.username, category: room.category, seed: room.seed, totalQuestions: room.totalQuestions, questionTime: room.questionTime, players: getPlayerScores(room) };
      socket.emit("duel:found", { ...foundPayload, opponent: opponent.username });
      io.to(opponent.socketId).emit("duel:found", { ...foundPayload, opponent: data.username });

      setTimeout(() => {
        const r = getRoom(room.id);
        if (!r) return;
        sendNextQuestion(io, r);
      }, 3000);
    } else {
      addWaitingPlayer({ socketId: socket.id, username: data.username, category: data.category, totalQuestions, questionTime });
      socket.emit("duel:searching");
    }
  });

  socket.on("duel:answer", (data: { index: number; isCorrect: boolean; correctIndex: number }) => {
    const room = getRoomBySocket(socket.id);
    if (!room || room.phase !== "playing") return;

    const answered = submitAnswer(room, socket.id, data.index, data.isCorrect, data.correctIndex);
    if (!answered) return;

    const opponent = room.players.find((p) => p.socketId !== socket.id);
    if (opponent) io.to(opponent.socketId).emit("duel:opponent_answered");

    if (bothAnswered(room)) {
      resolveQuestion(io, room, room.lastCorrectIndex ?? data.correctIndex);
    }
  });

  socket.on("duel:cancel", () => {
    const u = socket.data.username as string | undefined;
    if (u) removeWaitingPlayer(u);
  });

  socket.on("duel:leave", () => {
    const room = getRoomBySocket(socket.id);
    if (room) {
      const opponent = room.players.find((p) => p.socketId !== socket.id);
      if (opponent) io.to(opponent.socketId).emit("duel:opponent_left");
      removeRoom(room.id);
    }
    const u = socket.data.username as string | undefined;
    if (u) removeWaitingPlayer(u);
  });

  socket.on("disconnect", () => {
    const u = socket.data.username as string | undefined;
    if (u) removeWaitingPlayer(u);
    const room = removeSocketFromRoom(socket.id);
    if (room) {
      const opponent = room.players.find((p) => p.socketId !== socket.id);
      if (opponent) io.to(opponent.socketId).emit("duel:opponent_left");
      removeRoom(room.id);
    }
  });
}
