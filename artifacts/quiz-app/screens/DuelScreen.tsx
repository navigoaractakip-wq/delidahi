import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Audio } from "expo-av";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useColors } from "@/hooks/useColors";
import { useDuel } from "@/context/DuelContext";
import { useUser } from "@/context/UserContext";
import { useProfile } from "@/context/ProfileContext";
import { categories } from "@/data/questions";
import { AdScreen } from "@/components/AdScreen";

async function playOneShot(file: number, volume = 1.0) {
  if (Platform.OS === "web") return;
  try {
    const { sound } = await Audio.Sound.createAsync(file, { shouldPlay: true, volume });
    sound.setOnPlaybackStatusUpdate((s) => {
      if (s.isLoaded && s.didJustFinish) sound.unloadAsync().catch(() => {});
    });
  } catch {}
}

const sfx = {
  correct: require("../assets/sounds/correct.mp3") as number,
  wrong: require("../assets/sounds/wrong.mp3") as number,
  timeout: require("../assets/sounds/timeout.mp3") as number,
  duel_found: require("../assets/sounds/duel_found.mp3") as number,
};

async function playDuelFound() {
  playOneShot(sfx.duel_found, 1.0);
}

const { width } = Dimensions.get("window");

function seededShuffle<T>(arr: T[], seed: number): T[] {
  let s = seed;
  const rng = () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0x100000000;
  };
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function CategoryPicker({ onSelect }: { onSelect: (id: string) => void }) {
  const colors = useColors();
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      contentContainerStyle={[styles.categoryList, { paddingTop: insets.top + 64, paddingBottom: insets.bottom + 16 }]}
      showsVerticalScrollIndicator={false}
    >
      <Text style={[styles.bigTitle, { color: colors.foreground }]}>⚔️ Düello</Text>
      <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>
        Bir kategori seç, ayarla ve rakip bul!
      </Text>
      {categories.map((cat) => (
        <Pressable
          key={cat.id}
          onPress={() => onSelect(cat.id)}
          style={({ pressed }) => [styles.catRow, { backgroundColor: colors.card, borderColor: colors.border, opacity: pressed ? 0.75 : 1 }]}
        >
          <LinearGradient colors={[cat.gradient[0], cat.gradient[1]]} style={styles.catIcon} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
            <Feather name={cat.icon} size={20} color="#fff" />
          </LinearGradient>
          <Text style={[styles.catName, { color: colors.foreground }]}>{cat.name}</Text>
          <Feather name="chevron-right" size={18} color={colors.mutedForeground} />
        </Pressable>
      ))}
    </ScrollView>
  );
}

const QUESTION_COUNT_OPTIONS = [5, 10, 15, 20];
const QUESTION_TIME_OPTIONS = [10, 15, 20, 30];

