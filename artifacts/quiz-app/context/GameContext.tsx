import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { categories, Category, Difficulty, Question } from "@/data/questions";
import { DEFAULT_CATEGORY_ID } from "@/data/musicTracks";

const MUSIC_CATEGORY_KEY = "deli_dahi_music_category";

export const MAX_EXTRA_LIVES_PER_STAGE = 2;

interface GameState {
  currentCategoryId: string | null;
  currentQuestionIndex: number;
  shuffledQuestionIds: string[];
  askedQuestionIds: string[];
  score: number;
  lives: number;
  selectedAnswer: number | null;
  isAnswerRevealed: boolean;
  timeLeft: number;
  totalQuestionsAnswered: number;
  correctAnswers: number;
  wrongAnswers: number;
  skippedAnswers: number;
  gamePhase: "menu" | "playing" | "stage_complete" | "stage_transition" | "game_over";
  isReviewOpen: boolean;
  wrongQuestionIds: string[];
  showDetailInfo: boolean;
  isMusicOn: boolean;
  adWatching: boolean;
  adPurpose: "extra_life" | "extra_time" | "stage_end" | null;
  hintsLeft: number;
  eliminatedOptions: number[];
  selectedMusicCategory: string;
  currentStage: number;
  difficulty: Difficulty | "all";
  extraLivesUsed: number;
}

interface GameContextValue {
  state: GameState;
  currentCategory: Category | null;
  currentQuestion: Question | null;
  startGame: (categoryId: string) => void;
  selectAnswer: (index: number) => void;
  skipQuestion: () => void;
  requestExtraLife: () => void;
  requestExtraTime: () => void;
  watchAd: () => void;
  skipAd: () => void;
  nextQuestion: () => void;
  finishStage: () => void;
  continueNextStage: () => void;
  startNextStage: () => void;
  returnToMenu: () => void;
  toggleMusic: () => void;
  setShowDetailInfo: (show: boolean) => void;
  highScores: Record<string, number>;
  useHintEliminate: () => void;
  useHintSkip: () => void;
  setMusicCategory: (categoryId: string) => void;
  setDifficulty: (difficulty: Difficulty | "all") => void;
  showReview: () => void;
  dismissReview: () => void;
}

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const defaultState: GameState = {
  currentCategoryId: null,
  currentQuestionIndex: 0,
  shuffledQuestionIds: [],
  askedQuestionIds: [],
  score: 0,
  lives: 3,
  selectedAnswer: null,
  isAnswerRevealed: false,
  timeLeft: 40,
  totalQuestionsAnswered: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
  skippedAnswers: 0,
  gamePhase: "menu",
  isReviewOpen: false,
  wrongQuestionIds: [],
  showDetailInfo: false,
  isMusicOn: true,
  adWatching: false,
  adPurpose: null,
  hintsLeft: 2,
  eliminatedOptions: [],
  selectedMusicCategory: DEFAULT_CATEGORY_ID,
  currentStage: 1,
  difficulty: "all",
  extraLivesUsed: 0,
};

function getFilteredQuestions(
  category: { questions: Question[] },
  difficulty: Difficulty | "all",
  excludeIds: string[] = []
): string[] {
  const filtered = difficulty === "all"
    ? category.questions
    : category.questions.filter((q) => q.difficulty === difficulty);
  const basePool = filtered.length > 0 ? filtered : category.questions;
  const excludeSet = new Set(excludeIds);
  const unasked = basePool.filter((q) => !excludeSet.has(q.id));
  // Önce sorulmamış soruları kullan; eğer 10'dan azsa, kalanları da rastgele havuzdan tamamla
  if (unasked.length >= 10) {
    return shuffleArray(unasked.map((q) => q.id)).slice(0, 10);
  }
  // Havuz neredeyse bitti: önce sorulmamışları al, sonra eskilerden tamamla (en azından çeşitlilik korunur)
  const unaskedIds = shuffleArray(unasked.map((q) => q.id));
  const askedIds = shuffleArray(basePool.filter((q) => excludeSet.has(q.id)).map((q) => q.id));
  return [...unaskedIds, ...askedIds].slice(0, 10);
}

