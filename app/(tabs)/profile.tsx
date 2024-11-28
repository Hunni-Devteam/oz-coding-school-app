import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useBaseStyles } from "@/hooks/useBaseStyles";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView, View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import FriendLogo from "@/assets/images/friend-svgrepo-com.svg";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
  updateAt: Date;
};

// Props 타입 정의
type UserProfileProps = {
  user: User;
};

// UserProfile 컴포넌트를 TabTwoScreen 함수 외부에 정의
const UserProfile = ({ user }: UserProfileProps) => {

  return (
      <ThemedView>
        <FriendLogo width={60} height={60} />
        <ThemedText>프로필 정보</ThemedText>
        <ThemedView>
          <ThemedText>나의정보</ThemedText>
          <ThemedView style={[styles.profileList]}>
            <ThemedView style={[styles.profileListItem]}>
              <Ionicons name="person-outline" size={24} color="black" />
              <ThemedText>이름: {user.name}</ThemedText>
            </ThemedView>
            <ThemedView style={[styles.profileListItem]}>
              <Ionicons name="mail-outline" size={24} color="black" />
              <ThemedText>이메일: {user.email}</ThemedText>
            </ThemedView>
            <ThemedView style={[styles.profileListItem]}>
              <Ionicons name="call-outline" size={24} color="black" />
              <ThemedText>전화번호: {user.phone}</ThemedText>
            </ThemedView>
            <ThemedView style={[styles.profileListItem]}>
              <Ionicons name="log-out-outline" size={24} color="black" />
              <ThemedText>로그아웃</ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </ThemedView>
  );
};

// TabTwoScreen 컴포넌트
export default function TabTwoScreen() {
  const baseStyles = useBaseStyles();
  const exampleUser = {
    id: 1,
    name: "강훈",
    email: "hunni.devteam@gmail.com",
    phone: "010-1234-1234",
    createdAt: new Date(),
    updateAt: new Date(),
  };

  return (
    <View style={[baseStyles.scrollView, { height: Dimensions.get('window').height }]}>
        <UserProfile user={exampleUser} />
    </View>
  );
}

const styles = StyleSheet.create({
  profileList: {
    gap: 8,
  },
  profileListItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
