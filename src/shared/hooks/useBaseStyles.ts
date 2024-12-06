import BaseStyles from "@/styles/base";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { useCustomTheme } from "./useCustomTheme";

export const useBaseStyles = () => {
  const { theme } = useCustomTheme();

  const composedStyles = {
    textInput: StyleSheet.compose(BaseStyles.base.textInput, theme === "light" ? BaseStyles.light.textInput : BaseStyles.dark.textInput) as TextStyle,
    button: StyleSheet.compose(BaseStyles.base.button, theme === "light" ? BaseStyles.light.button : BaseStyles.dark.button) as ViewStyle,
    scrollView: StyleSheet.compose(BaseStyles.base.scrollView, theme === "light" ? BaseStyles.light.scrollView : BaseStyles.dark.scrollView) as ViewStyle,
  };

  return composedStyles;
}