import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { Pressable } from "react-native";

export default function Layout() {
  const router = useRouter();

  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="signIn"
        options={{
          headerTitle: "Sign In",
          headerLeft: () => {
            return (
              <Pressable onPress={() => router.back()}>
                <Ionicons name="chevron-back" size={20} color="black" />
              </Pressable>
            );
          }
        }}
      />
    </Stack>
  );
}
