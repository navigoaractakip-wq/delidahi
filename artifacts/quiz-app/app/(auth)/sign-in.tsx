import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useUser } from "@/context/UserContext";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

export default function UsernameScreen() {
  const { setUsername } = useUser();
  const router = useRouter();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleStart = async () => {
    const trimmed = name.trim();
    if (!trimmed) {
      setError("Bir kullanıcı adı gir.");
      return;
    }
    if (trimmed.length < 2) {
      setError("Kullanıcı adı en az 2 karakter olmalı.");
      return;
    }
    if (trimmed.length > 20) {
      setError("Kullanıcı adı en fazla 20 karakter olabilir.");
      return;
    }
    setError(null);
    setLoading(true);
    await setUsername(trimmed);
    router.replace("/(tabs)");
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="always"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.logoArea}>
            <Image
              source={require("@/assets/images/logo.png")}
              style={styles.logoImage}
              resizeMode="contain"
            />
            <Text style={styles.appTitle}>Deli Dahi</Text>
            <Text style={styles.appSubtitle}>Zekânı sına, kendinle yarış!</Text>
          </View>

          <View style={styles.formArea}>
            <Text style={styles.welcomeText}>Hoş Geldin!</Text>
            <Text style={styles.descText}>
              Oynamaya başlamak için bir kullanıcı adı seç.
            </Text>

            <View style={styles.inputGroup}>
              <Feather name="user" size={18} color="#8b8bcc" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Kullanıcı adın"
                placeholderTextColor="#5a5a8a"
                autoCapitalize="none"
                autoCorrect={false}
                maxLength={20}
                value={name}
                onChangeText={(t) => { setName(t); setError(null); }}
                onSubmitEditing={handleStart}
                returnKeyType="done"
                editable={!loading}
              />
            </View>

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <TouchableOpacity
              style={[styles.primaryButton, loading && styles.buttonDisabled]}
              onPress={handleStart}
              disabled={loading}
              activeOpacity={0.85}
            >
              {loading ? (
                <ActivityIndicator color="#fff" size="small" />
              ) : (
                <Text style={styles.primaryButtonText}>Oynamaya Başla</Text>
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Kullanıcı adın bu cihazda saklanır. Hesap veya şifre gerekmez.
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f1e",
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingVertical: 24,
    justifyContent: "space-between",
  },
  logoArea: {
    alignItems: "center",
    marginTop: 40,
  },
  logoImage: {
    width: 110,
    height: 110,
    marginBottom: 16,
  },
  appTitle: {
    fontSize: 36,
    fontFamily: "Inter_700Bold",
    color: "#ffffff",
    letterSpacing: 1,
  },
  appSubtitle: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    color: "#8b8bcc",
    marginTop: 6,
    textAlign: "center",
  },
  formArea: {
    marginTop: 40,
  },
  welcomeText: {
    fontSize: 26,
    fontFamily: "Inter_700Bold",
    color: "#ffffff",
    marginBottom: 10,
    textAlign: "center",
  },
  descText: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    color: "#8b8bcc",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 28,
    paddingHorizontal: 8,
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1a1a2e",
    borderRadius: 14,
    paddingHorizontal: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#2a2a4e",
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 16,
    fontSize: 16,
    color: "#ffffff",
    fontFamily: "Inter_400Regular",
  },
  primaryButton: {
    backgroundColor: "#6c63ff",
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 8,
    shadowColor: "#6c63ff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  primaryButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "Inter_600SemiBold",
  },
  errorText: {
    color: "#ff6b6b",
    fontFamily: "Inter_400Regular",
    fontSize: 13,
    marginTop: 4,
    marginBottom: 8,
    textAlign: "center",
  },
  footer: {
    alignItems: "center",
    marginTop: 32,
  },
  footerText: {
    fontSize: 11,
    fontFamily: "Inter_400Regular",
    color: "#4a4a7a",
    textAlign: "center",
    lineHeight: 16,
  },
});
