import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useCustomTheme } from "@shared/hooks";
import { Colors } from "@shared/constants/Colors";

export function ThemeToggle() {
  const { theme, setTheme } = useCustomTheme();
  const isDark = theme === "dark";

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setTheme(isDark ? "light" : "dark")}
    >
      <Ionicons
        name={isDark ? "moon" : "moon-outline"}
        size={24}
        color={isDark ? Colors.dark.text : Colors.light.text}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
});
