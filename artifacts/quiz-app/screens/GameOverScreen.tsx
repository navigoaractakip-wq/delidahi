import * as Haptics from "expo-haptics";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { useColors } from "@/hooks/useColors";
import { useGame } from "@/context/GameContext";
import { useProfile } from "@/context/ProfileContext";
import { AchievementDef } from "@/data/achievements";
import { FeatherIconName } from "@/data/questions";

const { width } = Dimensions.get("window");

function AchievementToast({ achievements }: { achievements: AchievementDef[] }) {
  const slideAnim = useRef(new Animated.Value(-120)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.spring(slideAnim, { toValue: 0, friction: 7, tension: 80, useNativeDriver: true }),
        Animated.timing(opacityAnim, { toValue: 1, duration: 300, useNativeDriver: true }),
      ]),
      Animated.delay(3000),
      Animated.parallel([
        Animated.timing(slideAnim, { toValue: -120, duration: 400, useNativeDriver: true }),
        Animated.timing(opacityAnim, { toValue: 0, duration: 400, useNativeDriver: true }),
      ]),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={[styles.toastContainer, { transform: [{ translateY: slideAnim }], opacity: opacityAnim }]}
    >
      {achievements.map((ach) => (
        <LinearGradient
          key={ach.id}
          colors={[ach.color, ach.color + "cc"]}
          style={styles.toastCard}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text style={styles.toastEmoji}>{ach.emoji}</Text>
          <View style={styles.toastTextWrap}>
            <Text style={styles.toastTitle}>Başarım: {ach.title}</Text>
            <Text style={styles.toastSub}>{ach.description}</Text>
          </View>
        </LinearGradient>
      ))}
    </Animated.View>
  );
}

