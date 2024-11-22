import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from "react-native";
import { Calendar } from "react-native-calendars";

const months = [
  { title: "November 2024", date: "2024-11-01" },
  { title: "December 2024", date: "2024-12-01" },
  { title: "January 2025", date: "2025-01-01" },
];

export const CalendarPage = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#121212" : "#fff" },
      ]}
    >
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />

      {/* Page Header */}
      <View style={styles.header}>
        <Text
          style={[styles.headerText, { color: isDarkMode ? "#fff" : "#000" }]}
        >
          Calendar
        </Text>
      </View>

      {/* Scrollable View with Multiple Calendars */}
      <ScrollView style={styles.scrollContainer}>
        {months.map((month, index) => (
          <View key={index} style={styles.calendarContainer}>
            <Text
              style={[
                styles.monthTitle,
                { color: isDarkMode ? "#fff" : "#000" },
              ]}
            >
              {month.title}
            </Text>
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
          </View>
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
    backgroundColor: "#1F1F1F",
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
