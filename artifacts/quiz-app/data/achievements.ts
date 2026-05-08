export interface AchievementDef {
  id: string;
  title: string;
  description: string;
  emoji: string;
  color: string;
}

export const ACHIEVEMENT_DEFS: AchievementDef[] = [
  {
    id: "first_game",
    title: "İlk Adım",
    description: "İlk oyununu tamamladın",
    emoji: "🎯",
    color: "#3498db",
  },
  {
    id: "perfect_stage",
    title: "Mükemmeliyetçi",
    description: "Bir bölümü 10/10 doğruyla bitir",
    emoji: "⭐",
    color: "#f39c12",
  },
  {
    id: "hundred_correct",
    title: "Yüzlük Kulübü",
    description: "Toplam 100 doğru cevap ver",
    emoji: "💯",
    color: "#27ae60",
  },
  {
    id: "versatile",
    title: "Çok Yönlü",
    description: "5 farklı kategoride oyna",
    emoji: "🌈",
    color: "#9b59b6",
  },
  {
    id: "badge_hunter",
    title: "Rozet Avcısı",
    description: "Toplam 10 rozet kazan",
    emoji: "🏅",
    color: "#e67e22",
  },
  {
    id: "first_medal",
    title: "Altın Nesil",
    description: "İlk altın madalyayı kazan",
    emoji: "🥇",
    color: "#f1c40f",
  },
  {
    id: "persistent",
    title: "Azimli",
    description: "25 bölümü başarıyla tamamla",
    emoji: "💪",
    color: "#e74c3c",
  },
  {
    id: "genius",
    title: "Deli Dahi",
    description: "Toplam 500 doğru cevap ver",
    emoji: "🧠",
    color: "#8e44ad",
  },
  {
    id: "duel_first_win",
    title: "İlk Kan",
    description: "İlk düello zaferini kazan",
    emoji: "⚔️",
    color: "#6c63ff",
  },
  {
    id: "duel_veteran",
    title: "Düello Ustası",
    description: "5 düello maçı kazan",
    emoji: "🗡️",
    color: "#ef4444",
  },
  {
    id: "duel_champion",
    title: "Arena Şampiyonu",
    description: "10 düello maçı kazan",
    emoji: "👑",
    color: "#f59e0b",
  },
];

export const LEVELS = [
  { min: 0, max: 49, title: "Çaylak", emoji: "🌱", color: "#95a5a6", next: 50 },
  { min: 50, max: 149, title: "Meraklı", emoji: "🔍", color: "#3498db", next: 150 },
  { min: 150, max: 299, title: "Bilge", emoji: "📚", color: "#9b59b6", next: 300 },
  { min: 300, max: 499, title: "Usta", emoji: "⚡", color: "#e67e22", next: 500 },
  { min: 500, max: Infinity, title: "Deli Dahi", emoji: "🧠", color: "#e74c3c", next: Infinity },
];

export function getLevel(totalCorrect: number) {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (totalCorrect >= LEVELS[i].min) return { ...LEVELS[i], index: i };
  }
  return { ...LEVELS[0], index: 0 };
}

export function getLevelProgress(totalCorrect: number): number {
  const level = getLevel(totalCorrect);
  if (level.next === Infinity) return 1;
  const range = level.next - level.min;
  const done = totalCorrect - level.min;
  return Math.min(1, done / range);
}
