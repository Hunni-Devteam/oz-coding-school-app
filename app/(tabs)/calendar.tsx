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
import { lightTheme, darkTheme } from "@/styles/base";

const months = [
  { title: "November 2024", date: "2024-11-01" },
  { title: "December 2024", date: "2024-12-01" },
  { title: "January 2025", date: "2025-01-01" },
];

export const CalendarPage = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />

      <View style={styles.header}>
        <Text style={[styles.headerText, { color: theme.colors.text }]}>
          Calendar
        </Text>
      </View>

      <ScrollView style={styles.scrollContainer}>
        {months.map((month, index) => (
          <View key={index} style={styles.calendarContainer}>
            <Text style={[styles.monthTitle, { color: theme.colors.text }]}>
              {month.title}
            </Text>
            <Calendar
              current={month.date}
              theme={theme.calendar}
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
