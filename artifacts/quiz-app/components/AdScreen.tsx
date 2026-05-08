import * as Haptics from "expo-haptics";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useColors } from "@/hooks/useColors";
import { useInterstitialAd } from "@/hooks/useInterstitialAd";
import { useRewardedAd } from "@/hooks/useRewardedAd";

interface AdScreenProps {
  purpose: "extra_life" | "extra_time" | "stage_end" | null;
  onWatched: () => void;
}

const { width } = Dimensions.get("window");

export function AdScreen({ purpose, onWatched }: AdScreenProps) {
  const isRewarded = purpose === "extra_life" || purpose === "extra_time";

  if (isRewarded) {
    return <RewardedAdHost purpose={purpose} onWatched={onWatched} />;
  }
  return <InterstitialAdHost purpose={purpose} onWatched={onWatched} />;
}

function RewardedAdHost({ purpose, onWatched }: AdScreenProps) {
  const onWatchedRef = useRef(onWatched);
  onWatchedRef.current = onWatched;
  const { status } = useRewardedAd(() => onWatchedRef.current());

  if (status === "loading") return <LoadingOverlay />;
  if (status === "showing" || status === "done") return null;
  return <SimulatedAdScreen purpose={purpose} onWatched={onWatched} />;
}

function InterstitialAdHost({ purpose, onWatched }: AdScreenProps) {
  const onWatchedRef = useRef(onWatched);
  onWatchedRef.current = onWatched;
  const { status } = useInterstitialAd(() => onWatchedRef.current());

  if (status === "loading") return <LoadingOverlay />;
  if (status === "showing" || status === "done") return null;
  return <SimulatedAdScreen purpose={purpose} onWatched={onWatched} />;
}

function LoadingOverlay() {
  const colors = useColors();
  return (
    <View style={[styles.overlay, { backgroundColor: "rgba(0,0,0,0.85)" }]}>
      <View style={[styles.loadingBox, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={[styles.loadingText, { color: colors.foreground }]}>Reklam yükleniyor...</Text>
      </View>
    </View>
  );
}

interface SimulatedAdScreenProps {
  purpose: "extra_life" | "extra_time" | "stage_end" | null;
  onWatched: () => void;
}

function SimulatedAdScreen({ purpose, onWatched }: SimulatedAdScreenProps) {
  const colors = useColors();
  const [countdown, setCountdown] = useState(5);
  const [canClose, setCanClose] = useState(false);
  const completedRef = useRef(false);
  const progressAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(progressAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: false,
    }).start();

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setCanClose(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleComplete = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    } catch {}
    onWatched();
  }, [onWatched]);

  const getTitle = () => {
    if (purpose === "extra_life") return "Ekstra Can için Reklam İzle";
    if (purpose === "extra_time") return "Ekstra Süre için Reklam İzle";
    return "Bölüm Sonu Reklamı";
  };

  const getReward = () => {
    if (purpose === "extra_life") return "+1 Can Kazanıyorsun!";
    if (purpose === "extra_time") return "+20 Saniye Kazanıyorsun!";
    return "Devam etmek için reklamı izle";
  };

  return (
    <Animated.View
      style={[styles.overlay, { backgroundColor: "rgba(0,0,0,0.95)", opacity: fadeAnim }]}
    >
      <View style={[styles.container, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <View style={[styles.adBadge, { backgroundColor: colors.primary }]}>
          <Feather name="tv" size={14} color="#fff" />
          <Text style={styles.adBadgeText}>REKLAM</Text>
        </View>

        <View style={[styles.adContent, { backgroundColor: colors.secondary }]}>
          <Text style={[styles.adTitle, { color: colors.foreground }]}>{getTitle()}</Text>

          <View style={styles.mockAd}>
            <Feather name="monitor" size={48} color={colors.primary} />
            <Text style={[styles.mockAdText, { color: colors.foreground }]}>
              Sponsor Reklamı
            </Text>
            <Text style={[styles.mockAdSub, { color: colors.mutedForeground }]}>
              Harika ürünler sizi bekliyor!
            </Text>
          </View>

          <View style={[styles.rewardBanner, { backgroundColor: colors.primary + "22", borderColor: colors.primary }]}>
            <Feather
              name={purpose === "extra_life" ? "heart" : purpose === "extra_time" ? "clock" : "star"}
              size={20}
              color={colors.primary}
            />
            <Text style={[styles.rewardText, { color: colors.primary }]}>{getReward()}</Text>
          </View>
        </View>

        <View style={styles.progressSection}>
          <View style={[styles.progressBar, { backgroundColor: colors.border }]}>
            <Animated.View
              style={[
                styles.progressFill,
                {
                  backgroundColor: colors.primary,
                  width: progressAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0%", "100%"],
                  }),
                },
              ]}
            />
          </View>

          {canClose ? (
            <Pressable
              onPress={handleComplete}
              style={[styles.closeBtn, { backgroundColor: colors.primary }]}
            >
              <Feather name="check" size={18} color="#fff" />
              <Text style={styles.closeBtnText}>
                {purpose === "stage_end" ? "Devam Et" : "Ödülü Al"}
              </Text>
            </Pressable>
          ) : (
            <View style={[styles.countdownBadge, { backgroundColor: colors.muted }]}>
              <Text style={[styles.countdownText, { color: colors.foreground }]}>
                {countdown}s
              </Text>
            </View>
          )}
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  loadingBox: {
    paddingHorizontal: 32,
    paddingVertical: 28,
    borderRadius: 16,
    borderWidth: 1.5,
    alignItems: "center",
    gap: 14,
  },
  loadingText: {
    fontSize: 14,
    fontWeight: "600",
  },
  container: {
    width: width * 0.88,
    borderRadius: 24,
    borderWidth: 1.5,
    overflow: "hidden",
  },
  adBadge: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    gap: 6,
  },
  adBadgeText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 2,
  },
  adContent: {
    padding: 20,
    gap: 16,
  },
  adTitle: {
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  mockAd: {
    alignItems: "center",
    paddingVertical: 24,
    gap: 8,
  },
  mockAdText: {
    fontSize: 18,
    fontWeight: "700",
  },
  mockAdSub: {
    fontSize: 13,
  },
  rewardBanner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 12,
    borderWidth: 1.5,
    gap: 8,
  },
  rewardText: {
    fontSize: 15,
    fontWeight: "700",
  },
  progressSection: {
    padding: 16,
    gap: 12,
    alignItems: "center",
  },
  progressBar: {
    width: "100%",
    height: 6,
    borderRadius: 3,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: 3,
  },
  closeBtn: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 14,
    gap: 8,
  },
  closeBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  countdownBadge: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  countdownText: {
    fontSize: 16,
    fontWeight: "700",
  },
});
