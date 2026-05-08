import { pgTable, text, timestamp, integer, uuid } from "drizzle-orm/pg-core";

export const duelSessionsTable = pgTable("duel_sessions", {
  id: uuid("id").primaryKey().defaultRandom(),
  playerA: text("player_a").notNull(),
  playerB: text("player_b").notNull(),
  winner: text("winner"),
  scoreA: integer("score_a").notNull().default(0),
  scoreB: integer("score_b").notNull().default(0),
  category: text("category").notNull(),
  totalQuestions: integer("total_questions").notNull().default(10),
  playedAt: timestamp("played_at", { withTimezone: true }).notNull().defaultNow(),
});

export type DuelSession = typeof duelSessionsTable.$inferSelect;
export type InsertDuelSession = typeof duelSessionsTable.$inferInsert;
