import * as Haptics from "expo-haptics";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useColors } from "@/hooks/useColors";
import { useGame } from "@/context/GameContext";

export function StageTransitionScreen() {
  const colors = useColors();
  const { state, currentCategory, startNextStage } = useGame();

  const nextStage = state.currentStage + 1;

  // Animations
  const bgScale   = useRef(new Animated.Value(1.4)).current;
  const overlayOp = useRef(new Animated.Value(0)).current;
  const numberScale= useRef(new Animated.Value(0)).current;
  const numberOp  = useRef(new Animated.Value(0)).current;
  const labelSlide= useRef(new Animated.Value(40)).current;
  const labelOp   = useRef(new Animated.Value(0)).current;
  const exitOp    = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Haptic
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

    Animated.sequence([
      // 1) Fade in overlay + shrink bg
      Animated.parallel([
        Animated.timing(overlayOp,  { toValue: 1,    duration: 350, useNativeDriver: true }),
        Animated.timing(bgScale,    { toValue: 1,    duration: 700, easing: Easing.out(Easing.cubic), useNativeDriver: true }),
      ]),
      // 2) Pop in stage number
      Animated.parallel([
        Animated.spring(numberScale,{ toValue: 1,    friction: 4, tension: 120, useNativeDriver: true }),
        Animated.timing(numberOp,   { toValue: 1,    duration: 300, useNativeDriver: true }),
      ]),
      // 3) Slide in label
      Animated.parallel([
        Animated.timing(labelSlide, { toValue: 0,    duration: 350, easing: Easing.out(Easing.cubic), useNativeDriver: true }),
        Animated.timing(labelOp,    { toValue: 1,    duration: 350, useNativeDriver: true }),
      ]),
      // 4) Hold
      Animated.delay(1300),
      // 5) Fade out everything
      Animated.timing(exitOp, { toValue: 0, duration: 400, useNativeDriver: true }),
    ]).start(() => {
      startNextStage();
    });
  }, []);

  const gradient = currentCategory?.gradient as [string, string] | undefined ?? ["#6c63ff", "#4a42cc"];

  return (
    <View style={styles.container}>
      {/* Animated background gradient */}
      <Animated.View style={[StyleSheet.absoluteFill, { transform: [{ scale: bgScale }] }]}>
        <LinearGradient
          colors={[gradient[0], gradient[1], "#0f0f1e"]}
          style={StyleSheet.absoluteFill}
          start={{ x: 0.1, y: 0 }}
          end={{ x: 0.9, y: 1 }}
        />
      </Animated.View>

      <Animated.View style={[StyleSheet.absoluteFill, styles.overlay, { opacity: overlayOp }]}>
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.55)"]}
          style={StyleSheet.absoluteFill}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />
      </Animated.View>

      {/* Content */}
      <Animated.View style={[styles.content, { opacity: exitOp }]}>
        {/* Completed stage label */}
        <Animated.Text
          style={[
            styles.completedLabel,
            {
              color: "rgba(255,255,255,0.65)",
              opacity: labelOp,
              transform: [{ translateY: labelSlide }],
            },
          ]}
        >
          {state.currentStage}. Aşama Tamamlandı
        </Animated.Text>

        {/* Ring */}
        <View style={[styles.ring, { borderColor: gradient[0] + "55" }]}>
          <View style={[styles.innerRing, { borderColor: gradient[0] + "99" }]}>
            {/* Stage number */}
            <Animated.View
              style={{
                transform: [{ scale: numberScale }],
                opacity: numberOp,
                alignItems: "center",
              }}
            >
              <Text style={styles.stageWordSmall}>AŞAMA</Text>
              <Text style={[styles.stageNumber, { color: "#fff" }]}>{nextStage}</Text>
            </Animated.View>
          </View>
        </View>

        {/* "başlıyor" label */}
        <Animated.Text
          style={[
            styles.startingLabel,
            {
              color: "rgba(255,255,255,0.8)",
              opacity: labelOp,
              transform: [{ translateY: Animated.multiply(labelSlide, new Animated.Value(-1)) }],
            },
          ]}
        >
          Hazır mısın?
        </Animated.Text>

        {/* Category name */}
        <Animated.Text
          style={[
            styles.categoryLabel,
            {
              color: gradient[0],
              opacity: labelOp,
            },
          ]}
        >
          {currentCategory?.name}
        </Animated.Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0f0f1e",
  },
  overlay: {
    flex: 1,
  },
  content: {
    alignItems: "center",
    gap: 20,
    paddingHorizontal: 32,
  },
  ring: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  innerRing: {
    width: 168,
    height: 168,
    borderRadius: 84,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.04)",
  },
  stageWordSmall: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 6,
    textAlign: "center",
  },
  stageNumber: {
    fontSize: 88,
    fontWeight: "900",
    lineHeight: 96,
    textAlign: "center",
    ...Platform.select({
      ios: { fontVariant: ["tabular-nums"] },
      android: {},
      web: {},
    }),
  },
  completedLabel: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  startingLabel: {
    fontSize: 22,
    fontWeight: "800",
    textAlign: "center",
    letterSpacing: 1,
  },
  categoryLabel: {
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 2,
    textAlign: "center",
    textTransform: "uppercase",
  },
});
