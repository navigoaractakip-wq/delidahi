import * as Haptics from "expo-haptics";
import React, { useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useColors } from "@/hooks/useColors";
import { useGame } from "@/context/GameContext";
import { MUSIC_CATEGORIES, MusicCategory } from "@/data/musicTracks";

const CATEGORY_GRADIENTS: Record<string, [string, string]> = {
  klasik:      ["#b8860b", "#d4a017"],
  blues:       ["#1a237e", "#283593"],
  enstrumantal: ["#4a148c", "#6a1b9a"],
};

export function MusicButton() {
  const colors = useColors();
  const { state, toggleMusic, setMusicCategory } = useGame();
  const [showPicker, setShowPicker] = useState(false);

  const handleShortPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    toggleMusic();
  };

  const handleLongPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setShowPicker(true);
  };

  const handleSelectCategory = (cat: MusicCategory) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setMusicCategory(cat.id);
    setShowPicker(false);
    if (!state.isMusicOn) toggleMusic();
  };

  return (
    <>
      <Pressable
        onPress={handleShortPress}
        onLongPress={handleLongPress}
        delayLongPress={400}
        style={[
          styles.btn,
          { backgroundColor: colors.card, borderColor: colors.border },
        ]}
      >
        <Feather
          name={state.isMusicOn ? "music" : "volume-x"}
          size={17}
          color={state.isMusicOn ? colors.primary : colors.mutedForeground}
        />
        {state.isMusicOn && (
          <View style={[styles.activeDot, { backgroundColor: colors.primary }]} />
        )}
      </Pressable>

      <Modal
        visible={showPicker}
        transparent
        animationType="slide"
        onRequestClose={() => setShowPicker(false)}
      >
        <Pressable style={styles.backdrop} onPress={() => setShowPicker(false)}>
          <Pressable
            style={[styles.sheet, { backgroundColor: colors.card, borderColor: colors.border }]}
            onPress={() => {}}
          >
            <View style={[styles.handle, { backgroundColor: colors.border }]} />

            <View style={styles.sheetHeader}>
              <Feather name="music" size={18} color={colors.primary} />
              <Text style={[styles.sheetTitle, { color: colors.foreground }]}>
                Müzik Kategorisi
              </Text>
              <Pressable onPress={() => setShowPicker(false)}>
                <Feather name="x" size={20} color={colors.mutedForeground} />
              </Pressable>
            </View>

            <Text style={[styles.sheetSub, { color: colors.mutedForeground }]}>
              Uzun bas → kategori değiştir · Kısa bas → aç / kapat
            </Text>

            <View style={styles.categoryList}>
              {MUSIC_CATEGORIES.map((cat) => {
                const isSelected = state.selectedMusicCategory === cat.id;
                const grad = CATEGORY_GRADIENTS[cat.id] ?? ["#444", "#222"];
                return (
                  <Pressable
                    key={cat.id}
                    onPress={() => handleSelectCategory(cat)}
                    style={[
                      styles.catCard,
                      {
                        borderColor: isSelected ? grad[0] : colors.border,
                      },
                    ]}
                  >
                    <LinearGradient
                      colors={isSelected ? [grad[0] + "44", grad[1] + "22"] : [colors.background, colors.background]}
                      style={StyleSheet.absoluteFill}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                    />

                    <View style={[styles.catEmojiBg, { backgroundColor: isSelected ? grad[0] + "33" : colors.card }]}>
                      <Text style={styles.catEmoji}>{cat.emoji}</Text>
                    </View>

                    <View style={styles.catInfo}>
                      <Text
                        style={[
                          styles.catName,
                          { color: isSelected ? grad[0] : colors.foreground },
                        ]}
                      >
                        {cat.name}
                      </Text>
                      <Text style={[styles.catDesc, { color: colors.mutedForeground }]}>
                        {cat.description}
                      </Text>
                      <Text style={[styles.catCount, { color: colors.mutedForeground }]}>
                        {cat.tracks.length} parça · sırayla çalar
                      </Text>
                    </View>

                    {isSelected && (
                      <View style={[styles.checkBadge, { backgroundColor: grad[0] }]}>
                        <Feather name="check" size={13} color="#fff" />
                      </View>
                    )}
                  </Pressable>
                );
              })}
            </View>

            {/* Toggle row */}
            <View style={[styles.toggleRow, { borderTopColor: colors.border }]}>
              <Feather
                name={state.isMusicOn ? "volume-2" : "volume-x"}
                size={16}
                color={state.isMusicOn ? colors.primary : colors.mutedForeground}
              />
              <Text style={[styles.toggleLabel, { color: colors.mutedForeground }]}>
                {state.isMusicOn ? "Müzik açık" : "Müzik kapalı"}
              </Text>
              <Pressable
                onPress={() => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                  toggleMusic();
                }}
                style={[
                  styles.toggleBtn,
                  { backgroundColor: state.isMusicOn ? colors.primary : colors.border },
                ]}
              >
                <Text style={styles.toggleBtnText}>
                  {state.isMusicOn ? "Kapat" : "Aç"}
                </Text>
              </Pressable>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 38,
    height: 38,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  activeDot: {
    position: "absolute",
    bottom: 7,
    right: 7,
    width: 5,
    height: 5,
    borderRadius: 3,
  },
  backdrop: {
    flex: 1,
    backgroundColor: "#00000077",
    justifyContent: "flex-end",
  },
  sheet: {
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    borderWidth: 1,
    borderBottomWidth: 0,
    paddingTop: 12,
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  handle: {
    alignSelf: "center",
    width: 40,
    height: 4,
    borderRadius: 2,
    marginBottom: 18,
  },
  sheetHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 6,
  },
  sheetTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "700",
  },
  sheetSub: {
    fontSize: 12,
    marginBottom: 18,
  },
  categoryList: {
    gap: 12,
  },
  catCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 18,
    borderWidth: 1.5,
    gap: 14,
    overflow: "hidden",
  },
  catEmojiBg: {
    width: 52,
    height: 52,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  catEmoji: {
    fontSize: 26,
  },
  catInfo: {
    flex: 1,
    gap: 2,
  },
  catName: {
    fontSize: 16,
    fontWeight: "700",
  },
  catDesc: {
    fontSize: 12,
  },
  catCount: {
    fontSize: 11,
    marginTop: 2,
  },
  checkBadge: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  toggleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 18,
    paddingTop: 14,
    borderTopWidth: 1,
  },
  toggleLabel: {
    flex: 1,
    fontSize: 14,
  },
  toggleBtn: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 10,
  },
  toggleBtnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 13,
  },
});
