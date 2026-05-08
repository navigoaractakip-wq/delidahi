import { useEffect, useRef } from "react";
import { Platform } from "react-native";
import { Audio } from "expo-av";
import { useGame } from "@/context/GameContext";
import { categories, Category } from "@/data/questions";
import { getCategoryById } from "@/data/musicTracks";

type SoundName = "correct" | "wrong" | "timeout";

const soundFiles: Record<SoundName, number> = {
  correct: require("../assets/sounds/correct.mp3"),
  wrong: require("../assets/sounds/wrong.mp3"),
  timeout: require("../assets/sounds/timeout.mp3"),
};

async function playOneShot(file: number, volume = 1.0) {
  if (Platform.OS === "web") return;
  try {
    const { sound } = await Audio.Sound.createAsync(file, {
      shouldPlay: true,
      volume,
    });
    sound.setOnPlaybackStatusUpdate((s) => {
      if (s.isLoaded && s.didJustFinish) sound.unloadAsync().catch(() => {});
    });
  } catch {}
}

export function useGameSounds() {
  const { state } = useGame();

  const bgRef = useRef<Audio.Sound | null>(null);
  const prevRevealed = useRef(false);
  const prevMusic = useRef<boolean>(true);

  // Refs to avoid stale closures in playback callbacks
  const categoryIdRef = useRef(state.selectedMusicCategory);
  const isMusicOnRef = useRef(state.isMusicOn);
  const trackIndexRef = useRef(0);
  const sessionRef = useRef(0); // incremented on category change to cancel stale callbacks

  // Sync latest values into refs
  categoryIdRef.current = state.selectedMusicCategory;
  isMusicOnRef.current = state.isMusicOn;

  // ─── Audio mode ───────────────────────────────────────────────────────────
  useEffect(() => {
    if (Platform.OS === "web") return;
    Audio.setAudioModeAsync({ playsInSilentModeIOS: true }).catch(() => {});
  }, []);

  // ─── Sequential track loader ───────────────────────────────────────────────
  async function loadTrack(session: number, index: number) {
    if (Platform.OS === "web") return;
    // Stop & unload the previous sound
    if (bgRef.current) {
      try {
        await bgRef.current.stopAsync();
        await bgRef.current.unloadAsync();
      } catch {}
      bgRef.current = null;
    }

    // Stale session check — bail out if a newer session started
    if (session !== sessionRef.current) return;

    const musicCat = getCategoryById(categoryIdRef.current);
    if (!musicCat || musicCat.tracks.length === 0) return;

    const track = musicCat.tracks[index % musicCat.tracks.length];
    try {
      const { sound } = await Audio.Sound.createAsync(track.file, {
        shouldPlay: isMusicOnRef.current,
        volume: 0.28,
      });

      if (session !== sessionRef.current) {
        sound.unloadAsync().catch(() => {});
        return;
      }

      bgRef.current = sound;
      prevMusic.current = isMusicOnRef.current;

      // When this track finishes, advance to the next
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded && status.didJustFinish) {
          if (session !== sessionRef.current) return;
          const nextIndex = (index + 1) % musicCat.tracks.length;
          trackIndexRef.current = nextIndex;
          loadTrack(session, nextIndex);
        }
      });
    } catch {}
  }

  // ─── Restart from track 0 whenever the category changes ───────────────────
  useEffect(() => {
    if (Platform.OS === "web") return;
    sessionRef.current += 1;
    const session = sessionRef.current;
    trackIndexRef.current = 0;
    loadTrack(session, 0);

    return () => {
      // On unmount: stop current sound
      bgRef.current?.unloadAsync().catch(() => {});
    };
  }, [state.selectedMusicCategory]);

  // ─── Play / pause on toggle ───────────────────────────────────────────────
  useEffect(() => {
    if (Platform.OS === "web") return;
    if (!bgRef.current) return;
    if (prevMusic.current === state.isMusicOn) return;
    prevMusic.current = state.isMusicOn;
    if (state.isMusicOn) {
      bgRef.current.playAsync().catch(() => {});
    } else {
      bgRef.current.pauseAsync().catch(() => {});
    }
  }, [state.isMusicOn]);

  // ─── Sound effects on answer reveal ───────────────────────────────────────
  useEffect(() => {
    if (state.isAnswerRevealed && !prevRevealed.current) {
      prevRevealed.current = true;

      if (state.timeLeft === 0 && state.selectedAnswer === null) {
        playOneShot(soundFiles.timeout);
      } else if (state.selectedAnswer !== null && state.currentCategoryId) {
        const cat: Category | undefined = categories.find(
          (c) => c.id === state.currentCategoryId
        );
        const questionId = state.shuffledQuestionIds[state.currentQuestionIndex];
        const q = cat?.questions.find((q) => q.id === questionId);
        if (q) {
          if (state.selectedAnswer === q.correctIndex) {
            playOneShot(soundFiles.correct);
          } else {
            playOneShot(soundFiles.wrong);
          }
        }
      }
    } else if (!state.isAnswerRevealed) {
      prevRevealed.current = false;
    }
  }, [state.isAnswerRevealed, state.selectedAnswer, state.timeLeft]);
}
