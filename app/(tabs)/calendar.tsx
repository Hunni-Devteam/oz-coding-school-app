import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from "react-native";
import { Calendar } from "react-native-calendars";

export const CalendarPage = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const markedDates = {
    "2024-11-20": { selected: true, marked: true, dotColor: "#8E4AE3" },
    "2024-11-22": { marked: true, dotColor: "#FF9800" },
    "2024-11-25": { marked: true, dotColor: "#FF9800" },
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#121212" : "#fff" },
      ]}
    >
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />

      {/* Calendar Header */}
      <View style={styles.header}>
        <Text
          style={[styles.headerText, { color: isDarkMode ? "#fff" : "#000" }]}
        >
          Calendar
        </Text>
      </View>

      {/* Calendar Component */}
      <Calendar
        markedDates={markedDates}
        theme={{
          backgroundColor: isDarkMode ? "#121212" : "#fff",
          calendarBackground: isDarkMode ? "#121212" : "#fff",
          textSectionTitleColor: isDarkMode ? "#bbb" : "#000",
          dayTextColor: isDarkMode ? "#fff" : "#000",
          todayTextColor: isDarkMode ? "#8E4AE3" : "#000",
          selectedDayBackgroundColor: "#8E4AE3",
          selectedDayTextColor: "#fff",
          arrowColor: isDarkMode ? "#fff" : "#000",
          monthTextColor: isDarkMode ? "#fff" : "#000",
          dotColor: "#8E4AE3",
          textDayFontWeight: "500",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "500",
          textDayFontSize: 16,
          textMonthFontSize: 18,
          textDayHeaderFontSize: 14,
        }}
        style={styles.calendar}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1F1F1F",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  calendar: {
    flex: 1,
    padding: 10,
  },
});

export default CalendarPage;
