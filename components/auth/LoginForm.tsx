import { useState, useEffect } from 'react';
import { Button, Keyboard, Text, TextInput, TouchableWithoutFeedback, View, SafeAreaView, Pressable } from 'react-native';

export const LoginForm = ({ onSubmit }: {
  onSubmit: (id: string, password: string) => void;
}) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  function handleSubmit() {
    onSubmit(id, password);
    setId('');
    setPassword('');
    setIsDisabled(true);
  }

  useEffect(() => {
    if (password !== '' && id !== '') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [id, password]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView>
      <View style={{
        paddingHorizontal: 32,
        gap: 16,
      }}>
        <View style={{ gap: 6 }}>
          <Text>id</Text>
          <TextInput
          style={{
            borderRadius: 4,
            padding: 12,
            paddingVertical: 16,
            backgroundColor: '#999',
            color: 'white'
          }}
            onChange={(e) => setId(e.nativeEvent.text)}
            value={id}
          />
        </View>
        <View style={{ gap: 6 }}>
          <Text>Password</Text>
          <TextInput
          style={{
            borderRadius: 4,
            padding: 12,
            paddingVertical: 16,
            backgroundColor: '#999',
            color: 'white',
          }}
            secureTextEntry
            onChange={(e) => setPassword(e.nativeEvent.text)}
            value={password}
          />
        </View>
        <Pressable style={{
          backgroundColor: '#6466E5',
          padding: 16,
          alignItems: 'center',
          borderRadius: 5,
        }} onPress={handleSubmit}>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default LoginForm;
