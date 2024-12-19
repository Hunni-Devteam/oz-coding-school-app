import { Tabs, useRouter } from "expo-router";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@shared/constants/Colors";
import { useColorScheme } from "@shared/hooks";
import { SafeAreaView, View, Text, Pressable } from "react-native";
import { ThemeToggle } from "@shared/components/ui";

export default function TabLayout() {
  const router = useRouter();
  const colorScheme = useColorScheme();

  // Use a static color for initial render
  const initialTabBarStyle = {
    backgroundColor: colorScheme === "dark" ? "#121212" : "#fff",
  };

  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "dark"].tint,
          tabBarInactiveTintColor: "#888",
          tabBarStyle: initialTabBarStyle, // Static color for initial render
          // borderTopWidth: 0,
          tabBarShowLabel: false,
          headerShown: true, // 헤더를 표시하도록 설정
          headerStyle: {
            backgroundColor: Colors[colorScheme ?? "dark"].background, // 헤더 배경색
          },
          headerTitleStyle: {
            color: Colors[colorScheme ?? "dark"].text, // 헤더 텍스트 색상
            fontWeight: "bold",
          },
          headerRight: () => (
            
            <ThemeToggle />
          ),
          headerLeft: () => (
            <Pressable style={{
              padding: 8
            }}
            onPress={() => router.push('/auth/signIn')}>
              <Ionicons name="log-in-outline" size={24} color={Colors[colorScheme ?? "dark"].tint} />
            </Pressable>
          ),
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
            headerTitle: "Calendar",
          }}
        />

        {/* Friends Tab */}
        <Tabs.Screen
          name="studyGroups"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "people" : "people-outline"}
                color={color}
                size={24}
              />
            ),
            headerTitle: "studyGroups",
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
            headerTitle: "Main",
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
            headerTitle: "Notice",
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
            headerTitle: "Profile",
          }}
        />
      </Tabs>
    </View>
  );
}
