import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { QUESTIONS_VERSION } from "@/data/questions";

const VERSION_KEY = "deli_dahi_questions_version";

export function useVersionCheck() {
  const [isNewVersion, setIsNewVersion] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function check() {
      try {
        const stored = await AsyncStorage.getItem(VERSION_KEY);
        const storedVersion = stored ? parseInt(stored, 10) : 0;
        if (!cancelled) {
          if (storedVersion !== QUESTIONS_VERSION && storedVersion > 0) {
            setIsNewVersion(true);
          }
          await AsyncStorage.setItem(VERSION_KEY, String(QUESTIONS_VERSION));
        }
      } catch {}
    }

    check();
    return () => {
      cancelled = true;
    };
  }, []);

  const dismiss = () => setIsNewVersion(false);

  return { isNewVersion, dismiss };
}
