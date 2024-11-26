import { StyleSheet } from "react-native";
import { DefaultTheme } from "@react-navigation/native";

export const BaseStyles = StyleSheet.create({
  textInput: {
    borderRadius: 4,
    padding: 12,
    paddingVertical: 16,
    backgroundColor: "#999",
    color: "white",
  },
  button: {
    backgroundColor: "#6466E5",
    padding: 16,
    alignItems: "center",
    borderRadius: 5,
  },
});

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#fff",
    text: "#000",
    primary: "#8E4AE3",
    secondary: "#bbb",
    header: "#1F1F1F",
  },
  calendar: {
    backgroundColor: "#fff",
    calendarBackground: "#fff",
    textSectionTitleColor: "#000",
    dayTextColor: "#000",
    todayTextColor: "#000",
    selectedDayBackgroundColor: "#8E4AE3",
    selectedDayTextColor: "#fff",
    arrowColor: "#000",
    monthTextColor: "#000",
    dotColor: "#8E4AE3",
    textDayFontWeight: "500",
    textMonthFontWeight: "bold",
    textDayHeaderFontWeight: "500",
    textDayFontSize: 16,
    textMonthFontSize: 18,
    textDayHeaderFontSize: 14,
  },
};

export const darkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#121212",
    text: "#fff",
    primary: "#8E4AE3",
    secondary: "#bbb",
    header: "#1F1F1F",
  },
  calendar: {
    backgroundColor: "#121212",
    calendarBackground: "#121212",
    textSectionTitleColor: "#bbb",
    dayTextColor: "#fff",
    todayTextColor: "#8E4AE3",
    selectedDayBackgroundColor: "#8E4AE3",
    selectedDayTextColor: "#fff",
    arrowColor: "#fff",
    monthTextColor: "#fff",
    dotColor: "#8E4AE3",
    textDayFontWeight: "500",
    textMonthFontWeight: "bold",
    textDayHeaderFontWeight: "500",
    textDayFontSize: 16,
    textMonthFontSize: 18,
    textDayHeaderFontSize: 14,
  },
};

export default BaseStyles;
