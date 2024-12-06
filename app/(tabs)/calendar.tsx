import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import { Calendar } from "react-native-calendars";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useCustomTheme } from "@/hooks/useCustomTheme";

const months = [
  { title: "November 2024", date: "2024-11-01" },
  { title: "December 2024", date: "2024-12-01" },
  { title: "January 2025", date: "2025-01-01" },
];

export const CalendarPage = () => {
  const { theme } = useCustomTheme();
  const isDarkMode = theme === "dark";

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />

      {/* Page Header */}
      <ThemedView style={styles.header}>
        <ThemedText style={styles.headerText}>Calendar</ThemedText>
      </ThemedView>

      {/* Scrollable View with Multiple Calendars */}
      <ScrollView style={styles.scrollContainer}>
        {months.map((month, index) => (
          <ThemedView key={index} style={styles.calendarContainer}>
            <ThemedText style={styles.monthTitle}>{month.title}</ThemedText>
            <Calendar
              current={month.date}
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
          </ThemedView>
        ))}
      </ScrollView>
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
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  scrollContainer: {
    flex: 1,
  },
  calendarContainer: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  monthTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  calendar: {
    borderRadius: 10,
    overflow: "hidden",
  },
});

export default CalendarPage;