export function GameOverScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { state, currentCategory, returnToMenu, startGame, showReview } = useGame();
  const { recordGameOver } = useProfile();

  const [newAchievements, setNewAchievements] = useState<AchievementDef[]>([]);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  const topPadding = Platform.OS === "web" ? 80 : insets.top + 20;
  const bottomPadding = Platform.OS === "web" ? 50 : insets.bottom + 20;

  const wasIncomplete = state.lives === 0;

  useEffect(() => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 500, useNativeDriver: true }),
      Animated.spring(scaleAnim, { toValue: 1, friction: 5, tension: 80, useNativeDriver: true }),
    ]).start();

    if (wasIncomplete && state.currentCategoryId) {
      setTimeout(async () => {
        const result = await recordGameOver(state.currentCategoryId!, {
          correct: state.correctAnswers,
          wrong: state.wrongAnswers,
          skipped: state.skippedAnswers,
          score: state.score,
        });
        if (result.newAchievements.length > 0) {
          setNewAchievements(result.newAchievements);
        }
      }, 600);
    }
  }, []);

  if (!currentCategory) return null;

  const totalAnswered = state.correctAnswers + state.wrongAnswers + state.skippedAnswers;
  const accuracy = totalAnswered > 0 ? Math.round((state.correctAnswers / totalAnswered) * 100) : 0;

  const getMessage = () => {
    if (wasIncomplete) return "Bir Dahaki Sefere!";
    if (accuracy >= 90) return "Mükemmel!";
    if (accuracy >= 70) return "Çok İyi!";
    if (accuracy >= 50) return "İyi Çalışma!";
    return "Devam Et!";
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Animated.View
        style={[styles.content, { paddingTop: topPadding, paddingBottom: bottomPadding, opacity: fadeAnim }]}
      >
        <LinearGradient
          colors={[currentCategory.gradient[0] + "33", colors.background]}
          style={StyleSheet.absoluteFill}
        />

        <Animated.View style={[styles.scoreCircle, { transform: [{ scale: scaleAnim }] }]}>
          <LinearGradient colors={currentCategory.gradient} style={styles.scoreCircleGradient}>
            <Text style={styles.scoreLabel}>PUAN</Text>
            <Text style={styles.scoreValue}>{state.score}</Text>
          </LinearGradient>
        </Animated.View>

        <View style={styles.messageSection}>
          <Text style={[styles.message, { color: currentCategory.gradient[0] }]}>{getMessage()}</Text>
          <Text style={[styles.categoryLabel, { color: colors.mutedForeground }]}>
            {currentCategory.name} {wasIncomplete ? "— Can bitti" : "bölümü tamamlandı"}
          </Text>
        </View>

        <View style={[styles.statsCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={styles.statsGrid}>
            {([
              { icon: "check-circle" as FeatherIconName, label: "Doğru", value: state.correctAnswers, color: colors.correct },
              { icon: "x-circle" as FeatherIconName, label: "Yanlış", value: state.wrongAnswers, color: colors.wrong },
              { icon: "minus-circle" as FeatherIconName, label: "Boş", value: state.skippedAnswers, color: colors.mutedForeground },
              { icon: "bar-chart-2" as FeatherIconName, label: "Başarı", value: `%${accuracy}`, color: colors.primary },
            ]).map((item) => (
              <View key={item.label} style={styles.statItem}>
                <Feather name={item.icon} size={22} color={item.color} />
                <Text style={[styles.statValue, { color: item.color }]}>{item.value}</Text>
                <Text style={[styles.statLabel, { color: colors.mutedForeground }]}>{item.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {state.wrongAnswers > 0 && (
          <Pressable
            onPress={() => showReview()}
            style={[styles.reviewBtn, { backgroundColor: colors.wrong + "18", borderColor: colors.wrong }]}
          >
            <Feather name="alert-circle" size={18} color={colors.wrong} />
            <Text style={[styles.reviewBtnText, { color: colors.wrong }]}>
              Yanlışları İncele ({state.wrongAnswers})
            </Text>
          </Pressable>
        )}

        <View style={styles.buttons}>
          <Pressable
            onPress={() => currentCategory && startGame(currentCategory.id)}
            style={[styles.retryBtn, { borderColor: currentCategory.gradient[0] }]}
          >
            <Feather name="refresh-cw" size={18} color={currentCategory.gradient[0]} />
            <Text style={[styles.retryBtnText, { color: currentCategory.gradient[0] }]}>Tekrar Oyna</Text>
          </Pressable>
          <Pressable onPress={returnToMenu} style={[styles.menuBtn, { backgroundColor: currentCategory.gradient[0] }]}>
            <Feather name="home" size={18} color="#fff" />
            <Text style={styles.menuBtnText}>Ana Menü</Text>
          </Pressable>
        </View>
      </Animated.View>

      {newAchievements.length > 0 && <AchievementToast achievements={newAchievements} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, paddingHorizontal: 24, alignItems: "center", justifyContent: "space-evenly", gap: 20 },
  scoreCircle: { width: 160, height: 160, borderRadius: 80, overflow: "hidden", shadowColor: "#000", shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.3, shadowRadius: 16, elevation: 10 },
  scoreCircleGradient: { flex: 1, alignItems: "center", justifyContent: "center" },
  scoreLabel: { color: "rgba(255,255,255,0.8)", fontSize: 12, fontWeight: "700", letterSpacing: 2 },
  scoreValue: { color: "#fff", fontSize: 44, fontWeight: "800" },
  messageSection: { alignItems: "center", gap: 6 },
  message: { fontSize: 32, fontWeight: "800" },
  categoryLabel: { fontSize: 15 },
  statsCard: { width: "100%", borderRadius: 20, borderWidth: 1.5, padding: 20 },
  statsGrid: { flexDirection: "row", justifyContent: "space-around" },
  statItem: { alignItems: "center", gap: 6 },
  statValue: { fontSize: 20, fontWeight: "800" },
  statLabel: { fontSize: 11 },
  reviewBtn: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, padding: 14, borderRadius: 14, borderWidth: 1.5, width: "100%" },
  reviewBtnText: { fontSize: 15, fontWeight: "700" },
  buttons: { flexDirection: "row", gap: 12, width: "100%" },
  retryBtn: { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, padding: 16, borderRadius: 16, borderWidth: 2 },
  retryBtnText: { fontSize: 15, fontWeight: "700" },
  menuBtn: { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, padding: 16, borderRadius: 16 },
  menuBtnText: { color: "#fff", fontSize: 15, fontWeight: "700" },
  toastContainer: { position: "absolute", top: 0, left: 16, right: 16, gap: 8, paddingTop: Platform.OS === "ios" ? 56 : 24, zIndex: 100 },
  toastCard: { flexDirection: "row", alignItems: "center", padding: 14, borderRadius: 16, gap: 12, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 8 },
  toastEmoji: { fontSize: 28 },
  toastTextWrap: { flex: 1, gap: 2 },
  toastTitle: { color: "#fff", fontSize: 14, fontWeight: "800" },
  toastSub: { color: "rgba(255,255,255,0.85)", fontSize: 11 },
});
