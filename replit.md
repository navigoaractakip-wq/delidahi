# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Mobile App (artifacts/quiz-app)

- **Framework**: Expo (SDK 54) + Expo Router
- **Ad integration**: `react-native-google-mobile-ads` — real AdMob interstitial ads on native builds; automatic simulated fallback on web/Expo Go
  - Ad unit IDs: Google test IDs (replace with real IDs before production)
  - App IDs configured in `app.json` plugin (`androidAppId`, `iosAppId`)
  - Platform-split hooks: `hooks/useInterstitialAd.native.ts` (real SDK) / `hooks/useInterstitialAd.ts` (web stub)
  - `components/AdScreen.tsx` — tries real ad first; shows `SimulatedAdScreen` as fallback

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)
- **Auth**: Clerk (Replit-managed) — Google OAuth for Expo mobile app

## Deli Dahi — Quiz App (`artifacts/quiz-app`)

Turkish mobile quiz app built with Expo React Native.

### Features
- 10 categories, 1700 questions total (170 per category, QUESTIONS_VERSION=10), 10 random per round, 40s timer
- Multi-stage infinite progression (10 stages = 1 medal)
- Background music: Klasik / Blues / Enstrümantal (4 MP3 tracks each)
- Sound effects (correct, wrong, timeout)
- Badge/medal/achievement profile system
- Hint system, offline version check
- **Local username auth** — simple AsyncStorage-based username (no Clerk/email required)
- **Düello (Duel)** — real-time 1v1 Socket.io quiz battles; seed-based question sync; 10 questions per duel; 15s timer per question; duel history saved to `duel_sessions` DB table

### Auth Flow
- First launch → `(auth)/sign-in.tsx` — Google OAuth via Clerk
- After login → `(tabs)/index.tsx` — main quiz app
- Profile storage key: `deli_dahi_profile_v2_<clerkUserId>`
- **Custom forgot/reset password** via own Gmail SMTP (no Clerk Pro needed):
  - `POST /api/auth/forgot-password` → generates 6-digit code, hashes with SHA-256, stores in `password_reset_codes` table (15-min TTL), sends via nodemailer Gmail (`GMAIL_USER`/`GMAIL_APP_PASSWORD` secrets).
  - `POST /api/auth/reset-password` → verifies code (max 5 attempts), updates Clerk password via `clerkClient.users.updateUser`, returns sign-in ticket for auto-login.
  - Mailer: `artifacts/api-server/src/lib/mailer.ts`. Schema: `lib/db/src/schema/passwordResetCodes.ts`.

### APK Crash Defenses (May 4, 2026)
- `components/RootErrorBoundary.tsx` — outermost error boundary OUTSIDE ClerkProvider/SafeAreaProvider; renders visible error screen with stack on JS render crashes (replaces silent black screen). Posts crash to `/api/debug/log` with tag `root-crash`.
- `app/_layout.tsx` — hardcoded `FALLBACK_CLERK_KEY` so missing env doesn't null-deref; `useAdsConsent()` removed from launch (lazy-init only when ad shown). Note: AdMob native SDK may still auto-init via AndroidManifest meta-data.
- Build `dc353dea` (commit 8a8a88e + uncommitted defensive edits) → `https://expo.dev/artifacts/eas/tc9CncQG9PPLjUys6qtH5o.apk`.

### Key Files
- `context/GameContext.tsx` — game state, stage progression
- `context/ProfileContext.tsx` — user profile with Clerk user-specific storage
- `context/DuelContext.tsx` — Socket.io duel state; seed-based question sync; emits duel:search/answer/leave
- `context/UserContext.tsx` — local username storage (key: `deli_dahi_username`)
- `screens/DuelScreen.tsx` — full duel UI: category picker → searching → found → playing → result
- `hooks/useGameSounds.ts` — sequential music playback with category tracking
- `server/serve.js` — production static server with audio Range streaming
- `scripts/build.js` — Expo bundle builder with Clerk env vars

### Duel Architecture
- **Transport**: Socket.io WebSocket on existing Express http server (`artifacts/api-server/src/index.ts`)
- **Matchmaking**: by category — first waiting player in same category is matched
- **Question sync**: server generates random `seed`; both clients use seeded Fisher-Yates shuffle on local questions array → identical question order without sending question data to server
- **Scoring**: client reports `{index, isCorrect, correctIndex}`; server tracks scores; winner saved to `duel_sessions` table
- **Room manager**: `artifacts/api-server/src/duel/roomManager.ts` — in-memory rooms + waiting queue
- **DB table**: `lib/db/src/schema/duelSessions.ts` → `duel_sessions` (playerA, playerB, winner, scoreA, scoreB, category, playedAt)
- **Nginx deployment note**: requires `proxy_set_header Upgrade $http_upgrade; proxy_set_header Connection "upgrade";` for WebSocket

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
