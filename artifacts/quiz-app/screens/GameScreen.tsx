import * as Haptics from "expo-haptics";
import React, { useEffect, useRef } from "react";
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
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useColors } from "@/hooks/useColors";
import { useGame, MAX_EXTRA_LIVES_PER_STAGE } from "@/context/GameContext";
import { AnswerButton } from "@/components/AnswerButton";
import { HourglassTimer } from "@/components/HourglassTimer";
import { MusicButton } from "@/components/MusicButton";

const LETTERS = ["A", "B", "C", "D"];
const { width } = Dimensions.get("window");

export function GameScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const {
    state,
    currentCategory,
    currentQuestion,
    selectAnswer,
    nextQuestion,
    requestExtraLife,
    requestExtraTime,
    returnToMenu,
    setShowDetailInfo,
    useHintEliminate,
    useHintSkip,
  } = useGame();

  const slideAnim = useRef(new Animated.Value(50)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  const topPadding = Platform.OS === "web" ? 80 : insets.top + 12;
  const bottomPadding = Platform.OS === "web" ? 50 : insets.bottom + 16;

  useEffect(() => {
    slideAnim.setValue(30);
    opacityAnim.setValue(0);
    Animated.parallel([
      Animated.timing(slideAnim, { toValue: 0, duration: 300, useNativeDriver: true }),
      Animated.timing(opacityAnim, { toValue: 1, duration: 300, useNativeDriver: true }),
    ]).start();
  }, [state.currentQuestionIndex]);

  if (!currentCategory || !currentQuestion) return null;

  const isTimeOut = state.timeLeft === 0 && state.selectedAnswer === null;
  const isWrong =
    state.selectedAnswer !== null &&
    state.selectedAnswer !== currentQuestion.correctIndex;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View
        style={[
          styles.header,
          {
            paddingTop: topPadding,
            backgroundColor: colors.card,
            borderBottomColor: colors.border,
          },
        ]}
      >
        <Pressable onPress={returnToMenu} style={styles.backBtn}>
          <Feather name="x" size={20} color={colors.foreground} />
        </Pressable>

        <View style={styles.headerCenter}>
          <View style={styles.headerTopRow}>
            <Text style={[styles.categoryName, { color: colors.primary }]}>
              {currentCategory.name}
            </Text>
            <View style={[styles.stageBadge, { backgroundColor: colors.primary + "22", borderColor: colors.primary + "55" }]}>
              <Text style={[styles.stageBadgeText, { color: colors.primary }]}>
                Aşama {state.currentStage}
              </Text>
            </View>
          </View>
          <Text style={[styles.questionCount, { color: colors.mutedForeground }]}>
            {state.currentQuestionIndex + 1} / {state.shuffledQuestionIds.length}
          </Text>
        </View>

        <MusicButton />
      </View>

      {/* Progress Bar */}
      <View style={[styles.progressBg, { backgroundColor: colors.border }]}>
        <Animated.View
          style={[
            styles.progressFill,
            {
              backgroundColor: currentCategory.gradient[0],
              width: `${((state.currentQuestionIndex + 1) / state.shuffledQuestionIds.length) * 100}%`,
            },
          ]}
        />
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[styles.scrollContent, { paddingBottom: bottomPadding }]}
        showsVerticalScrollIndicator={false}
      >
        {/* Score + Lives + Timer */}
        <View style={styles.statsBar}>
          <View style={[styles.statChip, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <Feather name="star" size={14} color={colors.gold} />
            <Text style={[styles.statText, { color: colors.foreground }]}>{state.score}</Text>
          </View>

          <HourglassTimer timeLeft={state.timeLeft} totalTime={40} />

          <View style={[styles.statChip, { backgroundColor: colors.card, borderColor: colors.border }]}>
            {Array.from({ length: 3 }).map((_, i) => (
              <Feather
                key={i}
                name="heart"
                size={14}
                color={i < state.lives ? colors.wrong : colors.border}
              />
            ))}
          </View>
        </View>

        {/* Question Card */}
        <Animated.View
          style={[
            styles.questionCard,
            {
              backgroundColor: colors.card,
              borderColor: colors.border,
              transform: [{ translateY: slideAnim }],
              opacity: opacityAnim,
            },
          ]}
        >
          <Text style={[styles.questionText, { color: colors.foreground }]}>
            {currentQuestion.question}
          </Text>
        </Animated.View>

        {/* Hint Bar */}
        {!state.isAnswerRevealed && (
          <View style={styles.hintBar}>
            <View style={styles.hintDots}>
              {[0, 1].map((i) => (
                <Feather
                  key={i}
                  name="zap"
                  size={14}
                  color={i < state.hintsLeft ? "#f9c74f" : colors.border}
                />
              ))}
              <Text style={[styles.hintCount, { color: colors.mutedForeground }]}>
                {state.hintsLeft} ipucu
              </Text>
            </View>
            <View style={styles.hintButtons}>
              <Pressable
                onPress={useHintEliminate}
                disabled={state.hintsLeft <= 0}
                style={[
                  styles.hintBtn,
                  {
                    backgroundColor: state.hintsLeft > 0 ? "#f9c74f22" : colors.card,
                    borderColor: state.hintsLeft > 0 ? "#f9c74f" : colors.border,
                    opacity: state.hintsLeft > 0 ? 1 : 0.4,
                  },
                ]}
              >
                <Feather name="scissors" size={13} color={state.hintsLeft > 0 ? "#f9c74f" : colors.mutedForeground} />
                <Text style={[styles.hintBtnText, { color: state.hintsLeft > 0 ? "#f9c74f" : colors.mutedForeground }]}>
                  Şık Ele
                </Text>
              </Pressable>
              <Pressable
                onPress={useHintSkip}
                disabled={state.hintsLeft <= 0}
                style={[
                  styles.hintBtn,
                  {
                    backgroundColor: state.hintsLeft > 0 ? "#a8dadc22" : colors.card,
                    borderColor: state.hintsLeft > 0 ? "#a8dadc" : colors.border,
                    opacity: state.hintsLeft > 0 ? 1 : 0.4,
                  },
                ]}
              >
                <Feather name="skip-forward" size={13} color={state.hintsLeft > 0 ? "#a8dadc" : colors.mutedForeground} />
                <Text style={[styles.hintBtnText, { color: state.hintsLeft > 0 ? "#a8dadc" : colors.mutedForeground }]}>
                  Atla
                </Text>
              </Pressable>
            </View>
          </View>
        )}

        {/* Answer Options */}
        <Animated.View
          style={[
            styles.answersContainer,
            { opacity: opacityAnim, transform: [{ translateY: slideAnim }] },
          ]}
        >
          {currentQuestion.options.map((option, index) => (
            <AnswerButton
              key={index}
              label={option}
              index={index}
              letter={LETTERS[index]}
              isSelected={state.selectedAnswer === index}
              isCorrect={index === currentQuestion.correctIndex}
              isRevealed={state.isAnswerRevealed && !isTimeOut}
              isEliminated={state.eliminatedOptions.includes(index)}
              onPress={() => selectAnswer(index)}
              disabled={state.isAnswerRevealed || state.eliminatedOptions.includes(index)}
            />
          ))}
        </Animated.View>

        {/* Detail Info */}
        {state.isAnswerRevealed && state.showDetailInfo && (
          <View
            style={[
              styles.detailCard,
              { backgroundColor: colors.secondary, borderColor: colors.primary + "44" },
            ]}
          >
            <View style={styles.detailHeader}>
              <Feather name="info" size={16} color={colors.primary} />
              <Text style={[styles.detailTitle, { color: colors.primary }]}>Detaylı Bilgi</Text>
            </View>
            <Text style={[styles.detailText, { color: colors.foreground }]}>
              {currentQuestion.explanation}
            </Text>
          </View>
        )}

        {/* Action Buttons */}
        {state.isAnswerRevealed && (
          <View style={styles.actionRow}>
            {/* Show detail info button on wrong/timeout */}
            {(isWrong || isTimeOut) && !state.showDetailInfo && (
              <Pressable
                onPress={() => setShowDetailInfo(true)}
                style={[styles.actionBtn, { backgroundColor: colors.primary + "22", borderColor: colors.primary }]}
              >
                <Feather name="info" size={16} color={colors.primary} />
                <Text style={[styles.actionBtnText, { color: colors.primary }]}>Bilgi Ver</Text>
              </Pressable>
            )}

            {/* Extra time if time ran out */}
            {isTimeOut && (
              <Pressable
                onPress={requestExtraTime}
                style={[styles.actionBtn, { backgroundColor: colors.timer + "22", borderColor: colors.timer }]}
              >
                <Feather name="tv" size={14} color={colors.timer} />
                <Text style={[styles.actionBtnText, { color: colors.timer }]}>
                  +20s (Reklam)
                </Text>
              </Pressable>
            )}

            {/* When last life is lost: show extra-life only if hak kaldıysa, yoksa Devam Et = Game Over */}
            {isWrong && state.lives === 0 ? (
              state.extraLivesUsed < MAX_EXTRA_LIVES_PER_STAGE ? (
                <Pressable
                  onPress={requestExtraLife}
                  style={[styles.nextBtn, { backgroundColor: colors.wrong }]}
                >
                  <Feather name="tv" size={18} color="#fff" />
                  <Text style={styles.nextBtnText}>
                    +1 Can (Reklam İzle) · {MAX_EXTRA_LIVES_PER_STAGE - state.extraLivesUsed} hak kaldı
                  </Text>
                </Pressable>
              ) : (
                <Pressable
                  onPress={nextQuestion}
                  style={[styles.nextBtn, { backgroundColor: colors.wrong }]}
                >
                  <Feather name="x-circle" size={18} color="#fff" />
                  <Text style={styles.nextBtnText}>Can hakkı doldu — Oyun Bitti</Text>
                </Pressable>
              )
            ) : (
              <Pressable
                onPress={nextQuestion}
                style={[styles.nextBtn, { backgroundColor: currentCategory.gradient[0] }]}
              >
                <Text style={styles.nextBtnText}>Devam Et</Text>
                <Feather name="arrow-right" size={18} color="#fff" />
              </Pressable>
            )}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 14,
    borderBottomWidth: 1,
    gap: 12,
  },
  backBtn: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  headerCenter: {
    flex: 1,
    alignItems: "center",
    gap: 2,
  },
  headerTopRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  categoryName: {
    fontSize: 15,
    fontWeight: "700",
  },
  stageBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    borderWidth: 1,
  },
  stageBadgeText: {
    fontSize: 11,
    fontWeight: "700",
  },
  questionCount: {
    fontSize: 12,
  },
  progressBg: {
    height: 3,
    width: "100%",
  },
  progressFill: {
    height: "100%",
    borderRadius: 2,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    gap: 16,
  },
  statsBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  statChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
  },
  statText: {
    fontSize: 14,
    fontWeight: "700",
  },
  questionCard: {
    padding: 20,
    borderRadius: 20,
    borderWidth: 1.5,
    minHeight: 100,
    justifyContent: "center",
  },
  questionText: {
    fontSize: 17,
    fontWeight: "600",
    lineHeight: 26,
    textAlign: "center",
  },
  hintBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: -4,
  },
  hintDots: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  hintCount: {
    fontSize: 12,
    fontWeight: "600",
    marginLeft: 2,
  },
  hintButtons: {
    flexDirection: "row",
    gap: 8,
  },
  hintBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    borderWidth: 1.5,
  },
  hintBtnText: {
    fontSize: 12,
    fontWeight: "700",
  },
  answersContainer: {
    gap: 10,
  },
  detailCard: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 1.5,
    gap: 8,
  },
  detailHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  detailTitle: {
    fontSize: 14,
    fontWeight: "700",
  },
  detailText: {
    fontSize: 14,
    lineHeight: 22,
  },
  actionRow: {
    gap: 10,
  },
  actionBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 14,
    borderWidth: 1.5,
    gap: 8,
  },
  actionBtnText: {
    fontSize: 14,
    fontWeight: "700",
  },
  nextBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 16,
    gap: 8,
  },
  nextBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
