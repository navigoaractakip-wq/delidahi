import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View, Text } from "react-native";
import Svg, { Polygon, Ellipse, Line, Path } from "react-native-svg";
import { useColors } from "@/hooks/useColors";

interface HourglassTimerProps {
  timeLeft: number;
  totalTime?: number;
}

const AnimatedPath = Animated.createAnimatedComponent(Path);

export function HourglassTimer({ timeLeft, totalTime = 40 }: HourglassTimerProps) {
  const colors = useColors();
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const shakeAnim = useRef(new Animated.Value(0)).current;

  const progress = timeLeft / totalTime;
  const isLow = timeLeft <= 10;
  const isCritical = timeLeft <= 5;

  useEffect(() => {
    if (isCritical) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(shakeAnim, { toValue: 3, duration: 80, useNativeDriver: true }),
          Animated.timing(shakeAnim, { toValue: -3, duration: 80, useNativeDriver: true }),
          Animated.timing(shakeAnim, { toValue: 2, duration: 80, useNativeDriver: true }),
          Animated.timing(shakeAnim, { toValue: -2, duration: 80, useNativeDriver: true }),
          Animated.timing(shakeAnim, { toValue: 0, duration: 80, useNativeDriver: true }),
          Animated.delay(400),
        ])
      ).start();
    } else {
      shakeAnim.setValue(0);
    }

    if (isLow) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, { toValue: 1.15, duration: 400, useNativeDriver: true }),
          Animated.timing(pulseAnim, { toValue: 1, duration: 400, useNativeDriver: true }),
        ])
      ).start();
    } else {
      pulseAnim.setValue(1);
    }
  }, [isCritical, isLow]);

  const timerColor = isCritical
    ? colors.wrong
    : isLow
    ? colors.timer
    : colors.primary;

  const sandLevel = progress;
  const upperSandHeight = 32 * sandLevel;
  const lowerSandHeight = 32 * (1 - sandLevel);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            { scale: pulseAnim },
            { translateX: shakeAnim },
          ],
        },
      ]}
    >
      <Svg width={70} height={100} viewBox="0 0 70 100">
        {/* Hourglass frame top */}
        <Polygon
          points="5,5 65,5 35,52"
          fill="none"
          stroke={timerColor}
          strokeWidth={2.5}
          strokeLinejoin="round"
        />
        {/* Hourglass frame bottom */}
        <Polygon
          points="5,95 65,95 35,48"
          fill="none"
          stroke={timerColor}
          strokeWidth={2.5}
          strokeLinejoin="round"
        />
        {/* Top rim */}
        <Ellipse cx={35} cy={5} rx={30} ry={4} fill={timerColor} opacity={0.8} />
        {/* Bottom rim */}
        <Ellipse cx={35} cy={95} rx={30} ry={4} fill={timerColor} opacity={0.8} />
        {/* Upper sand */}
        {upperSandHeight > 0 && (
          <Path
            d={`M ${10 + (1 - sandLevel) * 22},${10} L ${60 - (1 - sandLevel) * 22},${10} L 35,${10 + upperSandHeight} Z`}
            fill={timerColor}
            opacity={0.7}
          />
        )}
        {/* Lower sand */}
        {lowerSandHeight > 0 && (
          <Path
            d={`M 35,${90 - lowerSandHeight} L ${10 + sandLevel * 22},${90} L ${60 - sandLevel * 22},${90} Z`}
            fill={timerColor}
            opacity={0.9}
          />
        )}
        {/* Sand stream (center dot) */}
        <Ellipse cx={35} cy={50} rx={1.5} ry={1.5} fill={timerColor} opacity={0.9} />
      </Svg>
      <Text style={[styles.timeText, { color: timerColor }]}>{timeLeft}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  timeText: {
    fontSize: 22,
    fontWeight: "800",
    marginTop: 4,
    letterSpacing: 1,
  },
});
