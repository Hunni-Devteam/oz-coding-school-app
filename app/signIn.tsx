import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as yup from 'yup';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';

// 이메일 유효성 검사와 로그인 검증을 위한 validation schema
const validationSchema = yup.object().shape({
  email: yup.string().email('유효한 이메일 주소를 입력해주세요').required('이메일을 입력해주세요'),
  password: yup.string().required('비밀번호를 입력해주세요'),
});

const LoginPage: React.FC = () => {
  const [loginError, setLoginError] = useState<string>('');
  const navigation = useNavigation();

  // 로그인 처리 함수
  const handleLogin = (values: { email: string; password: string }) => {
    const { email, password } = values;

    // 로그인 API 요청 (여기서는 더미 데이터 사용)
    if (email === 'test@example.com' && password === 'password123') {
      // 로그인 성공 시 메인 페이지로 이동
      navigation.navigate('MainPage');
    } else {
      // 로그인 실패 시 에러 메시지 설정
      setLoginError('회원정보가 맞지 않습니다.');
    }
  };

  return (
    <View style={styles.container}>
      {/* 로고 이미지 */}
      <Image source={require('./assets/logo.png')} style={styles.logo} />

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({ values, handleChange, handleSubmit, errors, touched }) => (
          <>
            {/* 이메일 입력 칸 */}
            <TextInput
              style={[styles.input, touched.email && errors.email ? styles.inputError : null]}
              placeholder="이메일"
              value={values.email}
              onChangeText={handleChange('email')}
            />
            {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

            {/* 비밀번호 입력 칸 */}
            <TextInput
              style={[styles.input, touched.password && errors.password ? styles.inputError : null]}
              placeholder="비밀번호"
              secureTextEntry
              value={values.password}
              onChangeText={handleChange('password')}
            />
            {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

            {/* 로그인 버튼 */}
            <Button title="로그인" onPress={() => handleSubmit()} />

            {/* 로그인 실패 에러 메시지 */}
            {loginError && <Text style={styles.errorText}>{loginError}</Text>}

            {/* 작은 회원가입 버튼 */}
            <TouchableOpacity onPress={() => navigation.navigate('SignUpPage')}>
              <Text style={styles.signUpText}>회원가입</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  signUpText: {
    color: '#007BFF',
    fontSize: 14,
    marginTop: 15,
  },
});

export default LoginPage;
