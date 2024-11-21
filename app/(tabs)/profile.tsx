import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

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
        <Text>나의정보</Text>
        <View style={[styles.profileList]}>
          <View style={[styles.profileListItem]}>
            <Ionicons name="person-outline" size={24} color="black" />
            <Text>이름: {user.name}</Text>
          </View>
          <View style={[styles.profileListItem]}>
            <Ionicons name="mail-outline" size={24} color="black" />
            <Text>이메일: {user.email}</Text>
          </View>
          <View style={[styles.profileListItem]}>
            <Ionicons name="call-outline" size={24} color="black" />
            <Text>전화번호: {user.phone}</Text>
          </View>
          <View style={[styles.profileListItem]}>
          <Ionicons name="log-out-outline" size={24} color="black" />
            <Text>로그아웃</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

// TabTwoScreen 컴포넌트
export default function TabTwoScreen() {
  const exampleUser = {
    id: 1,
    name: '강훈',
    email: 'hunni.devteam@gmail.com',
    phone: '010-1234-1234',
    createdAt: new Date(),
    updateAt: new Date(),
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <UserProfile user={exampleUser} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  profileList: {
    gap: 8
  },
  profileListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  }
});