import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Text,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import { ThemedView } from "@shared/components/ui/ThemedView";
import { ThemedText } from "@shared/components/ui/ThemedText";
import { useThemeColor } from "@shared/hooks";
import { Colors } from "@shared/constants/Colors";

const { width } = Dimensions.get("window");

const DashboardCard = ({
  icon,
  title,
  subtitle,
  onPress,
  color,
}: {
  icon: string;
  title: string;
  subtitle: string;
  onPress: () => void;
  color: string;
}) => {
  const textColor = useThemeColor({}, "text");
  const backgroundColor = useThemeColor({}, "background");

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.dashboardCard,
        {
          backgroundColor: backgroundColor,
        },
      ]}
    >
      <View style={styles.cardIconContainer}>
        <Ionicons name={icon} size={32} color={textColor} />
      </View>
      <View style={styles.cardTextContainer}>
        <Text style={[styles.cardTitle, { color: textColor }]}>{title}</Text>
        <Text style={[styles.cardSubtitle, { color: textColor }]}>
          {subtitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default function HomeScreen() {
  const router = useRouter();
  const textColor = useThemeColor({}, "text");

  const dashboardItems = [
    {
      icon: "calendar-outline",
      title: "Calendar",
      subtitle: "View your schedule",
      color: "#4A90E2",
      onPress: () => router.push("/(tabs)/calendar"),
    },
    {
      icon: "chatbubble-outline",
      title: "Messages",
      subtitle: "Check your inbox",
      color: "#50C878",
      onPress: () => router.push("/(tabs)/messages"),
    },
    {
      icon: "people-outline",
      title: "Friends",
      subtitle: "Connect with peers",
      color: "#FF6B6B",
      onPress: () => router.push("/(tabs)/friends"),
    },
    {
      icon: "person-outline",
      title: "Profile",
      subtitle: "Manage your account",
      color: "#9C27B0",
      onPress: () => router.push("/(tabs)/profile"),
    },
  ];

  return (
    <ThemedView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerContainer}>
          <Text style={[styles.welcomeText, { color: textColor }]}>
            Welcome Back!
          </Text>
          <Text style={[styles.subtitleText, { color: textColor }]}>
            Ready to continue your learning journey?
          </Text>
        </View>

        <View style={styles.dashboardContainer}>
          {dashboardItems.map((item, index) => (
            <DashboardCard key={index} {...item} />
          ))}
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  headerContainer: {
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitleText: {
    fontSize: 16,
    opacity: 0.7,
  },
  dashboardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  dashboardCard: {
    width: width / 2 - 24,
    height: 180,
    borderRadius: 15,
    padding: 16,
    marginBottom: 16,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardIconContainer: {
    alignSelf: "flex-start",
    padding: 10,
    borderRadius: 10,
  },
  cardTextContainer: {
    alignSelf: "flex-start",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    opacity: 0.7,
  },
});
