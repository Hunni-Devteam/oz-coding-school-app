import React from "react";
import { SafeAreaView, View, Text } from "react-native";

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
    <View>
      <Text>프로필 정보</Text>
      <View>
        <Text>이름: {user.name}</Text>
        <Text>이메일: {user.email}</Text>
        <Text>전화번호: {user.phone}</Text>
      </View>
    </View>
  );
};

// TabTwoScreen 컴포넌트
export default function TabTwoScreen() {
  const exampleUser = {
    id: 1,
    name: "강훈",
    email: "hunni.devteam@gmail.com",
    phone: "010-1234-1234",
    createdAt: new Date(),
    updateAt: new Date(),
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <UserProfile user={exampleUser} />
    </SafeAreaView>
  );
}
