import { useEffect, useRef, useState } from "react";
import { Platform } from "react-native";
import { awaitConsent } from "./useAdsConsent";

export type RewardedAdStatus = "loading" | "showing" | "done" | "fallback";

export interface UseRewardedAdResult {
  status: RewardedAdStatus;
}

const AD_UNIT_ID =
  Platform.OS === "android"
    ? "ca-app-pub-9538510927656499/9196043363"
    : "ca-app-pub-3940256099942544/1712485313";

export function useRewardedAd(onRewarded: () => void): UseRewardedAdResult {
  const [status, setStatus] = useState<RewardedAdStatus>("loading");
  const unsubscribeRef = useRef<(() => void) | null>(null);
  const onRewardedRef = useRef(onRewarded);
  const earnedRef = useRef(false);
  onRewardedRef.current = onRewarded;

  useEffect(() => {
    let cancelled = false;

    const loadAd = async () => {
      try {
        const canRequestAds = await awaitConsent();
        if (cancelled) return;
        if (!canRequestAds) {
          setStatus("fallback");
          return;
        }

        const {
          RewardedAd,
          RewardedAdEventType,
          AdEventType,
        } = require("react-native-google-mobile-ads");

        const rewarded = RewardedAd.createForAdRequest(AD_UNIT_ID, {
          requestNonPersonalizedAdsOnly: false,
        });

        const unLoaded = rewarded.addAdEventListener(
          RewardedAdEventType.LOADED,
          () => {
            if (cancelled) return;
            setStatus("showing");
            rewarded.show();
          }
        );

        const unEarned = rewarded.addAdEventListener(
          RewardedAdEventType.EARNED_REWARD,
          () => {
            if (cancelled) return;
            earnedRef.current = true;
          }
        );

        const unClosed = rewarded.addAdEventListener(
          AdEventType.CLOSED,
          () => {
            if (cancelled) return;
            setStatus("done");
            if (earnedRef.current) {
              onRewardedRef.current();
            } else {
              setStatus("fallback");
            }
          }
        );

        const unError = rewarded.addAdEventListener(
          AdEventType.ERROR,
          () => {
            if (!cancelled) setStatus("fallback");
          }
        );

        unsubscribeRef.current = () => {
          unLoaded();
          unEarned();
          unClosed();
          unError();
        };

        rewarded.load();

        setTimeout(() => {
          if (cancelled) return;
          setStatus((prev) => {
            if (prev === "loading") return "fallback";
            return prev;
          });
        }, 8000);
      } catch {
        if (!cancelled) setStatus("fallback");
      }
    };

    loadAd();

    return () => {
      cancelled = true;
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
        unsubscribeRef.current = null;
      }
    };
  }, []);

  return { status };
}