const GameContext = createContext<GameContextValue | null>(null);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<GameState>(defaultState);
  const [highScores, setHighScores] = useState<Record<string, number>>({});
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    loadHighScores();
    loadMusicCategory();
  }, []);

  const loadHighScores = async () => {
    try {
      const stored = await AsyncStorage.getItem("highScores");
      if (stored) setHighScores(JSON.parse(stored));
    } catch {}
  };

  const loadMusicCategory = async () => {
    try {
      const stored = await AsyncStorage.getItem(MUSIC_CATEGORY_KEY);
      if (stored) setState((prev) => ({ ...prev, selectedMusicCategory: stored }));
    } catch {}
  };

  const setMusicCategory = useCallback((categoryId: string) => {
    setState((prev) => ({ ...prev, selectedMusicCategory: categoryId }));
    AsyncStorage.setItem(MUSIC_CATEGORY_KEY, categoryId).catch(() => {});
  }, []);

  const saveHighScore = async (categoryId: string, score: number) => {
    try {
      const current = highScores[categoryId] ?? 0;
      if (score > current) {
        const updated = { ...highScores, [categoryId]: score };
        setHighScores(updated);
        await AsyncStorage.setItem("highScores", JSON.stringify(updated));
      }
    } catch {}
  };

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setState((prev) => {
        if (prev.timeLeft <= 1) {
          clearInterval(timerRef.current!);
          timerRef.current = null;
          return {
            ...prev,
            timeLeft: 0,
            isAnswerRevealed: true,
            skippedAnswers: prev.skippedAnswers + 1,
          };
        }
        return { ...prev, timeLeft: prev.timeLeft - 1 };
      });
    }, 1000);
  }, [stopTimer]);

  const currentCategory =
    categories.find((c) => c.id === state.currentCategoryId) ?? null;
  const currentQuestion = currentCategory && state.shuffledQuestionIds.length > 0
    ? currentCategory.questions.find(
        (q) => q.id === state.shuffledQuestionIds[state.currentQuestionIndex]
      ) ?? null
    : null;

  const setDifficulty = useCallback((difficulty: Difficulty | "all") => {
    setState((prev) => ({ ...prev, difficulty }));
  }, []);

  const startGame = useCallback(
    (categoryId: string) => {
      stopTimer();
      const category = categories.find((c) => c.id === categoryId);
      // Yeni kategori → askedQuestionIds sıfırlanır (defaultState ile)
      const shuffledIds = category
        ? getFilteredQuestions(category, state.difficulty, [])
        : [];
      setState({
        ...defaultState,
        currentCategoryId: categoryId,
        shuffledQuestionIds: shuffledIds,
        askedQuestionIds: shuffledIds,
        gamePhase: "playing",
        isMusicOn: state.isMusicOn,
        selectedMusicCategory: state.selectedMusicCategory,
        difficulty: state.difficulty,
      });
      setTimeout(startTimer, 300);
    },
    [startTimer, stopTimer, state.isMusicOn, state.selectedMusicCategory, state.difficulty]
  );

  const selectAnswer = useCallback(
    (index: number) => {
      stopTimer();
      setState((prev) => {
        if (prev.isAnswerRevealed || prev.selectedAnswer !== null) return prev;
        const questionId = prev.shuffledQuestionIds[prev.currentQuestionIndex];
        const question = currentCategory?.questions.find((q) => q.id === questionId);
        if (!question) return prev;
        const isCorrect = index === question.correctIndex;
        return {
          ...prev,
          selectedAnswer: index,
          isAnswerRevealed: true,
          score: isCorrect ? prev.score + 100 : prev.score,
          lives: isCorrect ? prev.lives : Math.max(0, prev.lives - 1),
          correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
          wrongAnswers: isCorrect ? prev.wrongAnswers : prev.wrongAnswers + 1,
          wrongQuestionIds: isCorrect
            ? prev.wrongQuestionIds
            : prev.wrongQuestionIds.includes(questionId)
              ? prev.wrongQuestionIds
              : [...prev.wrongQuestionIds, questionId],
        };
      });
    },
    [stopTimer, currentCategory]
  );

  const skipQuestion = useCallback(() => {
    stopTimer();
    setState((prev) => ({
      ...prev,
      isAnswerRevealed: true,
      skippedAnswers: prev.skippedAnswers + 1,
    }));
  }, [stopTimer]);

  const nextQuestion = useCallback(() => {
    let shouldStartTimer = false;
    setState((prev) => {
      if (!currentCategory) return prev;
      if (prev.adWatching) return prev;
      if (prev.lives === 0) {
        saveHighScore(prev.currentCategoryId!, prev.score);
        shouldStartTimer = false;
        return { ...prev, gamePhase: "game_over" };
      }
      const nextIndex = prev.currentQuestionIndex + 1;
      if (nextIndex >= prev.shuffledQuestionIds.length) {
        saveHighScore(prev.currentCategoryId!, prev.score);
        shouldStartTimer = false;
        return {
          ...prev,
          gamePhase: "stage_complete",
          adWatching: true,
          adPurpose: "stage_end",
        };
      }
      shouldStartTimer = true;
      return {
        ...prev,
        currentQuestionIndex: nextIndex,
        selectedAnswer: null,
        isAnswerRevealed: false,
        timeLeft: 40,
        showDetailInfo: false,
        totalQuestionsAnswered: prev.totalQuestionsAnswered + 1,
        eliminatedOptions: [],
      };
    });
    if (shouldStartTimer) {
      setTimeout(startTimer, 300);
    }
  }, [currentCategory, startTimer, saveHighScore]);

  const useHintEliminate = useCallback(() => {
    setState((prev) => {
      if (prev.hintsLeft <= 0 || prev.isAnswerRevealed) return prev;
      const questionId = prev.shuffledQuestionIds[prev.currentQuestionIndex];
      const cat = categories.find((c) => c.id === prev.currentCategoryId);
      const question = cat?.questions.find((q) => q.id === questionId);
      if (!question) return prev;
      const wrongOptions = [0, 1, 2, 3].filter(
        (i) => i !== question.correctIndex && !prev.eliminatedOptions.includes(i)
      );
      if (wrongOptions.length === 0) return prev;
      const pick = wrongOptions[Math.floor(Math.random() * wrongOptions.length)];
      return {
        ...prev,
        hintsLeft: prev.hintsLeft - 1,
        eliminatedOptions: [...prev.eliminatedOptions, pick],
      };
    });
  }, []);

  const useHintSkip = useCallback(() => {
    setState((prev) => {
      if (prev.hintsLeft <= 0 || prev.isAnswerRevealed) return prev;
      return {
        ...prev,
        hintsLeft: prev.hintsLeft - 1,
        isAnswerRevealed: true,
        skippedAnswers: prev.skippedAnswers + 1,
      };
    });
    stopTimer();
  }, [stopTimer]);

  const requestExtraLife = useCallback(() => {
    setState((prev) => {
      // Aşama başına maksimum can yenileme hakkı dolmuşsa hiçbir şey yapma
      if (prev.extraLivesUsed >= MAX_EXTRA_LIVES_PER_STAGE) {
        return prev;
      }
      return {
        ...prev,
        adWatching: true,
        adPurpose: "extra_life",
      };
    });
    stopTimer();
  }, [stopTimer]);

  const requestExtraTime = useCallback(() => {
    stopTimer();
    setState((prev) => ({
      ...prev,
      adWatching: true,
      adPurpose: "extra_time",
    }));
  }, [stopTimer]);

  const watchAd = useCallback(() => {
    setState((prev) => {
      if (prev.adPurpose === "extra_life") {
        return {
          ...prev,
          adWatching: false,
          adPurpose: null,
          lives: prev.lives + 1,
          extraLivesUsed: prev.extraLivesUsed + 1,
        };
      } else if (prev.adPurpose === "extra_time") {
        return {
          ...prev,
          adWatching: false,
          adPurpose: null,
          timeLeft: 20,
          isAnswerRevealed: false,
          selectedAnswer: null,
          skippedAnswers: Math.max(0, prev.skippedAnswers - 1),
        };
      } else if (prev.adPurpose === "stage_end") {
        return {
          ...prev,
          adWatching: false,
          adPurpose: null,
        };
      }
      return { ...prev, adWatching: false, adPurpose: null };
    });
    if (state.adPurpose === "extra_time") {
      setTimeout(startTimer, 300);
    }
  }, [state.adPurpose, startTimer]);

  const skipAd = useCallback(() => {
    setState((prev) => ({
      ...prev,
      adWatching: false,
      adPurpose: null,
    }));
  }, []);

  const finishStage = useCallback(() => {
    setState((prev) => ({
      ...prev,
      gamePhase: "game_over",
    }));
  }, []);

  const continueNextStage = useCallback(() => {
    setState((prev) => ({
      ...prev,
      gamePhase: "stage_transition",
    }));
  }, []);

  const startNextStage = useCallback(() => {
    stopTimer();
    setState((prev) => {
      const category = categories.find((c) => c.id === prev.currentCategoryId);
      // Önceki tüm aşamalardaki soruları hariç tutarak yeni 10 soru çek
      const shuffledIds = category
        ? getFilteredQuestions(category, prev.difficulty, prev.askedQuestionIds)
        : [];
      return {
        ...prev,
        currentQuestionIndex: 0,
        shuffledQuestionIds: shuffledIds,
        askedQuestionIds: [...prev.askedQuestionIds, ...shuffledIds],
        selectedAnswer: null,
        isAnswerRevealed: false,
        timeLeft: 40,
        showDetailInfo: false,
        correctAnswers: 0,
        wrongAnswers: 0,
        skippedAnswers: 0,
        totalQuestionsAnswered: 0,
        hintsLeft: 2,
        eliminatedOptions: [],
        adWatching: false,
        adPurpose: null,
        gamePhase: "playing",
        currentStage: prev.currentStage + 1,
        wrongQuestionIds: [],
        isReviewOpen: false,
        extraLivesUsed: 0,
      };
    });
    setTimeout(startTimer, 300);
  }, [stopTimer, startTimer]);

  const showReview = useCallback(() => {
    setState((prev) => ({
      ...prev,
      isReviewOpen: true,
    }));
  }, []);

  const dismissReview = useCallback(() => {
    setState((prev) => ({
      ...prev,
      isReviewOpen: false,
    }));
  }, []);

  const returnToMenu = useCallback(() => {
    stopTimer();
    setState((prev) => ({
      ...defaultState,
      isMusicOn: prev.isMusicOn,
      selectedMusicCategory: prev.selectedMusicCategory,
      difficulty: prev.difficulty,
    }));
  }, [stopTimer]);

  const toggleMusic = useCallback(() => {
    setState((prev) => ({ ...prev, isMusicOn: !prev.isMusicOn }));
  }, []);

  const setShowDetailInfo = useCallback((show: boolean) => {
    setState((prev) => ({ ...prev, showDetailInfo: show }));
  }, []);

  useEffect(() => {
    return () => stopTimer();
  }, [stopTimer]);

  useEffect(() => {
    if (
      state.gamePhase === "playing" &&
      !state.isAnswerRevealed &&
      !state.adWatching
    ) {
      // Timer is managed by startGame and nextQuestion
    }
  }, [state.gamePhase, state.isAnswerRevealed, state.adWatching]);

  return (
    <GameContext.Provider
      value={{
        state,
        currentCategory,
        currentQuestion,
        startGame,
        selectAnswer,
        skipQuestion,
        requestExtraLife,
        requestExtraTime,
        watchAd,
        skipAd,
        nextQuestion,
        finishStage,
        continueNextStage,
        startNextStage,
        returnToMenu,
        toggleMusic,
        setShowDetailInfo,
        highScores,
        useHintEliminate,
        useHintSkip,
        setMusicCategory,
        setDifficulty,
        showReview,
        dismissReview,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error("useGame must be used within GameProvider");
  return ctx;
}
