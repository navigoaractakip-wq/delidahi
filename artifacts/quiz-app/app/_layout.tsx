import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { RootErrorBoundary } from "@/components/RootErrorBoundary";
import { DuelProvider } from "@/context/DuelContext";
import { GameProvider } from "@/context/GameContext";
import { ProfileProvider } from "@/context/ProfileContext";
import { UserProvider } from "@/context/UserContext";

SplashScreen.preventAutoHideAsync();

function RootLayoutNav() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
  );
}

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) return null;

  return (
    <RootErrorBoundary>
      <SafeAreaProvider>
        <UserProvider>
          <ErrorBoundary>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <KeyboardProvider>
                <ProfileProvider>
                  <DuelProvider>
                    <GameProvider>
                      <RootLayoutNav />
                    </GameProvider>
                  </DuelProvider>
                </ProfileProvider>
              </KeyboardProvider>
            </GestureHandlerRootView>
          </ErrorBoundary>
        </UserProvider>
      </SafeAreaProvider>
    </RootErrorBoundary>
  );
}
