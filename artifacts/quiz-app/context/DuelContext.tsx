import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { io, Socket } from "socket.io-client";
import { useUser } from "@/context/UserContext";

const PROD_DOMAIN = "b98cce88-e1ea-416d-822f-68d2e253a6c0-00-3kvc1lqn0tc81.picard.replit.dev";
const DOMAIN = process.env.EXPO_PUBLIC_DOMAIN || PROD_DOMAIN;
const API_BASE = `https://${DOMAIN}`;
const SOCKET_PATH = "/api/socket.io";

export type DuelPhase =
  | "idle"
  | "settings"
  | "searching"
  | "found"
  | "playing"
  | "question_result"
  | "finished"
  | "opponent_left";

export interface DuelPlayer {
  username: string;
  score: number;
}

export interface DuelState {
  phase: DuelPhase;
  roomId: string | null;
  category: string | null;
  seed: number | null;
  opponent: string | null;
  players: DuelPlayer[];
  currentQuestionIndex: number;
  totalQuestions: number;
  questionTime: number;
  myAnswer: number | null;
  opponentAnswered: boolean;
  timeLeft: number;
  winner: string | null;
  error: string | null;
  revealedCorrectIndex: number | null;
  pendingCategory: string | null;
  pendingTotalQuestions: number;
  pendingQuestionTime: number;
}

interface DuelContextValue {
  state: DuelState;
  openSettings: (categoryId: string) => void;
  searchDuel: (categoryId: string, totalQuestions: number, questionTime: number) => void;
  cancelSearch: () => void;
  submitAnswer: (index: number, isCorrect: boolean, correctIndex: number) => void;
  returnToMenu: () => void;
  isConnected: boolean;
}

const defaultState: DuelState = {
  phase: "idle",
  roomId: null,
  category: null,
  seed: null,
  opponent: null,
  players: [],
  currentQuestionIndex: 0,
  totalQuestions: 10,
  questionTime: 15,
  myAnswer: null,
  opponentAnswered: false,
  timeLeft: 15,
  winner: null,
  error: null,
  revealedCorrectIndex: null,
  pendingCategory: null,
  pendingTotalQuestions: 10,
  pendingQuestionTime: 15,
};

const DuelContext = createContext<DuelContextValue | null>(null);

export function DuelProvider({ children }: { children: React.ReactNode }) {
  const { username } = useUser();
  const [state, setState] = useState<DuelState>(defaultState);
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef<Socket | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const questionTimeRef = useRef(15);

  const startTimer = useCallback(
    (onExpire: () => void) => {
      clearTimer();
      let remaining = questionTimeRef.current;
      setState((s) => ({ ...s, timeLeft: remaining }));
      timerRef.current = setInterval(() => {
        remaining -= 1;
        setState((s) => ({ ...s, timeLeft: remaining }));
        if (remaining <= 0) {
          clearTimer();
          onExpire();
        }
      }, 1000);
    },
    [clearTimer]
  );

  useEffect(() => {
    if (!username) return;

    const socket = io(API_BASE, {
      path: SOCKET_PATH,
      transports: ["polling", "websocket"],
      reconnectionAttempts: 5,
      timeout: 10000,
    });
    socketRef.current = socket;

    socket.on("connect", () => setIsConnected(true));
    socket.on("disconnect", () => setIsConnected(false));

    socket.on(
      "duel:found",
      (data: {
        roomId: string;
        opponent: string;
        category: string;
        seed: number;
        totalQuestions: number;
        questionTime: number;
        players: DuelPlayer[];
      }) => {
        clearTimer();
        questionTimeRef.current = data.questionTime ?? 15;
        setState((s) => ({
          ...s,
          phase: "found",
          roomId: data.roomId,
          opponent: data.opponent,
          category: data.category,
          seed: data.seed,
          totalQuestions: data.totalQuestions,
          questionTime: data.questionTime ?? 15,
          players: data.players,
          error: null,
        }));
      }
    );

    socket.on("duel:searching", () => {
      setState((s) => ({ ...s, phase: "searching", error: null }));
    });

    socket.on("duel:question", (data: { index: number; total: number }) => {
      clearTimer();
      setState((s) => ({
        ...s,
        phase: "playing",
        currentQuestionIndex: data.index,
        totalQuestions: data.total,
        myAnswer: null,
        opponentAnswered: false,
        timeLeft: questionTimeRef.current,
        revealedCorrectIndex: null,
        error: null,
      }));
      startTimer(() => {
        setState((s) => ({ ...s, myAnswer: -1 }));
      });
    });

    socket.on("duel:opponent_answered", () => {
      setState((s) => ({ ...s, opponentAnswered: true }));
    });

    socket.on(
      "duel:question_result",
      (data: { players: DuelPlayer[]; correctIndex: number }) => {
        clearTimer();
        setState((s) => ({
          ...s,
          phase: "question_result",
          players: data.players,
          revealedCorrectIndex: data.correctIndex,
        }));
      }
    );

    socket.on(
      "duel:finished",
      (data: { players: DuelPlayer[]; winner: string | null }) => {
        clearTimer();
        setState((s) => ({
          ...s,
          phase: "finished",
          players: data.players,
          winner: data.winner,
        }));
      }
    );

    socket.on("duel:opponent_left", () => {
      clearTimer();
      setState((s) => ({ ...s, phase: "opponent_left" }));
    });

    socket.on("duel:error", (msg: string) => {
      setState((s) => ({ ...s, phase: "idle", error: msg }));
    });

    return () => {
      clearTimer();
      socket.disconnect();
    };
  }, [username]);

  const openSettings = useCallback((categoryId: string) => {
    setState((s) => ({ ...s, phase: "settings", pendingCategory: categoryId }));
  }, []);

  const searchDuel = useCallback(
    (categoryId: string, totalQuestions: number, questionTime: number) => {
      if (!socketRef.current || !username) return;
      setState((s) => ({ ...s, phase: "searching", category: categoryId, error: null }));
      const payload = { username, category: categoryId, totalQuestions, questionTime };
      if (socketRef.current.connected) {
        socketRef.current.emit("duel:search", payload);
      } else {
        socketRef.current.once("connect", () => {
          socketRef.current?.emit("duel:search", payload);
        });
      }
    },
    [username]
  );

  const cancelSearch = useCallback(() => {
    if (!socketRef.current) return;
    socketRef.current.emit("duel:cancel");
    setState((s) => ({ ...s, phase: "idle" }));
  }, []);

  const submitAnswer = useCallback(
    (index: number, isCorrect: boolean, correctIndex: number) => {
      if (!socketRef.current || state.myAnswer !== null) return;
      setState((s) => ({ ...s, myAnswer: index }));
      socketRef.current.emit("duel:answer", { index, isCorrect, correctIndex });
    },
    [state.myAnswer]
  );

  const returnToMenu = useCallback(() => {
    clearTimer();
    if (socketRef.current) socketRef.current.emit("duel:leave");
    setState(defaultState);
  }, [clearTimer]);

  return (
    <DuelContext.Provider
      value={{ state, openSettings, searchDuel, cancelSearch, submitAnswer, returnToMenu, isConnected }}
    >
      {children}
    </DuelContext.Provider>
  );
}

export function useDuel() {
  const ctx = useContext(DuelContext);
  if (!ctx) throw new Error("useDuel must be within DuelProvider");
  return ctx;
}
