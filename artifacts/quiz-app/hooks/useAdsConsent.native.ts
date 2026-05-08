import { useEffect, useState } from "react";

interface AdsConsentState {
  canRequestAds: boolean;
  privacyRequired: boolean;
  ready: boolean;
}

let cachedInfo: AdsConsentState | null = null;
let initialized = false;
let inflight: Promise<AdsConsentState> | null = null;

async function ensureConsent(): Promise<AdsConsentState> {
  if (cachedInfo) return cachedInfo;
  if (inflight) return inflight;

  inflight = (async () => {
    try {
      const mod = require("react-native-google-mobile-ads");
      const { AdsConsent, AdsConsentPrivacyOptionsRequirementStatus } = mod;
      const mobileAds = mod.default;

      const info = await AdsConsent.gatherConsent();

      if (info.canRequestAds && !initialized) {
        await mobileAds().initialize();
        initialized = true;
      }

      cachedInfo = {
        canRequestAds: !!info.canRequestAds,
        privacyRequired:
          info.privacyOptionsRequirementStatus ===
          AdsConsentPrivacyOptionsRequirementStatus.REQUIRED,
        ready: true,
      };
    } catch {
      cachedInfo = { canRequestAds: false, privacyRequired: false, ready: true };
    } finally {
      inflight = null;
    }
    return cachedInfo!;
  })();

  return inflight;
}

export async function awaitConsent(): Promise<boolean> {
  const info = await ensureConsent();
  return info.canRequestAds;
}

export function useAdsConsent(): AdsConsentState {
  const [state, setState] = useState<AdsConsentState>(
    cachedInfo ?? { canRequestAds: false, privacyRequired: false, ready: false },
  );

  useEffect(() => {
    let cancelled = false;
    ensureConsent().then((info) => {
      if (!cancelled) setState(info);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}

export async function showAdsPrivacyOptions(): Promise<boolean> {
  try {
    const { AdsConsent } = require("react-native-google-mobile-ads");
    await AdsConsent.showPrivacyOptionsForm();
    return true;
  } catch {
    return false;
  }
}
