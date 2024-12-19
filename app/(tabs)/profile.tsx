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
  interstIn: string[];
};

type Category = {
  name: string;
  color: string;
  interests: string[];
}

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
      {value ? `${value}` : ''}
    </Text>
  </View>
);

export default function ProfileScreen() {
  const { theme } = useCustomTheme();
  const colors = Colors[theme];

  const mockCategories: Category[] = [
    {
      name: "frontend",
      color: "#6466E5",
      interests: ["React Native", "Node.js", "TypeScript", "JavaScript", "프론트앤드", "css", "html" ],
    },
    {
      name: "backend",
      color: "#4285F4",
      interests: ["Python", "Java", "C++", "Go", "백앤드", "REST API", "SQL", "NoSQL"],
    },
    {
      name: "design",
      color: "#34A853",
      interests: ["UI/UX", "디자인", "webDesign", "graphicDesign"],
    },
    {
      name: "marketing",
      color: "#EB4335",
      interests: ["SEO", "SMM", "비즈니스", "Marketing"],
    },
    {
      name: "language",
      color: "#FBBC05",
      interests: ["한국어", "English", "일본어", "중국어", "언어"],
    }
  ]

  // 임시 사용자 데이터
  const mockUser: User = {
    id: 1,
    name: "홍길동",
    email: "hong@example.com",
    phone: "010-1234-5678",
    createdAt: new Date(),
    updateAt: new Date(),
    interstIn: ["프론트앤드", "JavaScript", "TypeScript", "English", "디자인", "Marketing"],
  };

  const categorizeInterests = (interests: string[]) => {
    return mockCategories.map((category) => ({
      categoryName: category.name,
      color: category.color,
      matchedInterests: interests.filter((interest) =>
        category.interests.includes(interest)
      ),
    })).filter(category => category.matchedInterests.length > 0); // 관심사가 있는 카테고리만 반환
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
          <Ionicons name="person-circle" size={85} color={colors.text} />
          <View style={styles.buttonArea}>
            <TouchableOpacity 
                style={styles.blueButton}
                onPress={() => {
                  // 팔로우 신청 로직 추가
                  console.log('팔로우신청');
                }}
              >
                <Text style={styles.buttonText}>팔로우</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.grayButton}
                onPress={() => {
                  // 프로필 편집 로직 추가
                  console.log('프로필편집');
                }}
              >
                <Text style={styles.buttonText}>프로필 편집</Text>
              </TouchableOpacity>
          </View>

          <View style={styles.profileSection}>
            <Text style={[styles.sectionSubtitle, { color: colors.text }]}>
              나의 정보
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
              <Ionicons name="log-out-outline" size={24} color="#FF4949" />
              <Text style={styles.logoutButtonText}>로그아웃</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.profileSection}>
            <Text style={[styles.sectionSubtitle, { color: colors.text }]}>
              관심분야
            </Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {mockUser.interstIn.map((interest) => {
                // 관심사가 속한 카테고리를 찾습니다.
                const category = mockCategories.find((cat) =>
                  cat.interests.includes(interest)
                );

                // 색상을 카테고리에서 가져오거나 기본값 설정
                const baseColor = category ? category.color : '#cccccc'; // 기본 색상
                const backgroundColor = category ? `${baseColor}33` : '#cccccc33'; // 투명도 20%
                const textColor = category ? baseColor : '#cccccc'; // 카테고리 색상 또는 기본 텍스트 색상

                return (
                  <View
                    key={interest}
                    style={[styles.interestTag, { backgroundColor }]}
                  >
                    <Text style={[styles.interestTagText, { color: textColor }]}>
                      {interest}
                    </Text>
                  </View>
                );
              })}
            </View>
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
    marginTop: 30,
  },
  sectionSubtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#AFAFAF',
    marginBottom: 15,
  },
  profileListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  profileText: {
    fontSize: 16,
    marginLeft: 10,
  },
  logoutButton: {
    color: '#FF4949',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  logoutButtonText: {
    color: '#FF4949',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
  buttonArea: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 20,
  },
  blueButton: {
    width: '45%',
    backgroundColor: '#6466E5',
    padding: 15,
    borderRadius: 4,
    alignItems: 'center',
    margin: 10,
  },
  grayButton: {
    width: '45%',
    backgroundColor: '#363636',
    padding: 15,
    borderRadius: 4,
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
  },
  interestTag: {
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 50,
    marginRight: 6,
    marginBottom: 6,
  },
  interestTagText: {
    fontSize: 14,
    fontWeight: '600',
  },
});
