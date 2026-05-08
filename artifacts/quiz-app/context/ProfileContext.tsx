import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { ACHIEVEMENT_DEFS, AchievementDef, getLevel } from "@/data/achievements";
import { useUser } from "@/context/UserContext";

const BASE_PROFILE_KEY = "deli_dahi_profile_v2";
const STAGES_PER_MEDAL = 10;

function getProfileKey(username?: string | null) {
  return username ? `${BASE_PROFILE_KEY}_${username}` : BASE_PROFILE_KEY;
}

export interface CategoryStat {
  gamesPlayed: number;
  correctAnswers: number;
  totalAnswered: number;
  bestScore: number;
}

export interface UserProfile {
  categoryBadges: Record<string, number>;
  totalStagesCompleted: number;
  medals: number;
  totalGamesPlayed: number;
  totalCorrect: number;
  totalWrong: number;
  totalSkipped: number;
  categoryStats: Record<string, CategoryStat>;
  achievements: string[];
  perfectStages: number;
  duelWins: number;
  duelLosses: number;
  duelDraws: number;
}

export interface GameStats {
  correct: number;
  wrong: number;
  skipped: number;
  score: number;
}

export interface AwardResult {
  newBadge: boolean;
  newMedal: boolean;
  badgeCount: number;
  medalCount: number;
  newAchievements: AchievementDef[];
}

export interface GameOverResult {
  newAchievements: AchievementDef[];
}

export type DuelResult = "win" | "loss" | "draw";

interface ProfileContextValue {
  profile: UserProfile;
  awardStageCompletion: (categoryId: string, gameStats: GameStats) => Promise<AwardResult>;
  recordGameOver: (categoryId: string, gameStats: GameStats) => Promise<GameOverResult>;
  recordDuelResult: (result: DuelResult) => Promise<{ newAchievements: AchievementDef[] }>;
  resetProfile: () => Promise<void>;
}

const defaultProfile: UserProfile = {
  categoryBadges: {},
  totalStagesCompleted: 0,
  medals: 0,
  totalGamesPlayed: 0,
  totalCorrect: 0,
  totalWrong: 0,
  totalSkipped: 0,
  categoryStats: {},
  achievements: [],
  perfectStages: 0,
  duelWins: 0,
  duelLosses: 0,
  duelDraws: 0,
};

function mergeCategoryStat(
  existing: CategoryStat | undefined,
  gameStats: GameStats,
  isComplete: boolean
): CategoryStat {
  const prev = existing ?? { gamesPlayed: 0, correctAnswers: 0, totalAnswered: 0, bestScore: 0 };
  return {
    gamesPlayed: prev.gamesPlayed + 1,
    correctAnswers: prev.correctAnswers + gameStats.correct,
    totalAnswered: prev.totalAnswered + gameStats.correct + gameStats.wrong + gameStats.skipped,
    bestScore: Math.max(prev.bestScore, gameStats.score),
  };
}

function checkAchievements(profile: UserProfile): string[] {
  const earned: string[] = [];
  const totalBadges = Object.values(profile.categoryBadges).reduce((a, b) => a + b, 0);
  const categoriesPlayed = Object.keys(profile.categoryStats).length;

  const conditions: Record<string, boolean> = {
    first_game: profile.totalGamesPlayed >= 1,
    perfect_stage: profile.perfectStages >= 1,
    hundred_correct: profile.totalCorrect >= 100,
    versatile: categoriesPlayed >= 5,
    badge_hunter: totalBadges >= 10,
    first_medal: profile.medals >= 1,
    persistent: profile.totalStagesCompleted >= 25,
    genius: profile.totalCorrect >= 500,
    duel_first_win: (profile.duelWins ?? 0) >= 1,
    duel_veteran: (profile.duelWins ?? 0) >= 5,
    duel_champion: (profile.duelWins ?? 0) >= 10,
  };

  for (const def of ACHIEVEMENT_DEFS) {
    if (conditions[def.id] && !profile.achievements.includes(def.id)) {
      earned.push(def.id);
    }
  }
  return earned;
}

