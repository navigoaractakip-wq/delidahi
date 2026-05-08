export type InterstitialAdStatus = "loading" | "showing" | "done" | "fallback";

export interface UseInterstitialAdResult {
  status: InterstitialAdStatus;
}

export function useInterstitialAd(_onWatched: () => void): UseInterstitialAdResult {
  return { status: "fallback" };
}
