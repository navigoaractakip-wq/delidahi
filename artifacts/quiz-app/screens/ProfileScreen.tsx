import React, { useEffect, useRef } from "react";
import {
  Animated,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { useColors } from "@/hooks/useColors";
import { useProfile, STAGES_PER_MEDAL } from "@/context/ProfileContext";
import { ACHIEVEMENT_DEFS, LEVELS, getLevel, getLevelProgress } from "@/data/achievements";
import { categories } from "@/data/questions";
import { useAdsConsent, showAdsPrivacyOptions } from "@/hooks/useAdsConsent";

interface ProfileScreenProps {
  visible: boolean;
  onClose: () => void;
}

function LevelCard({ totalCorrect }: { totalCorrect: number }) {
  const colors = useColors();
  const level = getLevel(totalCorrect);
  const progress = getLevelProgress(totalCorrect);
  const isMax = level.next === Infinity;
  const nextLevel = LEVELS[level.index + 1];

  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progressAnim, { toValue: progress, duration: 900, useNativeDriver: false }).start();
  }, [progress]);

  return (
    <LinearGradient
      colors={[level.color + "33", level.color + "11"]}
      style={[styles.levelCard, { borderColor: level.color + "66" }]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.levelTop}>
        <Text style={styles.levelEmoji}>{level.emoji}</Text>
        <View style={styles.levelInfo}>
          <Text style={[styles.levelTitle, { color: level.color }]}>{level.title}</Text>
          <Text style={[styles.levelSub, { color: colors.mutedForeground }]}>
            {isMax ? "Maksimum seviyeye ulaştın!" : `${totalCorrect} / ${level.next} doğru cevap`}
          </Text>
        </View>
        <View style={[styles.levelBadge, { backgroundColor: level.color }]}>
          <Text style={styles.levelBadgeText}>Lv.{level.index + 1}</Text>
        </View>
      </View>

      {!isMax && (
        <View style={styles.levelProgressWrap}>
          <View style={[styles.levelProgressTrack, { backgroundColor: colors.border }]}>
            <Animated.View
              style={[
                styles.levelProgressFill,
                { backgroundColor: level.color, width: progressAnim.interpolate({ inputRange: [0, 1], outputRange: ["0%", "100%"] }) },
              ]}
            />
          </View>
          {nextLevel && (
            <Text style={[styles.levelProgressLabel, { color: colors.mutedForeground }]}>
              Sonraki: {nextLevel.emoji} {nextLevel.title}
            </Text>
          )}
        </View>
      )}
    </LinearGradient>
  );
}

