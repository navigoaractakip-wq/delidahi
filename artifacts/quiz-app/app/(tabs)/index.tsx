import React, { useEffect, useRef } from "react";
import { View, StyleSheet } from "react-native";
import { useGame } from "@/context/GameContext";
import { useGameSounds } from "@/hooks/useGameSounds";
import { MenuScreen } from "@/screens/MenuScreen";
import { GameScreen } from "@/screens/GameScreen";
import { StageCompleteScreen } from "@/screens/StageCompleteScreen";
import { StageTransitionScreen } from "@/screens/StageTransitionScreen";
import { GameOverScreen } from "@/screens/GameOverScreen";
import { ReviewMistakesScreen } from "@/screens/ReviewMistakesScreen";
import { AdScreen } from "@/components/AdScreen";

export default function MainScreen() {
  const { state, watchAd, skipAd } = useGame();
  useGameSounds();

  const renderScreen = () => {
    switch (state.gamePhase) {
      case "menu":
        return <MenuScreen />;
      case "playing":
        return <GameScreen />;
      case "stage_complete":
        return <StageCompleteScreen />;
      case "stage_transition":
        return <StageTransitionScreen />;
      case "game_over":
        return <GameOverScreen />;
      default:
        return <MenuScreen />;
    }
  };

  return (
    <View style={styles.container}>
      {renderScreen()}
      {state.adWatching && (
        <AdScreen
          purpose={state.adPurpose}
          onWatched={watchAd}
        />
      )}
      {state.isReviewOpen && (
        <View style={StyleSheet.absoluteFill}>
          <ReviewMistakesScreen />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
