export interface MusicTrack {
  id: string;
  name: string;
  file: number;
}

export interface MusicCategory {
  id: string;
  name: string;
  emoji: string;
  description: string;
  tracks: MusicTrack[];
}

export const MUSIC_CATEGORIES: MusicCategory[] = [
  {
    id: "klasik",
    name: "Klasik",
    emoji: "🎻",
    description: "Klasik müzik eserleri",
    tracks: [
      { id: "k1", name: "Klasik I", file: require("../assets/sounds/klasik1.mp3") },
      { id: "k2", name: "Klasik II", file: require("../assets/sounds/klasik2.mp3") },
      { id: "k3", name: "Klasik III", file: require("../assets/sounds/klasik3.mp3") },
      { id: "k4", name: "Klasik IV", file: require("../assets/sounds/klasik4.mp3") },
    ],
  },
  {
    id: "blues",
    name: "Blues",
    emoji: "🎸",
    description: "Ruhlu blues melodileri",
    tracks: [
      { id: "b1", name: "Blues I",  file: require("../assets/sounds/blues1.mp3") },
      { id: "b2", name: "Blues II", file: require("../assets/sounds/blues2.mp3") },
      { id: "b3", name: "Blues III",file: require("../assets/sounds/blues3.mp3") },
      { id: "b4", name: "Blues IV", file: require("../assets/sounds/blues4.mp3") },
    ],
  },
  {
    id: "enstrumantal",
    name: "Enstrümantal",
    emoji: "🎵",
    description: "Saf enstrümantal piyano",
    tracks: [
      { id: "e1", name: "Enstrümantal I",   file: require("../assets/sounds/enst1.mp3") },
      { id: "e2", name: "Enstrümantal II",  file: require("../assets/sounds/enst2.mp3") },
      { id: "e3", name: "Enstrümantal III", file: require("../assets/sounds/enst3.mp3") },
      { id: "e4", name: "Enstrümantal IV",  file: require("../assets/sounds/enst4.mp3") },
    ],
  },
];

export const DEFAULT_CATEGORY_ID = "klasik";

export function getCategoryById(id: string): MusicCategory {
  return MUSIC_CATEGORIES.find((c) => c.id === id) ?? MUSIC_CATEGORIES[0];
}
