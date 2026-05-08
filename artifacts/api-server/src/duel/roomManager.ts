export interface DuelPlayer {
  socketId: string;
  username: string;
  score: number;
  currentAnswer: number | null;
  currentIsCorrect: boolean | null;
  answeredAt: number | null;
}

export interface DuelRoom {
  id: string;
  players: [DuelPlayer, DuelPlayer];
  currentQuestionIndex: number;
  totalQuestions: number;
  questionTime: number;
  phase: "waiting" | "playing" | "question_result" | "finished";
  category: string;
  seed: number;
  questionTimer: ReturnType<typeof setTimeout> | null;
  lastCorrectIndex: number | null;
}

export interface WaitingPlayer {
  socketId: string;
  username: string;
  category: string;
  totalQuestions: number;
  questionTime: number;
}

const rooms = new Map<string, DuelRoom>();
const waitingPlayers = new Map<string, WaitingPlayer>();
const socketToRoom = new Map<string, string>();

function generateRoomId(): string {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

export function addWaitingPlayer(player: WaitingPlayer): void {
  waitingPlayers.set(player.username, player);
}

export function removeWaitingPlayer(username: string): void {
  waitingPlayers.delete(username);
}

export function findOpponent(username: string, category: string): WaitingPlayer | null {
  for (const [name, player] of waitingPlayers) {
    if (name !== username && player.category === category) {
      return player;
    }
  }
  return null;
}

export function createRoom(
  playerA: { socketId: string; username: string },
  playerB: { socketId: string; username: string },
  category: string,
  totalQuestions: number = 10,
  questionTime: number = 15
): DuelRoom {
  const id = generateRoomId();
  const seed = Math.floor(Math.random() * 1_000_000);

  const room: DuelRoom = {
    id,
    players: [
      { ...playerA, score: 0, currentAnswer: null, currentIsCorrect: null, answeredAt: null },
      { ...playerB, score: 0, currentAnswer: null, currentIsCorrect: null, answeredAt: null },
    ],
    currentQuestionIndex: 0,
    totalQuestions,
    questionTime,
    phase: "playing",
    category,
    seed,
    questionTimer: null,
    lastCorrectIndex: null,
  };

  rooms.set(id, room);
  socketToRoom.set(playerA.socketId, id);
  socketToRoom.set(playerB.socketId, id);

  return room;
}

export function getRoom(roomId: string): DuelRoom | undefined {
  return rooms.get(roomId);
}

export function getRoomBySocket(socketId: string): DuelRoom | undefined {
  const roomId = socketToRoom.get(socketId);
  return roomId ? rooms.get(roomId) : undefined;
}

export function removeRoom(roomId: string): void {
  const room = rooms.get(roomId);
  if (!room) return;
  for (const p of room.players) socketToRoom.delete(p.socketId);
  if (room.questionTimer) clearTimeout(room.questionTimer);
  rooms.delete(roomId);
}

export function removeSocketFromRoom(socketId: string): DuelRoom | undefined {
  const room = getRoomBySocket(socketId);
  if (room) socketToRoom.delete(socketId);
  return room;
}

export function submitAnswer(
  room: DuelRoom,
  socketId: string,
  answerIndex: number,
  isCorrect: boolean,
  correctIndex: number
): boolean {
  const player = room.players.find((p) => p.socketId === socketId);
  if (!player || player.currentAnswer !== null) return false;
  player.currentAnswer = answerIndex;
  player.currentIsCorrect = isCorrect;
  player.answeredAt = Date.now();
  if (room.lastCorrectIndex === null) room.lastCorrectIndex = correctIndex;
  return true;
}

export function bothAnswered(room: DuelRoom): boolean {
  return room.players.every((p) => p.currentAnswer !== null);
}

export function applyScoresAndReset(room: DuelRoom): void {
  for (const player of room.players) {
    if (player.currentIsCorrect) player.score += 1;
    player.currentAnswer = null;
    player.currentIsCorrect = null;
    player.answeredAt = null;
  }
  room.lastCorrectIndex = null;
}

export function advanceQuestion(room: DuelRoom): boolean {
  room.currentQuestionIndex += 1;
  if (room.currentQuestionIndex >= room.totalQuestions) {
    room.phase = "finished";
    return false;
  }
  return true;
}

export function getWinner(room: DuelRoom): string | null {
  const [a, b] = room.players;
  if (a.score > b.score) return a.username;
  if (b.score > a.score) return b.username;
  return null;
}

export function getPlayerScores(room: DuelRoom) {
  return room.players.map((p) => ({ username: p.username, score: p.score }));
}
