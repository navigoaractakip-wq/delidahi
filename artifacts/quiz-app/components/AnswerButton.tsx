import * as Haptics from "expo-haptics";
import React, { useEffect, useRef } from "react";
import { Animated, Pressable, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useColors } from "@/hooks/useColors";

interface AnswerButtonProps {
  label: string;
  index: number;
  letter: string;
  isSelected: boolean;
  isCorrect: boolean;
  isRevealed: boolean;
  isEliminated?: boolean;
  onPress: () => void;
  disabled: boolean;
}

export function AnswerButton({
  label,
  index,
  letter,
  isSelected,
  isCorrect,
  isRevealed,
  isEliminated = false,
  onPress,
  disabled,
}: AnswerButtonProps) {
  const colors = useColors();
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (isRevealed && (isSelected || isCorrect)) {
      Animated.spring(scaleAnim, {
        toValue: 1.03,
        friction: 4,
        tension: 150,
        useNativeDriver: true,
      }).start();
    }
  }, [isRevealed, isSelected, isCorrect]);

  if (isEliminated) {
    return (
      <Animated.View style={[styles.wrapper, { transform: [{ scale: scaleAnim }], opacity: 0.28 }]}>
        <View
          style={[
            styles.button,
            {
              backgroundColor: colors.card,
              borderColor: colors.border,
              borderStyle: "dashed",
            },
          ]}
        >
          <Text style={[styles.letter, { color: colors.mutedForeground, borderColor: colors.border }]}>
            {letter}
          </Text>
          <Text
            style={[styles.label, { color: colors.mutedForeground, textDecorationLine: "line-through" }]}
            numberOfLines={2}
          >
            {label}
          </Text>
          <Feather name="x" size={16} color={colors.mutedForeground} />
        </View>
      </Animated.View>
    );
  }

  const getBackgroundColor = () => {
    if (!isRevealed) return colors.card;
    if (isCorrect) return colors.correct;
    if (isSelected && !isCorrect) return colors.wrong;
    return colors.card;
  };

  const getBorderColor = () => {
    if (!isRevealed) return colors.border;
    if (isCorrect) return colors.correct;
    if (isSelected && !isCorrect) return colors.wrong;
    return colors.border;
  };

  const getTextColor = () => {
    if (!isRevealed) return colors.foreground;
    if (isCorrect || (isSelected && !isCorrect)) return "#ffffff";
    return colors.mutedForeground;
  };

  const handlePress = () => {
    if (disabled) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 80,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 80,
        useNativeDriver: true,
      }),
    ]).start();
    onPress();
  };

  return (
    <Animated.View style={[styles.wrapper, { transform: [{ scale: scaleAnim }] }]}>
      <Pressable
        onPress={handlePress}
        disabled={disabled}
        style={[
          styles.button,
          {
            backgroundColor: getBackgroundColor(),
            borderColor: getBorderColor(),
          },
        ]}
      >
        <Text style={[styles.letter, { color: getTextColor(), borderColor: getBorderColor() }]}>
          {letter}
        </Text>
        <Text style={[styles.label, { color: getTextColor() }]} numberOfLines={2}>
          {label}
        </Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 14,
    borderWidth: 1.5,
    gap: 12,
    minHeight: 56,
  },
  letter: {
    width: 30,
    height: 30,
    textAlign: "center",
    lineHeight: 28,
    borderRadius: 8,
    borderWidth: 1.5,
    fontSize: 14,
    fontWeight: "700",
    flexShrink: 0,
  },
  label: {
    flex: 1,
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 20,
  },
});
