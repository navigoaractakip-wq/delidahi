import { useUser } from "@/context/UserContext";
import { Redirect, Tabs } from "expo-router";
import React from "react";
import { ActivityIndicator, View } from "react-native";

export default function TabLayout() {
  const { username, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <View style={{ flex: 1, backgroundColor: "#0f0f1e", alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#6c63ff" />
      </View>
    );
  }

  if (!username) {
    return <Redirect href="/(auth)/sign-in" />;
  }

  return (
    <Tabs screenOptions={{ headerShown: false, tabBarStyle: { display: "none" } }}>
      <Tabs.Screen name="index" options={{ title: "Oyun" }} />
    </Tabs>
  );
}
