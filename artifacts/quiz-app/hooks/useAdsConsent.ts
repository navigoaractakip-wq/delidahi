interface AdsConsentState {
  canRequestAds: boolean;
  privacyRequired: boolean;
  ready: boolean;
}

export function useAdsConsent(): AdsConsentState {
  return { canRequestAds: false, privacyRequired: false, ready: true };
}

export async function showAdsPrivacyOptions(): Promise<boolean> {
  return false;
}

export async function awaitConsent(): Promise<boolean> {
  return false;
}
