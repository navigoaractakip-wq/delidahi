import { useEffect, useRef, useState } from "react";
import { Platform } from "react-native";
import { awaitConsent } from "./useAdsConsent";

export type InterstitialAdStatus = "loading" | "showing" | "done" | "fallback";

export interface UseInterstitialAdResult {
  status: InterstitialAdStatus;
}

const AD_UNIT_ID =
  Platform.OS === "android"
    ? "ca-app-pub-9538510927656499/5361663571"
    : "ca-app-pub-3940256099942544/4411468910";

export function useInterstitialAd(onWatched: () => void): UseInterstitialAdResult {
  const [status, setStatus] = useState<InterstitialAdStatus>("loading");
  const unsubscribeRef = useRef<(() => void) | null>(null);
  const onWatchedRef = useRef(onWatched);
  onWatchedRef.current = onWatched;

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
          InterstitialAd,
          AdEventType,
        } = require("react-native-google-mobile-ads");

        const interstitial = InterstitialAd.createForAdRequest(AD_UNIT_ID, {
          requestNonPersonalizedAdsOnly: false,
        });

        const unLoaded = interstitial.addAdEventListener(
          AdEventType.LOADED,
          () => {
            if (cancelled) return;
            setStatus("showing");
            interstitial.show();
          }
        );

        const unClosed = interstitial.addAdEventListener(
          AdEventType.CLOSED,
          () => {
            if (cancelled) return;
            setStatus("done");
            onWatchedRef.current();
          }
        );

        const unError = interstitial.addAdEventListener(
          AdEventType.ERROR,
          () => {
            if (!cancelled) setStatus("fallback");
          }
        );

        unsubscribeRef.current = () => {
          unLoaded();
          unClosed();
          unError();
        };

        interstitial.load();

        // 8-second timeout → fall back to simulated ad
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
