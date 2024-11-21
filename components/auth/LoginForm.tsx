import { useState, useEffect } from 'react';
import { Button, Keyboard, Text, TextInput, TouchableWithoutFeedback, View, SafeAreaView, Pressable, StyleSheet } from 'react-native';

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
          style={styles.styledInput}
            onChange={(e) => setId(e.nativeEvent.text)}
            value={id}
          />
        </View>
        <View style={{ gap: 6 }}>
          <Text>Password</Text>
          <TextInput
          style={styles.styledInput}
            secureTextEntry
            onChange={(e) => setPassword(e.nativeEvent.text)}
            value={password}
          />
        </View>
        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  styledInput: {
    borderRadius: 4,
    padding: 12,
    paddingVertical: 16,
    backgroundColor: '#999',
    color: 'white',
  },
  button: {
    backgroundColor: '#6466E5',
    padding: 16,
    alignItems: 'center',
    borderRadius: 5,
  }
}); 

export default LoginForm;
