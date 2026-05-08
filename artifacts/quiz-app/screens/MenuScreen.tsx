import React, { useRef, useEffect, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useColors } from "@/hooks/useColors";
import { useGame } from "@/context/GameContext";
import { useProfile } from "@/context/ProfileContext";
import { categories, Difficulty, FeatherIconName } from "@/data/questions";
import { MusicButton } from "@/components/MusicButton";
import { ProfileScreen } from "@/screens/ProfileScreen";
import { DuelScreen } from "@/screens/DuelScreen";
import { useVersionCheck } from "@/hooks/useVersionCheck";

type DifficultyOption = Difficulty | "all";

const DIFFICULTY_OPTIONS: { value: DifficultyOption; label: string; emoji: string; color: string }[] = [
  { value: "all", label: "Tümü", emoji: "🎲", color: "#6c63ff" },
  { value: "easy", label: "Kolay", emoji: "🟢", color: "#22c55e" },
  { value: "medium", label: "Orta", emoji: "🟡", color: "#f59e0b" },
  { value: "hard", label: "Zor", emoji: "🔴", color: "#ef4444" },
];

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 48) / 2;

function CategoryCard({
  category,
  highScore,
  badgeCount,
  onPress,
  index,
}: {
  category: (typeof categories)[0];
  highScore: number;
  badgeCount: number;
  onPress: () => void;
  index: number;
}) {
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      delay: index * 60,
      friction: 6,
      tension: 100,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }], width: CARD_WIDTH }}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [styles.card, { opacity: pressed ? 0.85 : 1 }]}
      >
        <LinearGradient
          colors={[category.gradient[0], category.gradient[1]]}
          style={styles.cardGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.cardTopRow}>
            <Feather name={category.icon} size={30} color="#fff" />
            {badgeCount > 0 && (
              <View style={styles.badgePill}>
                <Text style={styles.badgePillEmoji}>🏅</Text>
                <Text style={styles.badgePillText}>{badgeCount}</Text>
              </View>
            )}
          </View>
          <Text style={styles.cardName}>{category.name}</Text>
          {highScore > 0 && (
            <View style={styles.highScoreBadge}>
              <Feather name="star" size={10} color="#ffd700" />
              <Text style={styles.highScoreText}>{highScore}</Text>
            </View>
          )}
        </LinearGradient>
      </Pressable>
    </Animated.View>
  );
}

