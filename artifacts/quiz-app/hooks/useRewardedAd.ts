export type RewardedAdStatus = "loading" | "showing" | "done" | "fallback";

export interface UseRewardedAdResult {
  status: RewardedAdStatus;
}

export function useRewardedAd(_onRewarded: () => void): UseRewardedAdResult {
  return { status: "fallback" };
}