function SettingsView({
  categoryId,
  onStart,
  onBack,
}: {
  categoryId: string;
  onStart: (totalQuestions: number, questionTime: number) => void;
  onBack: () => void;
}) {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const cat = categories.find((c) => c.id === categoryId);
  const [questionCount, setQuestionCount] = useState(10);
  const [questionTime, setQuestionTime] = useState(15);

  return (
    <ScrollView
      contentContainerStyle={[styles.settingsWrap, { paddingTop: insets.top + 24, paddingBottom: insets.bottom + 24 }]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.settingsHeader}>
        {cat && (
          <LinearGradient colors={[cat.gradient[0], cat.gradient[1]]} style={styles.settingsCatIcon} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
            <Feather name={cat.icon} size={26} color="#fff" />
          </LinearGradient>
        )}
        <Text style={[styles.bigTitle, { color: colors.foreground }]}>{cat?.name ?? "Düello"}</Text>
        <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>Maç ayarlarını belirle</Text>
      </View>

      <View style={[styles.settingsBlock, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <Text style={[styles.settingsLabel, { color: colors.foreground }]}>📋 Soru Sayısı</Text>
        <View style={styles.optionRow}>
          {QUESTION_COUNT_OPTIONS.map((n) => (
            <Pressable
              key={n}
              onPress={() => setQuestionCount(n)}
              style={[
                styles.optionChip,
                { borderColor: questionCount === n ? "#6c63ff" : colors.border, backgroundColor: questionCount === n ? "#6c63ff22" : colors.background },
              ]}
            >
              <Text style={[styles.optionChipText, { color: questionCount === n ? "#6c63ff" : colors.mutedForeground }]}>{n}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View style={[styles.settingsBlock, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <Text style={[styles.settingsLabel, { color: colors.foreground }]}>⏱ Soru Başına Süre</Text>
        <View style={styles.optionRow}>
          {QUESTION_TIME_OPTIONS.map((t) => (
            <Pressable
              key={t}
              onPress={() => setQuestionTime(t)}
              style={[
                styles.optionChip,
                { borderColor: questionTime === t ? "#6c63ff" : colors.border, backgroundColor: questionTime === t ? "#6c63ff22" : colors.background },
              ]}
            >
              <Text style={[styles.optionChipText, { color: questionTime === t ? "#6c63ff" : colors.mutedForeground }]}>{t}s</Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View style={[styles.settingsSummary, { backgroundColor: "#6c63ff11", borderColor: "#6c63ff33" }]}>
        <Text style={[styles.settingsSummaryText, { color: colors.mutedForeground }]}>
          {questionCount} soru · her biri {questionTime} saniye · toplam ~{Math.round((questionCount * (questionTime + 3)) / 60)} dk
        </Text>
      </View>

      <Pressable onPress={() => onStart(questionCount, questionTime)} style={[styles.primaryBtn, { marginTop: 8 }]}>
        <Feather name="search" size={18} color="#fff" />
        <Text style={styles.primaryBtnText}>Rakip Ara</Text>
      </Pressable>

      <Pressable onPress={onBack} style={[styles.outlineBtn, { borderColor: colors.border, marginTop: 12 }]}>
        <Text style={[styles.outlineBtnText, { color: colors.mutedForeground }]}>Geri</Text>
      </Pressable>
    </ScrollView>
  );
}

function SearchingView({ category, onCancel }: { category: string; onCancel: () => void }) {
  const colors = useColors();
  const pulse = useRef(new Animated.Value(1)).current;
  const cat = categories.find((c) => c.id === category);

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, { toValue: 1.18, duration: 750, useNativeDriver: true }),
        Animated.timing(pulse, { toValue: 1, duration: 750, useNativeDriver: true }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, []);

  return (
    <View style={[styles.center, { backgroundColor: colors.background }]}>
      <Animated.View style={[styles.pulseCircle, { transform: [{ scale: pulse }], borderColor: "#6c63ff" }]}>
        <Feather name="search" size={40} color="#6c63ff" />
      </Animated.View>
      <Text style={[styles.bigTitle, { color: colors.foreground, marginTop: 28 }]}>Rakip Aranıyor...</Text>
      <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>{cat?.name} kategorisi</Text>
      <Pressable onPress={onCancel} style={[styles.outlineBtn, { borderColor: colors.border, marginTop: 24 }]}>
        <Text style={[styles.outlineBtnText, { color: colors.mutedForeground }]}>İptal</Text>
      </Pressable>
    </View>
  );
}

function FoundView({ opponent, totalQuestions, questionTime }: { opponent: string; totalQuestions: number; questionTime: number }) {
  const colors = useColors();
  const scale = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    Animated.spring(scale, { toValue: 1, friction: 5, tension: 90, useNativeDriver: true }).start();
  }, []);

  return (
    <View style={[styles.center, { backgroundColor: colors.background }]}>
      <Animated.View style={{ transform: [{ scale }], alignItems: "center", gap: 16 }}>
        <Text style={{ fontSize: 56 }}>⚔️</Text>
        <Text style={[styles.bigTitle, { color: colors.foreground }]}>Rakip Bulundu!</Text>
        <View style={styles.vsRow}>
          <View style={styles.playerChip}>
            <Feather name="user" size={16} color="#6c63ff" />
            <Text style={[styles.playerName, { color: colors.foreground }]}>Sen</Text>
          </View>
          <Text style={[styles.vsText, { color: colors.mutedForeground }]}>VS</Text>
          <View style={styles.playerChip}>
            <Feather name="user" size={16} color="#ef4444" />
            <Text style={[styles.playerName, { color: colors.foreground }]}>{opponent}</Text>
          </View>
        </View>
        <View style={[styles.matchInfoBadge, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Text style={[styles.matchInfoText, { color: colors.mutedForeground }]}>
            {totalQuestions} soru · {questionTime}s / soru
          </Text>
        </View>
        <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>Oyun başlıyor...</Text>
      </Animated.View>
    </View>
  );
}

function ScoreBar({ players, timeLeft, phase }: { players: { username: string; score: number }[]; timeLeft: number; phase: string }) {
  const colors = useColors();
  return (
    <View style={[styles.scoreBar, { backgroundColor: colors.card, borderColor: colors.border }]}>
      {players.map((p, i) => (
        <View key={p.username} style={styles.scoreItem}>
          <Feather name="user" size={13} color={i === 0 ? "#6c63ff" : "#ef4444"} />
          <Text style={[styles.scoreUsername, { color: colors.foreground }]} numberOfLines={1}>{p.username}</Text>
          <Text style={[styles.scoreValue, { color: i === 0 ? "#6c63ff" : "#ef4444" }]}>{p.score}</Text>
        </View>
      ))}
      {phase === "playing" && (
        <View style={[styles.timerBadge, { backgroundColor: timeLeft <= 5 ? "#ef444422" : "#6c63ff22" }]}>
          <Text style={[styles.timerText, { color: timeLeft <= 5 ? "#ef4444" : "#6c63ff" }]}>{timeLeft}s</Text>
        </View>
      )}
    </View>
  );
}

function PlayingView({ question, questionIndex, totalQuestions, players, timeLeft, myAnswer, opponentAnswered, onAnswer }: {
  question: { question: string; options: string[]; correctIndex: number; explanation: string };
  questionIndex: number;
  totalQuestions: number;
  players: { username: string; score: number }[];
  timeLeft: number;
  myAnswer: number | null;
  opponentAnswered: boolean;
  onAnswer: (index: number) => void;
}) {
  const colors = useColors();
  const optColors = ["#6c63ff", "#22c55e", "#f59e0b", "#ef4444"];
  const isDisabled = myAnswer !== null;

  return (
    <View style={[styles.gameWrap, { backgroundColor: colors.background }]}>
      <ScoreBar players={players} timeLeft={timeLeft} phase="playing" />
      <View style={styles.progressRow}>
        <View style={[styles.progressTrack, { backgroundColor: colors.border }]}>
          <View style={[styles.progressFill, { width: `${((questionIndex + 1) / totalQuestions) * 100}%` }]} />
        </View>
        <Text style={[styles.questionNum, { color: colors.mutedForeground }]}>{questionIndex + 1}/{totalQuestions}</Text>
      </View>

      {opponentAnswered && !isDisabled && (
        <View style={[styles.opponentBadge, { backgroundColor: "#f59e0b22" }]}>
          <Text style={[styles.opponentBadgeText, { color: "#f59e0b" }]}>⚡ Rakip cevapladı!</Text>
        </View>
      )}

      <Text style={[styles.questionText, { color: colors.foreground }]}>{question.question}</Text>

      <View style={styles.optList}>
        {question.options.map((opt, i) => {
          const isSel = myAnswer === i;
          return (
            <Pressable
              key={i}
              onPress={() => !isDisabled && onAnswer(i)}
              disabled={isDisabled}
              style={({ pressed }) => [
                styles.optBtn,
                {
                  backgroundColor: isSel ? optColors[i] + "33" : colors.card,
                  borderColor: isSel ? optColors[i] : colors.border,
                  opacity: pressed && !isDisabled ? 0.75 : 1,
                },
              ]}
            >
              <View style={[styles.optLetter, { backgroundColor: isSel ? optColors[i] : colors.border + "80" }]}>
                <Text style={styles.optLetterText}>{String.fromCharCode(65 + i)}</Text>
              </View>
              <Text style={[styles.optText, { color: colors.foreground }]}>{opt}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

function QuestionResultView({ question, correctIndex, players, myAnswer }: {
  question: { question: string; options: string[]; correctIndex: number; explanation: string };
  correctIndex: number;
  players: { username: string; score: number }[];
  myAnswer: number | null;
}) {
  const colors = useColors();
  const isCorrect = myAnswer === correctIndex;
  const timedOut = myAnswer === -1;

  return (
    <View style={[styles.gameWrap, { backgroundColor: colors.background }]}>
      <ScoreBar players={players} timeLeft={0} phase="result" />

      <View style={[styles.resultBanner, { backgroundColor: timedOut ? "#64748b22" : isCorrect ? "#22c55e22" : "#ef444422" }]}>
        <Text style={[styles.resultBannerText, { color: timedOut ? "#64748b" : isCorrect ? "#22c55e" : "#ef4444" }]}>
          {timedOut ? "⏱ Süre Doldu!" : isCorrect ? "✓ Doğru!" : "✗ Yanlış!"}
        </Text>
      </View>

      <Text style={[styles.questionText, { color: colors.foreground }]}>{question.question}</Text>

      <View style={styles.optList}>
        {question.options.map((opt, i) => {
          const isCorrectOpt = i === correctIndex;
          const isWrong = i === myAnswer && !isCorrectOpt;
          return (
            <View
              key={i}
              style={[
                styles.optBtn,
                {
                  backgroundColor: isCorrectOpt ? "#22c55e22" : isWrong ? "#ef444422" : colors.card,
                  borderColor: isCorrectOpt ? "#22c55e" : isWrong ? "#ef4444" : colors.border,
                },
              ]}
            >
              <View style={[styles.optLetter, { backgroundColor: isCorrectOpt ? "#22c55e" : isWrong ? "#ef4444" : colors.border + "80" }]}>
                <Text style={styles.optLetterText}>{String.fromCharCode(65 + i)}</Text>
              </View>
              <Text style={[styles.optText, { color: colors.foreground }]}>{opt}</Text>
              {isCorrectOpt && <Feather name="check-circle" size={16} color="#22c55e" />}
            </View>
          );
        })}
      </View>

      {question.explanation ? (
        <View style={[styles.explanationBox, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Text style={[styles.explanationText, { color: colors.mutedForeground }]}>{question.explanation}</Text>
        </View>
      ) : null}
    </View>
  );
}

function FinishedView({ players, winner, totalQuestions, myUsername, onReturn }: {
  players: { username: string; score: number }[];
  winner: string | null;
  totalQuestions: number;
  myUsername: string;
  onReturn: () => void;
}) {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const isDraw = winner === null;
  const isWin = winner === myUsername;

  return (
    <View style={[styles.center, { backgroundColor: colors.background, paddingTop: insets.top + 16, paddingBottom: insets.bottom + 16 }]}>
      <Text style={{ fontSize: 60 }}>{isDraw ? "🤝" : isWin ? "🏆" : "😞"}</Text>
      <Text style={[styles.bigTitle, { color: isDraw ? "#f59e0b" : isWin ? "#22c55e" : "#ef4444", marginTop: 12 }]}>
        {isDraw ? "Berabere!" : isWin ? "Kazandın!" : "Kaybettin!"}
      </Text>
      <View style={[styles.finalCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
        {players.map((p, i) => (
          <View key={p.username} style={[styles.finalRow, i === 0 && { borderBottomWidth: 1, borderBottomColor: colors.border }]}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 8, flex: 1 }}>
              <Feather name="user" size={16} color={i === 0 ? "#6c63ff" : "#ef4444"} />
              <Text style={[styles.finalName, { color: colors.foreground }]}>{p.username}</Text>
              {p.username === winner && <Text>👑</Text>}
            </View>
            <Text style={[styles.finalScore, { color: i === 0 ? "#6c63ff" : "#ef4444" }]}>{p.score}/{totalQuestions}</Text>
          </View>
        ))}
      </View>
      <Pressable onPress={onReturn} style={styles.primaryBtn}>
        <Text style={styles.primaryBtnText}>Ana Menüye Dön</Text>
      </Pressable>
    </View>
  );
}

export function DuelScreen({ onClose }: { onClose: () => void }) {
  const { state, openSettings, searchDuel, cancelSearch, submitAnswer, returnToMenu, isConnected } = useDuel();
  const { username } = useUser();
  const { recordDuelResult } = useProfile();
  const colors = useColors();
  const insets = useSafeAreaInsets();

  const questionsRef = useRef<(typeof categories)[0]["questions"]>([]);
  const duelRecordedRef = useRef(false);
  const soundPlayedRef = useRef(false);
  const [adShown, setAdShown] = useState(false);

  const handleAdWatched = useCallback(() => {
    setAdShown(true);
  }, []);

  useEffect(() => {
    if (state.phase === "found" && state.category && state.seed !== null) {
      const cat = categories.find((c) => c.id === state.category);
      if (cat) {
        questionsRef.current = seededShuffle(cat.questions, state.seed).slice(0, state.totalQuestions);
      }
      if (!soundPlayedRef.current) {
        soundPlayedRef.current = true;
        playDuelFound();
      }
    }
    if (state.phase === "idle") {
      questionsRef.current = [];
      duelRecordedRef.current = false;
      soundPlayedRef.current = false;
      setAdShown(false);
    }
  }, [state.phase, state.category, state.seed]);

  const prevPhaseRef = useRef<string>("");
  useEffect(() => {
    if (state.phase === "question_result" && prevPhaseRef.current !== "question_result") {
      const q = questionsRef.current[state.currentQuestionIndex];
      if (state.myAnswer === null || state.myAnswer === -1) {
        playOneShot(sfx.timeout);
      } else if (q && state.myAnswer === q.correctIndex) {
        playOneShot(sfx.correct);
      } else {
        playOneShot(sfx.wrong);
      }
    }
    prevPhaseRef.current = state.phase;
  }, [state.phase, state.myAnswer, state.currentQuestionIndex]);

  useEffect(() => {
    if (state.phase === "finished" && !duelRecordedRef.current) {
      duelRecordedRef.current = true;
      const isDraw = state.winner === null;
      const isWin = state.winner === username;
      const result = isDraw ? "draw" : isWin ? "win" : "loss";
      recordDuelResult(result);
    }
  }, [state.phase, state.winner, username]);

  const handleReturn = () => {
    returnToMenu();
    onClose();
  };

  const showBackBtn = state.phase === "idle" || state.phase === "settings" || state.phase === "searching";
  const handleBack = () => {
    if (state.phase === "settings") {
      returnToMenu();
    } else {
      handleReturn();
    }
  };

  const currentQ = questionsRef.current[state.currentQuestionIndex];

  return (
    <View style={[StyleSheet.absoluteFill, { zIndex: 200, backgroundColor: colors.background }]}>
      {/* Back button */}
      {showBackBtn && (
        <Pressable onPress={handleBack} style={[styles.backBtn, { top: insets.top + 10 }]}>
          <Feather name="arrow-left" size={22} color={colors.foreground} />
        </Pressable>
      )}

      {/* Connection status indicator */}
      <View style={[styles.connBadge, { backgroundColor: isConnected ? "#22c55e22" : "#ef444422", borderColor: isConnected ? "#22c55e" : "#ef4444" }]}>
        <View style={[styles.connDot, { backgroundColor: isConnected ? "#22c55e" : "#ef4444" }]} />
        <Text style={[styles.connText, { color: isConnected ? "#22c55e" : "#ef4444" }]}>
          {isConnected ? "Sunucuya bağlı" : "Bağlanıyor..."}
        </Text>
      </View>

      {state.phase === "idle" && <CategoryPicker onSelect={openSettings} />}

      {state.phase === "settings" && state.pendingCategory && (
        <SettingsView
          categoryId={state.pendingCategory}
          onStart={(totalQ, timeQ) => searchDuel(state.pendingCategory!, totalQ, timeQ)}
          onBack={() => returnToMenu()}
        />
      )}

      {state.phase === "searching" && (
        <SearchingView category={state.category ?? ""} onCancel={cancelSearch} />
      )}

      {state.phase === "found" && <FoundView opponent={state.opponent ?? ""} totalQuestions={state.totalQuestions} questionTime={state.questionTime} />}

      {state.phase === "playing" && !adShown && (
        <AdScreen purpose="stage_end" onWatched={handleAdWatched} />
      )}

      {state.phase === "playing" && adShown && currentQ && (
        <PlayingView
          question={currentQ}
          questionIndex={state.currentQuestionIndex}
          totalQuestions={state.totalQuestions}
          players={state.players}
          timeLeft={state.timeLeft}
          myAnswer={state.myAnswer}
          opponentAnswered={state.opponentAnswered}
          onAnswer={(i) => submitAnswer(i, i === currentQ.correctIndex, currentQ.correctIndex)}
        />
      )}

      {state.phase === "question_result" && currentQ && (
        <QuestionResultView
          question={currentQ}
          correctIndex={state.revealedCorrectIndex ?? currentQ.correctIndex}
          players={state.players}
          myAnswer={state.myAnswer}
        />
      )}

      {state.phase === "finished" && (
        <FinishedView
          players={state.players}
          winner={state.winner}
          totalQuestions={state.totalQuestions}
          myUsername={username ?? ""}
          onReturn={handleReturn}
        />
      )}

      {state.phase === "opponent_left" && (
        <View style={[styles.center, { backgroundColor: colors.background }]}>
          <Text style={{ fontSize: 52 }}>😕</Text>
          <Text style={[styles.bigTitle, { color: colors.foreground, marginTop: 16 }]}>Rakip Ayrıldı</Text>
          <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>Rakibinin bağlantısı kesildi.</Text>
          <Pressable onPress={handleReturn} style={[styles.primaryBtn, { marginTop: 24 }]}>
            <Text style={styles.primaryBtnText}>Ana Menüye Dön</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  categoryList: { paddingHorizontal: 16, gap: 10 },
  bigTitle: { fontSize: 26, fontWeight: "800", textAlign: "center" },
  subtitle: { fontSize: 14, textAlign: "center", lineHeight: 20, marginTop: 4 },
  catRow: { flexDirection: "row", alignItems: "center", gap: 14, padding: 14, borderRadius: 16, borderWidth: 1 },
  catIcon: { width: 40, height: 40, borderRadius: 12, alignItems: "center", justifyContent: "center" },
  catName: { flex: 1, fontSize: 15, fontWeight: "600" },
  center: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 24, gap: 12 },
  pulseCircle: { width: 100, height: 100, borderRadius: 50, borderWidth: 3, alignItems: "center", justifyContent: "center" },
  outlineBtn: { paddingVertical: 12, paddingHorizontal: 32, borderRadius: 14, borderWidth: 1 },
  outlineBtnText: { fontSize: 15, fontWeight: "600" },
  vsRow: { flexDirection: "row", alignItems: "center", gap: 16 },
  vsText: { fontSize: 18, fontWeight: "800" },
  playerChip: { flexDirection: "row", alignItems: "center", gap: 6 },
  playerName: { fontSize: 16, fontWeight: "700" },
  gameWrap: { flex: 1, paddingHorizontal: 16, paddingTop: 50, paddingBottom: 16 },
  scoreBar: { flexDirection: "row", alignItems: "center", borderRadius: 14, borderWidth: 1, padding: 10, marginBottom: 10, gap: 6 },
  scoreItem: { flex: 1, flexDirection: "row", alignItems: "center", gap: 5 },
  scoreUsername: { flex: 1, fontSize: 13, fontWeight: "600" },
  scoreValue: { fontSize: 18, fontWeight: "800" },
  timerBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10 },
  timerText: { fontSize: 15, fontWeight: "800" },
  progressRow: { flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 8 },
  progressTrack: { flex: 1, height: 4, borderRadius: 2 },
  progressFill: { height: 4, borderRadius: 2, backgroundColor: "#6c63ff" },
  questionNum: { fontSize: 12, fontWeight: "600" },
  opponentBadge: { paddingVertical: 6, paddingHorizontal: 12, borderRadius: 10, alignSelf: "flex-start", marginBottom: 8 },
  opponentBadgeText: { fontSize: 13, fontWeight: "700" },
  questionText: { fontSize: 17, fontWeight: "700", lineHeight: 25, marginBottom: 18 },
  optList: { gap: 10 },
  optBtn: { flexDirection: "row", alignItems: "center", gap: 12, padding: 14, borderRadius: 14, borderWidth: 1.5 },
  optLetter: { width: 28, height: 28, borderRadius: 8, alignItems: "center", justifyContent: "center" },
  optLetterText: { color: "#fff", fontSize: 13, fontWeight: "700" },
  optText: { flex: 1, fontSize: 15, fontWeight: "500" },
  resultBanner: { paddingVertical: 10, paddingHorizontal: 16, borderRadius: 12, alignSelf: "stretch", alignItems: "center", marginBottom: 12 },
  resultBannerText: { fontSize: 17, fontWeight: "800" },
  explanationBox: { marginTop: 12, padding: 12, borderRadius: 12, borderWidth: 1 },
  explanationText: { fontSize: 13, lineHeight: 18 },
  finalCard: { width: "100%", borderRadius: 16, borderWidth: 1, overflow: "hidden", marginTop: 8 },
  finalRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 16 },
  finalName: { fontSize: 15, fontWeight: "600" },
  finalScore: { fontSize: 20, fontWeight: "800" },
  primaryBtn: { backgroundColor: "#6c63ff", paddingVertical: 14, paddingHorizontal: 32, borderRadius: 14, alignItems: "center" },
  primaryBtnText: { color: "#fff", fontSize: 16, fontWeight: "700" },
  backBtn: { position: "absolute", left: 16, zIndex: 10, padding: 8 },
  connBadge: { position: "absolute", top: 8, right: 16, zIndex: 20, flexDirection: "row", alignItems: "center", gap: 6, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, borderWidth: 1 },
  connDot: { width: 8, height: 8, borderRadius: 4 },
  connText: { fontSize: 11, fontWeight: "600" },

  settingsWrap: { paddingHorizontal: 20, gap: 16 },
  settingsHeader: { alignItems: "center", gap: 10, marginBottom: 4 },
  settingsCatIcon: { width: 64, height: 64, borderRadius: 20, alignItems: "center", justifyContent: "center" },
  settingsBlock: { borderRadius: 18, borderWidth: 1, padding: 16, gap: 14 },
  settingsLabel: { fontSize: 15, fontWeight: "700" },
  optionRow: { flexDirection: "row", gap: 10 },
  optionChip: { flex: 1, paddingVertical: 12, borderRadius: 12, borderWidth: 1.5, alignItems: "center", justifyContent: "center" },
  optionChipText: { fontSize: 14, fontWeight: "800" },
  settingsSummary: { borderRadius: 12, borderWidth: 1, padding: 12, alignItems: "center" },
  settingsSummaryText: { fontSize: 13, fontWeight: "600" },
  matchInfoBadge: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 12, borderWidth: 1 },
  matchInfoText: { fontSize: 13, fontWeight: "600" },
});
