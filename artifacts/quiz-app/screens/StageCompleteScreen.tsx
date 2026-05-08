import * as Haptics from "expo-haptics";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
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
import { useProfile, AwardResult } from "@/context/ProfileContext";
import { AchievementDef } from "@/data/achievements";
import { categories, FeatherIconName } from "@/data/questions";

const { width } = Dimensions.get("window");

function ToastStack({
  award,
  categoryGradient,
  categoryIcon,
}: {
  award: AwardResult;
  categoryGradient: [string, string];
  categoryIcon: string;
}) {
  const slideAnim = useRef(new Animated.Value(-160)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.spring(slideAnim, { toValue: 0, friction: 7, tension: 80, useNativeDriver: true }),
        Animated.timing(opacityAnim, { toValue: 1, duration: 300, useNativeDriver: true }),
      ]),
      Animated.delay(3000),
      Animated.parallel([
        Animated.timing(slideAnim, { toValue: -160, duration: 400, useNativeDriver: true }),
        Animated.timing(opacityAnim, { toValue: 0, duration: 400, useNativeDriver: true }),
      ]),
    ]).start();
  }, []);

  const toasts: { emoji: string; title: string; sub: string; colors: [string, string] }[] = [];

  if (award.newMedal) {
    toasts.push({ emoji: "🥇", title: "Altın Madalya Kazandın!", sub: `Toplam ${award.medalCount} madalyan var`, colors: ["#b8860b", "#ffd700"] });
  }
  if (award.newBadge) {
    toasts.push({ emoji: "🏅", title: "Rozet Kazandın!", sub: `Bu kategoride ${award.badgeCount}. rozetin`, colors: categoryGradient });
  }
  for (const ach of award.newAchievements) {
    toasts.push({ emoji: ach.emoji, title: `Başarım: ${ach.title}`, sub: ach.description, colors: [ach.color, ach.color + "cc"] });
  }

  if (toasts.length === 0) return null;

  return (
    <Animated.View
      style={[styles.toastContainer, { transform: [{ translateY: slideAnim }], opacity: opacityAnim }]}
    >
      {toasts.map((t, i) => (
        <LinearGradient key={i} colors={t.colors} style={styles.toastCard} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
          <Text style={styles.toastEmoji}>{t.emoji}</Text>
          <View style={styles.toastTextWrap}>
            <Text style={styles.toastTitle}>{t.title}</Text>
            <Text style={styles.toastSub}>{t.sub}</Text>
          </View>
        </LinearGradient>
      ))}
    </Animated.View>
  );
}

