import { Tabs } from "expo-router";
import React from "react";
import { Ionicons } from "@expo/vector-icons"; 
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { View } from "react-native";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <View style={{ flex: 1 }}>
      <ThemeToggle />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "dark"].tint,
          tabBarInactiveTintColor: "#888",
          tabBarStyle: {
            backgroundColor: colorScheme === "dark" ? "#121212" : "#fff",
            borderTopWidth: 0,
          },
          tabBarShowLabel: false,
          headerShown: false,
        }}
      >
        {/* Calendar Tab */}
        <Tabs.Screen
          name="calendar"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "calendar" : "calendar-outline"}
                color={color}
                size={24}
              />
            ),
          }}
        />

        {/* Friends Tab */}
        <Tabs.Screen
          name="friends"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "people" : "people-outline"}
                color={color}
                size={24}
              />
            ),
          }}
        />

        {/* Home Tab */}
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                color={color}
                size={24}
              />
            ),
          }}
        />

        {/* Messages Tab */}
        <Tabs.Screen
          name="messages"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "chatbubble" : "chatbubble-outline"}
                color={color}
                size={24}
              />
            ),
          }}
        />

        {/* Profile Tab */}
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "person-circle" : "person-circle-outline"}
                color={color}
                size={24}
              />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}