export function MenuScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { startGame, highScores, state, setDifficulty } = useGame();
  const { profile } = useProfile();
  const [showProfile, setShowProfile] = useState(false);
  const [showDuel, setShowDuel] = useState(false);
  const { isNewVersion, dismiss } = useVersionCheck();

  const topPadding = Platform.OS === "web" ? 80 : insets.top + 16;
  const bottomPadding = Platform.OS === "web" ? 50 : insets.bottom + 16;

  const headerAnim = useRef(new Animated.Value(0)).current;
  const updateBannerAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(headerAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    if (isNewVersion) {
      Animated.timing(updateBannerAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start();
      const t = setTimeout(() => {
        Animated.timing(updateBannerAnim, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }).start(() => dismiss());
      }, 5000);
      return () => clearTimeout(t);
    }
  }, [isNewVersion]);

  const totalBadges = Object.values(profile.categoryBadges).reduce((a, b) => a + b, 0);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Version Update Banner */}
      {isNewVersion && (
        <Animated.View
          style={[
            styles.updateBanner,
            {
              top: topPadding - 12,
              backgroundColor: "#6c63ff",
              opacity: updateBannerAnim,
              transform: [
                {
                  translateY: updateBannerAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-40, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <Feather name="download-cloud" size={14} color="#fff" />
          <Text style={styles.updateBannerText}>
            Yeni sorular sessizce güncellendi! 🎉
          </Text>
          <Pressable onPress={dismiss}>
            <Feather name="x" size={14} color="#fff" />
          </Pressable>
        </Animated.View>
      )}

      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingTop: topPadding, paddingBottom: bottomPadding },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View
          style={[
            styles.header,
            {
              opacity: headerAnim,
              transform: [
                {
                  translateY: headerAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-20, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <View style={styles.headerRow}>
            <View style={styles.headerActionsLeft}>
              <MusicButton />
            </View>
            <Image
              source={require("../assets/images/logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
            <View style={styles.headerActionsRight}>
              <Pressable
                onPress={() => setShowProfile(true)}
                style={[styles.profileBtn, { backgroundColor: colors.card, borderColor: colors.border }]}
              >
                <Text style={styles.profileBtnEmoji}>🏆</Text>
                {(totalBadges > 0 || profile.medals > 0) && (
                  <View style={[styles.profileBtnBadge, { backgroundColor: colors.primary }]}>
                    <Text style={styles.profileBtnBadgeText}>
                      {profile.medals > 0 ? `🥇${profile.medals}` : `🏅${totalBadges}`}
                    </Text>
                  </View>
                )}
              </Pressable>
            </View>
          </View>

          <View style={[styles.statsRow, { backgroundColor: colors.card, borderColor: colors.border }]}>
            {(
              [
                { icon: "layers" as FeatherIconName, label: "Kategori", value: String(categories.length) },
                { icon: "help-circle" as FeatherIconName, label: "Soru/Bölüm", value: "10" },
                { icon: "clock" as FeatherIconName, label: "Süre", value: "40s" },
              ]
            ).map((stat) => (
              <View key={stat.label} style={styles.statItem}>
                <Feather name={stat.icon} size={18} color={colors.primary} />
                <Text style={[styles.statValue, { color: colors.foreground }]}>
                  {stat.value}
                </Text>
                <Text style={[styles.statLabel, { color: colors.mutedForeground }]}>
                  {stat.label}
                </Text>
              </View>
            ))}
          </View>

          {(profile.medals > 0 || totalBadges > 0) && (
            <Pressable
              onPress={() => setShowProfile(true)}
              style={[styles.achievementBanner, { backgroundColor: colors.card, borderColor: colors.border }]}
            >
              <LinearGradient
                colors={profile.medals > 0 ? ["#b8860b22", "#ffd70011"] : ["#6c63ff22", "#6c63ff05"]}
                style={StyleSheet.absoluteFill}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              />
              <View style={styles.achievementLeft}>
                <Text style={styles.achievementEmoji}>
                  {profile.medals > 0 ? "🥇" : "🏅"}
                </Text>
                <View>
                  <Text style={[styles.achievementTitle, { color: colors.foreground }]}>
                    {profile.medals > 0
                      ? `${profile.medals} Altın Madalyan Var!`
                      : `${totalBadges} Rozet Kazandın!`}
                  </Text>
                  <Text style={[styles.achievementSub, { color: colors.mutedForeground }]}>
                    Profilini görüntüle
                  </Text>
                </View>
              </View>
              <Feather name="chevron-right" size={18} color={colors.mutedForeground} />
            </Pressable>
          )}
        </Animated.View>

        <Pressable
          onPress={() => setShowDuel(true)}
          style={({ pressed }) => [
            styles.duelBtn,
            { opacity: pressed ? 0.85 : 1 },
          ]}
        >
          <LinearGradient
            colors={["#6c63ff", "#4834d4"]}
            style={styles.duelBtnGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.duelBtnEmoji}>⚔️</Text>
            <View style={styles.duelBtnContent}>
              <Text style={styles.duelBtnTitle}>Düello</Text>
              <Text style={styles.duelBtnSub}>Gerçek zamanlı 1v1 yarışması</Text>
            </View>
            <Feather name="chevron-right" size={20} color="rgba(255,255,255,0.7)" />
          </LinearGradient>
        </Pressable>

        <Text style={[styles.sectionTitle, { color: colors.foreground }]}>
          Zorluk Seviyesi
        </Text>

        <View style={styles.difficultyRow}>
          {DIFFICULTY_OPTIONS.map((opt) => {
            const isSelected = state.difficulty === opt.value;
            return (
              <Pressable
                key={opt.value}
                onPress={() => setDifficulty(opt.value)}
                style={({ pressed }) => [
                  styles.difficultyBtn,
                  {
                    backgroundColor: isSelected ? opt.color : colors.card,
                    borderColor: isSelected ? opt.color : colors.border,
                    opacity: pressed ? 0.8 : 1,
                  },
                ]}
              >
                <Text style={styles.difficultyEmoji}>{opt.emoji}</Text>
                <Text
                  style={[
                    styles.difficultyLabel,
                    { color: isSelected ? "#fff" : colors.foreground },
                  ]}
                >
                  {opt.label}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <Text style={[styles.sectionTitle, { color: colors.foreground }]}>
          Kategori Seç
        </Text>

        <View style={styles.grid}>
          {categories.map((cat, i) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              highScore={highScores[cat.id] ?? 0}
              badgeCount={profile.categoryBadges[cat.id] ?? 0}
              onPress={() => startGame(cat.id)}
              index={i}
            />
          ))}
        </View>
      </ScrollView>

      <ProfileScreen visible={showProfile} onClose={() => setShowProfile(false)} />
      {showDuel && <DuelScreen onClose={() => setShowDuel(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  updateBanner: {
    position: "absolute",
    left: 16,
    right: 16,
    zIndex: 100,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
  },
  updateBannerText: {
    flex: 1,
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
  },
  scrollContent: {
    paddingHorizontal: 16,
    gap: 20,
  },
  header: {
    gap: 16,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    flex: 1,
    height: 140,
    alignSelf: "center",
  },
  headerActionsLeft: {
    width: 44,
    alignItems: "flex-start",
    alignSelf: "flex-start",
    paddingTop: 4,
  },
  headerActionsRight: {
    width: 44,
    alignItems: "flex-end",
    alignSelf: "flex-start",
    paddingTop: 4,
  },
  profileBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    position: "relative",
  },
  profileBtnEmoji: {
    fontSize: 22,
  },
  profileBtnBadge: {
    position: "absolute",
    bottom: -4,
    right: -6,
    borderRadius: 10,
    paddingHorizontal: 4,
    paddingVertical: 1,
    minWidth: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  profileBtnBadgeText: {
    color: "#fff",
    fontSize: 9,
    fontWeight: "800",
  },
  statsRow: {
    flexDirection: "row",
    borderRadius: 16,
    borderWidth: 1,
    paddingVertical: 14,
    paddingHorizontal: 8,
  },
  statItem: {
    flex: 1,
    alignItems: "center",
    gap: 4,
  },
  statValue: {
    fontSize: 16,
    fontWeight: "700",
  },
  statLabel: {
    fontSize: 11,
  },
  achievementBanner: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 14,
    overflow: "hidden",
  },
  achievementLeft: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  achievementEmoji: {
    fontSize: 28,
  },
  achievementTitle: {
    fontSize: 14,
    fontWeight: "700",
  },
  achievementSub: {
    fontSize: 11,
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
  difficultyRow: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-between",
  },
  difficultyBtn: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 6,
    borderRadius: 14,
    borderWidth: 2,
    gap: 4,
  },
  difficultyEmoji: {
    fontSize: 18,
  },
  difficultyLabel: {
    fontSize: 12,
    fontWeight: "700",
  },
  duelBtn: {
    borderRadius: 18,
    overflow: "hidden",
  },
  duelBtnGradient: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 18,
    gap: 14,
  },
  duelBtnEmoji: {
    fontSize: 28,
  },
  duelBtnContent: {
    flex: 1,
  },
  duelBtnTitle: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "800",
  },
  duelBtnSub: {
    color: "rgba(255,255,255,0.75)",
    fontSize: 12,
    marginTop: 2,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    justifyContent: "space-between",
  },
  card: {
    borderRadius: 18,
    overflow: "hidden",
  },
  cardGradient: {
    padding: 18,
    height: 110,
    alignItems: "flex-start",
    justifyContent: "space-between",
    borderRadius: 18,
  },
  cardTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  badgePill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    backgroundColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
  },
  badgePillEmoji: {
    fontSize: 10,
  },
  badgePillText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "800",
  },
  cardName: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 16,
  },
  highScoreBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    backgroundColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  highScoreText: {
    color: "#ffd700",
    fontSize: 10,
    fontWeight: "700",
  },
});