export function StageCompleteScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { state, currentCategory, continueNextStage, returnToMenu, showReview } = useGame();
  const { awardStageCompletion } = useProfile();

  const [award, setAward] = useState<AwardResult | null>(null);

  const scaleAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const starAnim1 = useRef(new Animated.Value(0)).current;
  const starAnim2 = useRef(new Animated.Value(0)).current;
  const starAnim3 = useRef(new Animated.Value(0)).current;

  const topPadding = Platform.OS === "web" ? 80 : insets.top + 20;
  const bottomPadding = Platform.OS === "web" ? 50 : insets.bottom + 20;

  useEffect(() => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

    Animated.sequence([
      Animated.parallel([
        Animated.spring(scaleAnim, { toValue: 1, friction: 5, tension: 100, useNativeDriver: true }),
        Animated.timing(fadeAnim, { toValue: 1, duration: 400, useNativeDriver: true }),
      ]),
      Animated.stagger(150, [
        Animated.spring(starAnim1, { toValue: 1, friction: 4, tension: 100, useNativeDriver: true }),
        Animated.spring(starAnim2, { toValue: 1, friction: 4, tension: 100, useNativeDriver: true }),
        Animated.spring(starAnim3, { toValue: 1, friction: 4, tension: 100, useNativeDriver: true }),
      ]),
    ]).start();

    if (state.currentCategoryId) {
      setTimeout(async () => {
        const result = await awardStageCompletion(state.currentCategoryId!, {
          correct: state.correctAnswers,
          wrong: state.wrongAnswers,
          skipped: state.skippedAnswers,
          score: state.score,
        });
        setAward(result);
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      }, 800);
    }
  }, []);

  if (!currentCategory) return null;

  const accuracy =
    state.currentQuestionIndex > 0
      ? Math.round((state.correctAnswers / (state.currentQuestionIndex + 1)) * 100)
      : 0;

  const stars = accuracy >= 90 ? 3 : accuracy >= 60 ? 2 : 1;
  const starAnims = [starAnim1, starAnim2, starAnim3];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.content, { paddingTop: topPadding, paddingBottom: bottomPadding }]}>
        <Animated.View style={[styles.imageContainer, { transform: [{ scale: scaleAnim }], opacity: fadeAnim }]}>
          <Image source={currentCategory.image} style={styles.categoryImage} resizeMode="cover" />
          <LinearGradient colors={["transparent", colors.background]} style={styles.imageOverlay} />
          <View style={styles.imageLabel}>
            <Text style={[styles.imageLabelText, { color: "#fff" }]}>{currentCategory.name}</Text>
          </View>
        </Animated.View>

        <Animated.View style={[styles.resultContent, { opacity: fadeAnim }]}>
          <View style={styles.starsRow}>
            {starAnims.map((anim, i) => (
              <Animated.View key={i} style={{ transform: [{ scale: anim }], opacity: anim }}>
                <Feather name="star" size={36} color={i < stars ? colors.gold : colors.border} style={{ marginHorizontal: 4 }} />
              </Animated.View>
            ))}
          </View>

          <Text style={[styles.completeTitle, { color: colors.foreground }]}>Bölüm Tamamlandı!</Text>

          <View style={[styles.scoreCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <View style={styles.scoreRow}>
              <Feather name="star" size={24} color={colors.gold} />
              <Text style={[styles.scoreValue, { color: colors.foreground }]}>{state.score}</Text>
              <Text style={[styles.scoreLabel, { color: colors.mutedForeground }]}>Puan</Text>
            </View>
            <View style={[styles.divider, { backgroundColor: colors.border }]} />
            <View style={styles.statsGrid}>
              {([
                { label: "Doğru", value: state.correctAnswers, color: colors.correct, icon: "check-circle" as FeatherIconName },
                { label: "Yanlış", value: state.wrongAnswers, color: colors.wrong, icon: "x-circle" as FeatherIconName },
                { label: "Boş", value: state.skippedAnswers, color: colors.mutedForeground, icon: "minus-circle" as FeatherIconName },
                { label: "Başarı", value: `%${accuracy}`, color: colors.primary, icon: "percent" as FeatherIconName },
              ]).map((stat) => (
                <View key={stat.label} style={styles.statItem}>
                  <Feather name={stat.icon} size={18} color={stat.color} />
                  <Text style={[styles.statValue, { color: stat.color }]}>{stat.value}</Text>
                  <Text style={[styles.statLabel, { color: colors.mutedForeground }]}>{stat.label}</Text>
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
            <Pressable onPress={returnToMenu} style={[styles.menuBtn, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <Feather name="home" size={18} color={colors.foreground} />
              <Text style={[styles.menuBtnText, { color: colors.foreground }]}>Ana Menü</Text>
            </Pressable>
            <Pressable onPress={continueNextStage} style={[styles.nextBtn, { backgroundColor: currentCategory.gradient[0] }]}>
              <Text style={styles.nextBtnText}>Sonraki Aşama</Text>
              <Feather name="arrow-right" size={18} color="#fff" />
            </Pressable>
          </View>
        </Animated.View>
      </View>

      {award && (
        <ToastStack
          award={award}
          categoryGradient={currentCategory.gradient as [string, string]}
          categoryIcon={currentCategory.icon}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, paddingHorizontal: 20, gap: 20, justifyContent: "space-between" },
  imageContainer: { width: "100%", height: 200, borderRadius: 20, overflow: "hidden", position: "relative" },
  categoryImage: { width: "100%", height: "100%" },
  imageOverlay: { position: "absolute", bottom: 0, left: 0, right: 0, height: 80 },
  imageLabel: { position: "absolute", bottom: 12, left: 16 },
  imageLabelText: { fontSize: 20, fontWeight: "800", textShadowColor: "rgba(0,0,0,0.8)", textShadowOffset: { width: 0, height: 1 }, textShadowRadius: 4 },
  resultContent: { flex: 1, gap: 16, alignItems: "center", justifyContent: "center" },
  starsRow: { flexDirection: "row", alignItems: "center" },
  completeTitle: { fontSize: 26, fontWeight: "800", textAlign: "center" },
  scoreCard: { width: "100%", borderRadius: 20, borderWidth: 1.5, padding: 20, gap: 16 },
  scoreRow: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10 },
  scoreValue: { fontSize: 36, fontWeight: "800" },
  scoreLabel: { fontSize: 16, marginTop: 6 },
  divider: { height: 1 },
  statsGrid: { flexDirection: "row", justifyContent: "space-around" },
  statItem: { alignItems: "center", gap: 4 },
  statValue: { fontSize: 18, fontWeight: "700" },
  statLabel: { fontSize: 11 },
  reviewBtn: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, padding: 14, borderRadius: 14, borderWidth: 1.5, width: "100%" },
  reviewBtnText: { fontSize: 15, fontWeight: "700" },
  buttons: { flexDirection: "row", gap: 12, width: "100%" },
  menuBtn: { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, padding: 16, borderRadius: 16, borderWidth: 1.5 },
  menuBtnText: { fontSize: 15, fontWeight: "700" },
  nextBtn: { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, padding: 16, borderRadius: 16 },
  nextBtnText: { color: "#fff", fontSize: 15, fontWeight: "700" },
  toastContainer: { position: "absolute", top: 0, left: 16, right: 16, gap: 8, paddingTop: Platform.OS === "ios" ? 56 : 24, zIndex: 100 },
  toastCard: { flexDirection: "row", alignItems: "center", padding: 14, borderRadius: 16, gap: 12, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 8 },
  toastEmoji: { fontSize: 28 },
  toastTextWrap: { flex: 1, gap: 2 },
  toastTitle: { color: "#fff", fontSize: 14, fontWeight: "800" },
  toastSub: { color: "rgba(255,255,255,0.85)", fontSize: 11 },
});
