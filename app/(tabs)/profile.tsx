import React, { useEffect, useState } from "react";
import { 
  SafeAreaView, 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useCustomTheme } from "@shared/hooks/useCustomTheme";
import FriendLogo from "@src-assets/images/friend-svgrepo-com.svg";

type ThemeColors = {
  text: string;
  background: string;
};

const Colors: Record<'light' | 'dark', ThemeColors> = {
  light: {
    text: '#11181C',
    background: '#fff',
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
  }
};

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
  updateAt: Date;
};

const ProfileSection = ({ 
  icon, 
  title, 
  value, 
  textColor 
}: { 
  icon: keyof typeof Ionicons.glyphMap, 
  title: string, 
  value?: string, 
  textColor: string 
}) => (
  <View style={styles.profileListItem}>
    <Ionicons name={icon} size={24} color={textColor} />
    <Text style={[styles.profileText, { color: textColor }]}>
      {title}{value ? `: ${value}` : ''}
    </Text>
  </View>
);

export default function ProfileScreen() {
  const { theme } = useCustomTheme();
  const colors = Colors[theme];

  // 임시 사용자 데이터
  const mockUser: User = {
    id: 1,
    name: "홍길동",
    email: "hong@example.com",
    phone: "010-1234-5678",
    createdAt: new Date(),
    updateAt: new Date()
  };

  // Use a static color for initial render
  const initialBackgroundColor = theme === 'dark' ? Colors.dark.background : Colors.light.background;

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: initialBackgroundColor }]}>
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <FriendLogo width={100} height={100} />
          
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            프로필
          </Text>

          <View style={styles.profileSection}>
            <Text style={[styles.sectionSubtitle, { color: colors.text }]}>
              개인 정보
            </Text>
            
            <ProfileSection 
              icon="person-outline" 
              title="이름" 
              value={mockUser.name} 
              textColor={colors.text} 
            />
            
            <ProfileSection 
              icon="mail-outline" 
              title="이메일" 
              value={mockUser.email} 
              textColor={colors.text} 
            />
            
            <ProfileSection 
              icon="call-outline" 
              title="전화번호" 
              value={mockUser.phone} 
              textColor={colors.text} 
            />

            <TouchableOpacity 
              style={styles.logoutButton}
              onPress={() => {
                // 로그아웃 로직 추가
                console.log('로그아웃');
              }}
            >
              <Text style={styles.logoutButtonText}>로그아웃</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  profileSection: {
    width: '100%',
    marginTop: 20,
  },
  sectionSubtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  profileListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  profileText: {
    fontSize: 16,
    marginLeft: 10,
  },
  logoutButton: {
    backgroundColor: '#FF4B4B',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