function StatsGrid({ profile }: { profile: ReturnType<typeof useProfile>["profile"] }) {
  const colors = useColors();
  const totalAnswered = profile.totalCorrect + profile.totalWrong + profile.totalSkipped;
  const accuracy = totalAnswered > 0 ? Math.round((profile.totalCorrect / totalAnswered) * 100) : 0;
  const totalBadges = Object.values(profile.categoryBadges).reduce((a, b) => a + b, 0);

  const items = [
    { label: "Oyun", value: String(profile.totalGamesPlayed), emoji: "🎮" },
    { label: "Doğru", value: String(profile.totalCorrect), emoji: "✅" },
    { label: "Yanlış", value: String(profile.totalWrong), emoji: "❌" },
    { label: "Başarı %", value: `%${accuracy}`, emoji: "📊" },
    { label: "Rozetler", value: String(totalBadges), emoji: "🏅" },
    { label: "Madalya", value: String(profile.medals), emoji: "🥇" },
  ];

  return (
    <View style={styles.statsGrid}>
      {items.map((item) => (
        <View key={item.label} style={[styles.statCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Text style={styles.statEmoji}>{item.emoji}</Text>
          <Text style={[styles.statValue, { color: colors.foreground }]}>{item.value}</Text>
          <Text style={[styles.statLabel, { color: colors.mutedForeground }]}>{item.label}</Text>
        </View>
      ))}
    </View>
  );
}

function AchievementsSection({ earned }: { earned: string[] }) {
  const colors = useColors();

  return (
    <View style={styles.achievementsGrid}>
      {ACHIEVEMENT_DEFS.map((def, i) => {
        const isEarned = earned.includes(def.id);
        const scaleAnim = useRef(new Animated.Value(0)).current;

        useEffect(() => {
          Animated.spring(scaleAnim, { toValue: 1, delay: i * 60, friction: 5, tension: 100, useNativeDriver: true }).start();
        }, []);

        return (
          <Animated.View key={def.id} style={[styles.achCard, { transform: [{ scale: scaleAnim }] }]}>
            {isEarned ? (
              <LinearGradient colors={[def.color, def.color + "cc"]} style={styles.achGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
                <Text style={styles.achEmoji}>{def.emoji}</Text>
                <Text style={styles.achTitle}>{def.title}</Text>
                <Text style={styles.achDesc} numberOfLines={2}>{def.description}</Text>
              </LinearGradient>
            ) : (
              <View style={[styles.achGradient, styles.achLocked, { backgroundColor: colors.card, borderColor: colors.border }]}>
                <Text style={[styles.achEmoji, { opacity: 0.3 }]}>{def.emoji}</Text>
                <Text style={[styles.achTitle, { color: colors.mutedForeground }]}>{def.title}</Text>
                <Text style={[styles.achDesc, { color: colors.mutedForeground }]} numberOfLines={2}>{def.description}</Text>
                <View style={[styles.lockOverlay]}>
                  <Feather name="lock" size={12} color={colors.mutedForeground} />
                </View>
              </View>
            )}
          </Animated.View>
        );
      })}
    </View>
  );
}

function CategoryStatsSection({ profile }: { profile: ReturnType<typeof useProfile>["profile"] }) {
  const colors = useColors();

  const played = categories.filter((c) => profile.categoryStats[c.id]);
  if (played.length === 0) {
    return (
      <View style={[styles.emptyState, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <Text style={styles.emptyEmoji}>📊</Text>
        <Text style={[styles.emptyText, { color: colors.mutedForeground }]}>Henüz istatistik yok.{"\n"}Oynamaya başla!</Text>
      </View>
    );
  }

  return (
    <View style={styles.catTable}>
      <View style={[styles.catTableHeader, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <Text style={[styles.catColWide, { color: colors.mutedForeground }]}>Kategori</Text>
        <Text style={[styles.catCol, { color: colors.mutedForeground }]}>Oyun</Text>
        <Text style={[styles.catCol, { color: colors.mutedForeground }]}>Doğru</Text>
        <Text style={[styles.catCol, { color: colors.mutedForeground }]}>Başarı</Text>
        <Text style={[styles.catCol, { color: colors.mutedForeground }]}>En İyi</Text>
      </View>
      {played.map((cat) => {
        const stat = profile.categoryStats[cat.id];
        const acc = stat.totalAnswered > 0 ? Math.round((stat.correctAnswers / stat.totalAnswered) * 100) : 0;
        return (
          <View key={cat.id} style={[styles.catTableRow, { borderColor: colors.border }]}>
            <View style={styles.catColWideRow}>
              <LinearGradient colors={[cat.gradient[0], cat.gradient[1]]} style={styles.catDot} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
                <Feather name={cat.icon as any} size={10} color="#fff" />
              </LinearGradient>
              <Text style={[styles.catName, { color: colors.foreground }]} numberOfLines={1}>{cat.name}</Text>
            </View>
            <Text style={[styles.catCol, { color: colors.foreground }]}>{stat.gamesPlayed}</Text>
            <Text style={[styles.catCol, { color: colors.correct }]}>{stat.correctAnswers}</Text>
            <Text style={[styles.catCol, { color: acc >= 70 ? colors.correct : acc >= 50 ? colors.gold : colors.wrong }]}>%{acc}</Text>
            <Text style={[styles.catCol, { color: colors.primary }]}>{stat.bestScore}</Text>
          </View>
        );
      })}
    </View>
  );
}

function DuelStatsSection({ profile }: { profile: ReturnType<typeof useProfile>["profile"] }) {
  const colors = useColors();
  const wins = profile.duelWins ?? 0;
  const losses = profile.duelLosses ?? 0;
  const draws = profile.duelDraws ?? 0;
  const total = wins + losses + draws;
  const winRate = total > 0 ? Math.round((wins / total) * 100) : 0;
  const barAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(barAnim, { toValue: total > 0 ? wins / total : 0, duration: 900, useNativeDriver: false }).start();
  }, [wins, total]);

  if (total === 0) {
    return (
      <View style={[styles.emptyState, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <Text style={styles.emptyEmoji}>⚔️</Text>
        <Text style={[styles.emptyText, { color: colors.mutedForeground }]}>Henüz düello yok.{"\n"}Bir rakip bul ve yarış!</Text>
      </View>
    );
  }

  return (
    <View style={[styles.duelCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <LinearGradient colors={["#6c63ff22", "#6c63ff05"]} style={StyleSheet.absoluteFill} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} />
      <View style={styles.duelTopRow}>
        <View style={styles.duelStat}>
          <Text style={[styles.duelStatNum, { color: "#22c55e" }]}>{wins}</Text>
          <Text style={[styles.duelStatLabel, { color: colors.mutedForeground }]}>Galibiyet</Text>
        </View>
        <View style={[styles.duelDivider, { backgroundColor: colors.border }]} />
        <View style={styles.duelStat}>
          <Text style={[styles.duelStatNum, { color: "#ef4444" }]}>{losses}</Text>
          <Text style={[styles.duelStatLabel, { color: colors.mutedForeground }]}>Mağlubiyet</Text>
        </View>
        <View style={[styles.duelDivider, { backgroundColor: colors.border }]} />
        <View style={styles.duelStat}>
          <Text style={[styles.duelStatNum, { color: "#f59e0b" }]}>{draws}</Text>
          <Text style={[styles.duelStatLabel, { color: colors.mutedForeground }]}>Beraberlik</Text>
        </View>
      </View>
      <View style={styles.duelBarWrap}>
        <View style={[styles.duelBarTrack, { backgroundColor: colors.border }]}>
          <Animated.View
            style={[styles.duelBarFill, { backgroundColor: "#22c55e", width: barAnim.interpolate({ inputRange: [0, 1], outputRange: ["0%", "100%"] }) }]}
          />
        </View>
        <Text style={[styles.duelBarLabel, { color: colors.mutedForeground }]}>Galibiyet Oranı: %{winRate} · {total} maç</Text>
      </View>
    </View>
  );
}

function BadgesSection({ profile }: { profile: ReturnType<typeof useProfile>["profile"] }) {
  const colors = useColors();
  const earnedCats = categories.filter((c) => (profile.categoryBadges[c.id] ?? 0) > 0);
  const lockedCats = categories.filter((c) => (profile.categoryBadges[c.id] ?? 0) === 0);

  if (earnedCats.length === 0) return (
    <View style={[styles.emptyState, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <Text style={styles.emptyEmoji}>🏅</Text>
      <Text style={[styles.emptyText, { color: colors.mutedForeground }]}>Henüz rozet yok.{"\n"}Bir aşamayı tamamla!</Text>
    </View>
  );

  return (
    <View style={styles.badgesGrid}>
      {earnedCats.map((cat) => (
        <LinearGradient key={cat.id} colors={[cat.gradient[0], cat.gradient[1]]} style={styles.badgeCard} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
          <Feather name={cat.icon as any} size={22} color="#fff" />
          <View style={styles.badgeCountRow}>
            <Text style={styles.badgeRozetEmoji}>🏅</Text>
            <Text style={styles.badgeCountNum}>{profile.categoryBadges[cat.id]}</Text>
          </View>
          <Text style={styles.badgeCategoryName} numberOfLines={1}>{cat.name}</Text>
        </LinearGradient>
      ))}
      {lockedCats.map((cat) => (
        <View key={cat.id} style={[styles.badgeCard, styles.badgeLocked, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Feather name={cat.icon as any} size={22} color={colors.mutedForeground} />
          <Text style={styles.badgeLockEmoji}>🔒</Text>
          <Text style={[styles.badgeCategoryName, { color: colors.mutedForeground }]} numberOfLines={1}>{cat.name}</Text>
        </View>
      ))}
    </View>
  );
}

function MedalProgress({ totalStages, medals }: { totalStages: number; medals: number }) {
  const colors = useColors();
  const stagesInProgress = totalStages % STAGES_PER_MEDAL;
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progressAnim, { toValue: stagesInProgress / STAGES_PER_MEDAL, duration: 900, useNativeDriver: false }).start();
  }, [stagesInProgress]);

  return (
    <View style={[styles.medalCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <LinearGradient colors={["#b8860b22", "#ffd70011"]} style={StyleSheet.absoluteFill} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} />
      <Text style={styles.medalEmoji}>🥇</Text>
      <View style={styles.medalInfo}>
        <Text style={[styles.medalTitle, { color: colors.foreground }]}>
          {medals === 0 ? "Henüz Madalya Yok" : `${medals} Altın Madalya`}
        </Text>
        <Text style={[styles.medalSub, { color: colors.mutedForeground }]}>Her 10 aşamada bir altın madalya</Text>
        <View style={styles.progressWrap}>
          <View style={[styles.progressTrack, { backgroundColor: colors.border }]}>
            <Animated.View style={[styles.progressFill, { backgroundColor: "#ffd700", width: progressAnim.interpolate({ inputRange: [0, 1], outputRange: ["0%", "100%"] }) }]} />
          </View>
          <Text style={[styles.progressLabel, { color: colors.mutedForeground }]}>{stagesInProgress}/{STAGES_PER_MEDAL} aşama</Text>
        </View>
      </View>
    </View>
  );
}

function PrivacyOptionsButton() {
  const colors = useColors();
  const { privacyRequired } = useAdsConsent();

  if (!privacyRequired) return null;

  return (
    <Pressable
      onPress={() => {
        showAdsPrivacyOptions();
      }}
      style={[styles.privacyBtn, { backgroundColor: colors.card, borderColor: colors.border }]}
    >
      <Feather name="shield" size={18} color={colors.mutedForeground} />
      <View style={{ flex: 1 }}>
        <Text style={[styles.privacyBtnTitle, { color: colors.foreground }]}>
          Reklam Gizlilik Ayarları
        </Text>
        <Text style={[styles.privacyBtnSub, { color: colors.mutedForeground }]}>
          Reklam kişiselleştirme tercihlerini değiştir
        </Text>
      </View>
      <Feather name="chevron-right" size={18} color={colors.mutedForeground} />
    </Pressable>
  );
}

export function ProfileScreen({ visible, onClose }: ProfileScreenProps) {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { profile } = useProfile();
  const topPadding = Platform.OS === "web" ? 60 : insets.top + 12;
  const bottomPadding = Platform.OS === "web" ? 40 : insets.bottom + 20;
  const earnedCount = profile.achievements.length;

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="pageSheet" onRequestClose={onClose}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={[styles.topBar, { paddingTop: topPadding, backgroundColor: colors.background, borderBottomColor: colors.border }]}>
          <Text style={[styles.topBarTitle, { color: colors.foreground }]}>Profilim</Text>
          <Pressable onPress={onClose} style={[styles.closeBtn, { backgroundColor: colors.card }]}>
            <Feather name="x" size={20} color={colors.foreground} />
          </Pressable>
        </View>

        <ScrollView contentContainerStyle={[styles.scrollContent, { paddingBottom: bottomPadding }]} showsVerticalScrollIndicator={false}>
          <LevelCard totalCorrect={profile.totalCorrect} />
          <StatsGrid profile={profile} />

          <Text style={[styles.sectionTitle, { color: colors.foreground }]}>
            Başarımlar ({earnedCount}/{ACHIEVEMENT_DEFS.length})
          </Text>
          <AchievementsSection earned={profile.achievements} />

          <Text style={[styles.sectionTitle, { color: colors.foreground }]}>Kategori İstatistikleri</Text>
          <CategoryStatsSection profile={profile} />

          <Text style={[styles.sectionTitle, { color: colors.foreground }]}>Düello İstatistikleri ⚔️</Text>
          <DuelStatsSection profile={profile} />

          <Text style={[styles.sectionTitle, { color: colors.foreground }]}>Rozetler</Text>
          <BadgesSection profile={profile} />

          <MedalProgress totalStages={profile.totalStagesCompleted} medals={profile.medals} />

          <PrivacyOptionsButton />
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  topBar: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, paddingBottom: 14, borderBottomWidth: 1 },
  topBarTitle: { fontSize: 20, fontWeight: "800" },
  closeBtn: { width: 36, height: 36, borderRadius: 18, alignItems: "center", justifyContent: "center" },
  scrollContent: { paddingHorizontal: 16, paddingTop: 20, gap: 16 },

  levelCard: { borderRadius: 20, borderWidth: 1.5, padding: 18, gap: 14 },
  levelTop: { flexDirection: "row", alignItems: "center", gap: 14 },
  levelEmoji: { fontSize: 40 },
  levelInfo: { flex: 1, gap: 3 },
  levelTitle: { fontSize: 22, fontWeight: "800" },
  levelSub: { fontSize: 12 },
  levelBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10 },
  levelBadgeText: { color: "#fff", fontSize: 12, fontWeight: "800" },
  levelProgressWrap: { gap: 6 },
  levelProgressTrack: { height: 10, borderRadius: 5, overflow: "hidden" },
  levelProgressFill: { height: "100%", borderRadius: 5 },
  levelProgressLabel: { fontSize: 11 },

  statsGrid: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  statCard: { width: "30%", flexGrow: 1, alignItems: "center", padding: 12, borderRadius: 14, borderWidth: 1, gap: 4 },
  statEmoji: { fontSize: 20 },
  statValue: { fontSize: 18, fontWeight: "800" },
  statLabel: { fontSize: 10, textAlign: "center" },

  sectionTitle: { fontSize: 16, fontWeight: "700", marginTop: 4 },

  achievementsGrid: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  achCard: { width: "47%", flexGrow: 1, borderRadius: 16, overflow: "hidden" },
  achGradient: { padding: 14, gap: 4, minHeight: 90 },
  achLocked: { borderWidth: 1, position: "relative" },
  achEmoji: { fontSize: 26 },
  achTitle: { color: "#fff", fontSize: 12, fontWeight: "800" },
  achDesc: { color: "rgba(255,255,255,0.8)", fontSize: 10, lineHeight: 13 },
  lockOverlay: { position: "absolute", top: 8, right: 8 },

  catTable: { gap: 0, borderRadius: 14, overflow: "hidden" },
  catTableHeader: { flexDirection: "row", alignItems: "center", paddingHorizontal: 12, paddingVertical: 8, borderWidth: 1 },
  catTableRow: { flexDirection: "row", alignItems: "center", paddingHorizontal: 12, paddingVertical: 10, borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1 },
  catColWide: { flex: 2, fontSize: 11, fontWeight: "600" },
  catColWideRow: { flex: 2, flexDirection: "row", alignItems: "center", gap: 6 },
  catCol: { flex: 1, fontSize: 12, fontWeight: "700", textAlign: "center" },
  catDot: { width: 22, height: 22, borderRadius: 11, alignItems: "center", justifyContent: "center" },
  catName: { fontSize: 11, fontWeight: "600", flex: 1 },

  emptyState: { borderRadius: 16, borderWidth: 1, padding: 24, alignItems: "center", gap: 10 },
  emptyEmoji: { fontSize: 32 },
  emptyText: { fontSize: 14, textAlign: "center", lineHeight: 20 },

  badgesGrid: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  badgeCard: { width: 90, height: 90, borderRadius: 18, padding: 10, alignItems: "center", justifyContent: "space-between" },
  badgeLocked: { borderWidth: 1.5 },
  badgeCountRow: { flexDirection: "row", alignItems: "center", gap: 2 },
  badgeRozetEmoji: { fontSize: 12 },
  badgeCountNum: { color: "#fff", fontSize: 15, fontWeight: "800" },
  badgeLockEmoji: { fontSize: 14 },
  badgeCategoryName: { color: "#fff", fontSize: 9, fontWeight: "700", textAlign: "center" },

  medalCard: { borderRadius: 20, borderWidth: 1.5, padding: 18, flexDirection: "row", alignItems: "center", gap: 16, overflow: "hidden" },
  medalEmoji: { fontSize: 48 },
  medalInfo: { flex: 1, gap: 6 },
  medalTitle: { fontSize: 16, fontWeight: "800" },
  medalSub: { fontSize: 11 },
  progressWrap: { gap: 4 },
  progressTrack: { height: 8, borderRadius: 4, overflow: "hidden" },
  progressFill: { height: "100%", borderRadius: 4 },
  progressLabel: { fontSize: 11 },

  privacyBtn: { flexDirection: "row", alignItems: "center", gap: 12, padding: 14, borderRadius: 14, borderWidth: 1, marginTop: 4 },
  privacyBtnTitle: { fontSize: 14, fontWeight: "700" },
  privacyBtnSub: { fontSize: 11, marginTop: 2 },

  duelCard: { borderRadius: 20, borderWidth: 1.5, padding: 18, gap: 14, overflow: "hidden" },
  duelTopRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-around" },
  duelStat: { alignItems: "center", gap: 4 },
  duelStatNum: { fontSize: 28, fontWeight: "800" },
  duelStatLabel: { fontSize: 11, fontWeight: "600" },
  duelDivider: { width: 1, height: 40 },
  duelBarWrap: { gap: 6 },
  duelBarTrack: { height: 8, borderRadius: 4, overflow: "hidden" },
  duelBarFill: { height: "100%", borderRadius: 4 },
  duelBarLabel: { fontSize: 11 },
});