const ProfileContext = createContext<ProfileContextValue | null>(null);

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const { username } = useUser();
  const [profile, setProfile] = useState<UserProfile>(defaultProfile);
  const profileRef = useRef<UserProfile>(defaultProfile);

  useEffect(() => {
    profileRef.current = profile;
  }, [profile]);

  useEffect(() => {
    loadProfile();
  }, [username]);

  const loadProfile = async () => {
    try {
      const key = getProfileKey(username);
      const stored = await AsyncStorage.getItem(key);
      if (stored) {
        const p = JSON.parse(stored) as UserProfile;
        const merged = { ...defaultProfile, ...p };
        profileRef.current = merged;
        setProfile(merged);
      } else {
        profileRef.current = defaultProfile;
        setProfile(defaultProfile);
      }
    } catch {}
  };

  const saveProfile = async (updated: UserProfile) => {
    try {
      const key = getProfileKey(username);
      await AsyncStorage.setItem(key, JSON.stringify(updated));
    } catch {}
  };

  const awardStageCompletion = useCallback(
    async (categoryId: string, gameStats: GameStats): Promise<AwardResult> => {
      const prev = profileRef.current;
      const isPerfect = gameStats.correct === 10 && gameStats.wrong === 0 && gameStats.skipped === 0;

      const prevBadge = prev.categoryBadges[categoryId] ?? 0;
      const newBadgeCount = prevBadge + 1;
      const newTotalStages = prev.totalStagesCompleted + 1;
      const prevMedals = prev.medals;
      const newMedals = Math.floor(newTotalStages / STAGES_PER_MEDAL);
      const earnedNewMedal = newMedals > prevMedals;

      const updated: UserProfile = {
        ...prev,
        categoryBadges: { ...prev.categoryBadges, [categoryId]: newBadgeCount },
        totalStagesCompleted: newTotalStages,
        medals: newMedals,
        totalGamesPlayed: prev.totalGamesPlayed + 1,
        totalCorrect: prev.totalCorrect + gameStats.correct,
        totalWrong: prev.totalWrong + gameStats.wrong,
        totalSkipped: prev.totalSkipped + gameStats.skipped,
        categoryStats: {
          ...prev.categoryStats,
          [categoryId]: mergeCategoryStat(prev.categoryStats[categoryId], gameStats, true),
        },
        perfectStages: prev.perfectStages + (isPerfect ? 1 : 0),
        achievements: [...prev.achievements],
      };

      const newAchievementIds = checkAchievements(updated);
      updated.achievements = [...updated.achievements, ...newAchievementIds];

      profileRef.current = updated;
      setProfile(updated);
      await saveProfile(updated);

      const newAchievements = ACHIEVEMENT_DEFS.filter((d) => newAchievementIds.includes(d.id));

      return {
        newBadge: true,
        newMedal: earnedNewMedal,
        badgeCount: newBadgeCount,
        medalCount: newMedals,
        newAchievements,
      };
    },
    [username]
  );

  const recordGameOver = useCallback(
    async (categoryId: string, gameStats: GameStats): Promise<GameOverResult> => {
      const prev = profileRef.current;

      const updated: UserProfile = {
        ...prev,
        totalGamesPlayed: prev.totalGamesPlayed + 1,
        totalCorrect: prev.totalCorrect + gameStats.correct,
        totalWrong: prev.totalWrong + gameStats.wrong,
        totalSkipped: prev.totalSkipped + gameStats.skipped,
        categoryStats: {
          ...prev.categoryStats,
          [categoryId]: mergeCategoryStat(prev.categoryStats[categoryId], gameStats, false),
        },
        achievements: [...prev.achievements],
      };

      const newAchievementIds = checkAchievements(updated);
      updated.achievements = [...updated.achievements, ...newAchievementIds];

      profileRef.current = updated;
      setProfile(updated);
      await saveProfile(updated);

      const newAchievements = ACHIEVEMENT_DEFS.filter((d) => newAchievementIds.includes(d.id));
      return { newAchievements };
    },
    [username]
  );

  const recordDuelResult = useCallback(
    async (result: DuelResult): Promise<{ newAchievements: AchievementDef[] }> => {
      const prev = profileRef.current;
      const updated: UserProfile = {
        ...prev,
        duelWins: (prev.duelWins ?? 0) + (result === "win" ? 1 : 0),
        duelLosses: (prev.duelLosses ?? 0) + (result === "loss" ? 1 : 0),
        duelDraws: (prev.duelDraws ?? 0) + (result === "draw" ? 1 : 0),
        achievements: [...prev.achievements],
      };
      const newAchievementIds = checkAchievements(updated);
      updated.achievements = [...updated.achievements, ...newAchievementIds];
      profileRef.current = updated;
      setProfile(updated);
      await saveProfile(updated);
      return { newAchievements: ACHIEVEMENT_DEFS.filter((d) => newAchievementIds.includes(d.id)) };
    },
    [username]
  );

  const resetProfile = useCallback(async () => {
    const reset = { ...defaultProfile };
    profileRef.current = reset;
    setProfile(reset);
    await AsyncStorage.removeItem(getProfileKey(username));
  }, [username]);

  return (
    <ProfileContext.Provider value={{ profile, awardStageCompletion, recordGameOver, recordDuelResult, resetProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error("useProfile must be used within ProfileProvider");
  return ctx;
}

export { STAGES_PER_MEDAL };
