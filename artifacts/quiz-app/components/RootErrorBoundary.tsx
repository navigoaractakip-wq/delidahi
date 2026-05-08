import React, { Component, PropsWithChildren } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

type State = { error: Error | null; stack: string };

export class RootErrorBoundary extends Component<PropsWithChildren, State> {
  state: State = { error: null, stack: "" };

  static getDerivedStateFromError(error: Error): State {
    return { error, stack: "" };
  }

  componentDidCatch(error: Error, info: { componentStack: string }) {
    this.setState({ stack: info.componentStack || "" });
    try {
      const domain = process.env.EXPO_PUBLIC_DOMAIN;
      if (domain) {
        fetch(`https://${domain}/api/debug/log`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            tag: "root-crash",
            payload: {
              message: String(error?.message || error),
              stack: String(error?.stack || ""),
              componentStack: info?.componentStack || "",
            },
          }),
        }).catch(() => {});
      }
    } catch {}
  }

  render() {
    if (this.state.error) {
      return (
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scroll}>
            <Text style={styles.title}>Bir hata oluştu</Text>
            <Text style={styles.subtitle}>Lütfen ekran görüntüsü alıp geliştiriciye gönder.</Text>
            <Text style={styles.label}>Mesaj:</Text>
            <Text style={styles.code}>{String(this.state.error?.message || this.state.error)}</Text>
            {this.state.error?.stack ? (
              <>
                <Text style={styles.label}>Stack:</Text>
                <Text style={styles.code}>{String(this.state.error.stack)}</Text>
              </>
            ) : null}
            {this.state.stack ? (
              <>
                <Text style={styles.label}>Component:</Text>
                <Text style={styles.code}>{this.state.stack}</Text>
              </>
            ) : null}
          </ScrollView>
        </View>
      );
    }
    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0f0f1e" },
  scroll: { padding: 20, paddingTop: 60 },
  title: { color: "#ff6b6b", fontSize: 22, fontWeight: "700", marginBottom: 8 },
  subtitle: { color: "#a0a0c0", fontSize: 14, marginBottom: 20 },
  label: { color: "#8b8bcc", fontSize: 13, marginTop: 16, marginBottom: 4, fontWeight: "600" },
  code: { color: "#fff", fontSize: 12, fontFamily: "monospace" },
});
