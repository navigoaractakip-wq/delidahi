import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

const USERNAME_KEY = "deli_dahi_username";

interface UserContextValue {
  username: string | null;
  isLoaded: boolean;
  setUsername: (name: string) => Promise<void>;
  clearUsername: () => Promise<void>;
}

const UserContext = createContext<UserContextValue | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [username, setUsernameState] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(USERNAME_KEY)
      .then((val) => setUsernameState(val || null))
      .finally(() => setIsLoaded(true));
  }, []);

  const setUsername = useCallback(async (name: string) => {
    await AsyncStorage.setItem(USERNAME_KEY, name.trim());
    setUsernameState(name.trim());
  }, []);

  const clearUsername = useCallback(async () => {
    await AsyncStorage.removeItem(USERNAME_KEY);
    setUsernameState(null);
  }, []);

  return (
    <UserContext.Provider value={{ username, isLoaded, setUsername, clearUsername }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be within UserProvider");
  return ctx;
}
