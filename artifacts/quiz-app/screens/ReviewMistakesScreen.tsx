import React from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useColors } from "@/hooks/useColors";
import { useGame } from "@/context/GameContext";

export function ReviewMistakesScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const { state, currentCategory, dismissReview } = useGame();

  const topPadding = Platform.OS === "web" ? 60 : insets.top + 16;
  const bottomPadding = Platform.OS === "web" ? 40 : insets.bottom + 16;

  if (!currentCategory) return null;

  const wrongQuestions = state.wrongQuestionIds
    .map((id) => currentCategory.questions.find((q) => q.id === id))
    .filter(Boolean) as NonNullable<ReturnType<typeof currentCategory.questions.find>>[];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <LinearGradient
        colors={[currentCategory.gradient[0] + "22", colors.background]}
        style={StyleSheet.absoluteFill}
        pointerEvents="none"
      />

      <View style={[styles.header, { paddingTop: topPadding, borderBottomColor: colors.border }]}>
        <View style={styles.headerLeft}>
          <Feather name="alert-circle" size={22} color={colors.wrong} />
          <Text style={[styles.headerTitle, { color: colors.foreground }]}>Yanlış Cevaplar</Text>
        </View>
        <View style={[styles.badge, { backgroundColor: colors.wrong + "22" }]}>
          <Text style={[styles.badgeText, { color: colors.wrong }]}>{wrongQuestions.length}</Text>
        </View>
        <Pressable onPress={dismissReview} style={[styles.closeBtn, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <Feather name="x" size={20} color={colors.foreground} />
        </Pressable>
      </View>

      {wrongQuestions.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyEmoji}>🎉</Text>
          <Text style={[styles.emptyTitle, { color: colors.foreground }]}>Hiç yanlışınız yok!</Text>
          <Text style={[styles.emptySubtitle, { color: colors.mutedForeground }]}>Bu turda tüm soruları doğru yanıtladınız.</Text>
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={[styles.list, { paddingBottom: bottomPadding }]}
          showsVerticalScrollIndicator={false}
        >
          {wrongQuestions.map((question, index) => (
            <View
              key={question.id}
              style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}
            >
              <View style={styles.cardHeader}>
                <View style={[styles.indexBadge, { backgroundColor: colors.wrong + "22" }]}>
                  <Text style={[styles.indexText, { color: colors.wrong }]}>{index + 1}</Text>
                </View>
                <Text style={[styles.questionText, { color: colors.foreground }]}>{question.question}</Text>
              </View>

              <View style={styles.optionsList}>
                {question.options.map((option, optIndex) => {
                  const isCorrect = optIndex === question.correctIndex;
                  return (
                    <View
                      key={optIndex}
                      style={[
                        styles.optionRow,
                        isCorrect && { backgroundColor: colors.correct + "18", borderColor: colors.correct, borderRadius: 10, borderWidth: 1.5 },
                      ]}
                    >
                      <View
                        style={[
                          styles.optionIndicator,
                          { backgroundColor: isCorrect ? colors.correct : colors.border + "66" },
                        ]}
                      >
                        {isCorrect ? (
                          <Feather name="check" size={12} color="#fff" />
                        ) : (
                          <Text style={[styles.optionLetter, { color: colors.mutedForeground }]}>
                            {String.fromCharCode(65 + optIndex)}
                          </Text>
                        )}
                      </View>
                      <Text
                        style={[
                          styles.optionText,
                          { color: isCorrect ? colors.correct : colors.mutedForeground },
                          isCorrect && { fontWeight: "700" },
                        ]}
                      >
                        {option}
                      </Text>
                    </View>
                  );
                })}
              </View>

              {question.explanation ? (
                <View style={[styles.explanationBox, { backgroundColor: currentCategory.gradient[0] + "14", borderColor: currentCategory.gradient[0] + "44" }]}>
                  <Feather name="info" size={14} color={currentCategory.gradient[0]} style={{ marginTop: 1 }} />
                  <Text style={[styles.explanationText, { color: colors.foreground }]}>{question.explanation}</Text>
                </View>
              ) : null}
            </View>
          ))}
        </ScrollView>
      )}

      <View style={[styles.footer, { paddingBottom: bottomPadding, borderTopColor: colors.border }]}>
        <Pressable
          onPress={dismissReview}
          style={[styles.doneBtn, { backgroundColor: currentCategory.gradient[0] }]}
        >
          <Feather name="arrow-left" size={18} color="#fff" />
          <Text style={styles.doneBtnText}>Geri Dön</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 14,
    borderBottomWidth: 1,
    gap: 10,
  },
  headerLeft: { flex: 1, flexDirection: "row", alignItems: "center", gap: 8 },
  headerTitle: { fontSize: 18, fontWeight: "800" },
  badge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  badgeText: { fontSize: 14, fontWeight: "800" },
  closeBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
  },
  emptyState: { flex: 1, alignItems: "center", justifyContent: "center", gap: 12, paddingHorizontal: 40 },
  emptyEmoji: { fontSize: 52 },
  emptyTitle: { fontSize: 22, fontWeight: "800", textAlign: "center" },
  emptySubtitle: { fontSize: 14, textAlign: "center", lineHeight: 20 },
  list: { padding: 16, gap: 16 },
  card: {
    borderRadius: 16,
    borderWidth: 1.5,
    padding: 16,
    gap: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  cardHeader: { flexDirection: "row", alignItems: "flex-start", gap: 10 },
  indexBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    marginTop: 1,
  },
  indexText: { fontSize: 13, fontWeight: "800" },
  questionText: { flex: 1, fontSize: 15, fontWeight: "600", lineHeight: 22 },
  optionsList: { gap: 6 },
  optionRow: { flexDirection: "row", alignItems: "center", gap: 10, padding: 8 },
  optionIndicator: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  optionLetter: { fontSize: 11, fontWeight: "700" },
  optionText: { flex: 1, fontSize: 14, lineHeight: 20 },
  explanationBox: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
  },
  explanationText: { flex: 1, fontSize: 13, lineHeight: 19, opacity: 0.9 },
  footer: {
    paddingHorizontal: 20,
    paddingTop: 12,
    borderTopWidth: 1,
  },
  doneBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: 16,
    borderRadius: 16,
  },
  doneBtnText: { color: "#fff", fontSize: 16, fontWeight: "700" },
});
