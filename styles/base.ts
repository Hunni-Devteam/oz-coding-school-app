import { useCustomTheme } from "@/hooks/useCustomTheme";
import { Dimensions, StyleSheet, TextStyle, ViewStyle } from "react-native";

export const BaseStyles = {
  base: StyleSheet.create({
    scrollView: {
      minHeight: Dimensions.get("window").height,
    },
    textInput: {
      fontFamily: "SpaceMono",
      borderRadius: 4,
      padding: 12,
      paddingVertical: 16,
    },
    button: {
      fontFamily: "SpaceMono",
      padding: 16,
      alignItems: "center",
      borderRadius: 5,
    },
  }),
  light: StyleSheet.create({
    scrollView: {
      backgroundColor: "white",
    },
    textInput: {
      backgroundColor: "#999",
      color: "white",
    },
    button: {
      backgroundColor: "#6466E5",
    },
  }),
  dark: StyleSheet.create({
    scrollView: {
      backgroundColor: "#121212",
    },
    textInput: {
      backgroundColor: "#b9b9b9",
      color: "white",
    },
    button: {
      backgroundColor: "#6466E5",
    },
  }),
}

export default BaseStyles;
