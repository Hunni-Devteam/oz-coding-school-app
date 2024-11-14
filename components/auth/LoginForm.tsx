import { useState, useEffect } from 'react';
import { Button, Keyboard, Text, TextInput, TouchableWithoutFeedback, View, SafeAreaView } from 'react-native';

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
      <View>
        <Text>id:</Text>
        <TextInput
          onChange={(e) => setId(e.nativeEvent.text)}
          value={id}
        />
      </View>
      <View>
        <Text>Password:</Text>
        <TextInput
          secureTextEntry
          onChange={(e) => setPassword(e.nativeEvent.text)}
          value={password}
        />
      </View>
      <Button title='submit' disabled={isDisabled} onPress={handleSubmit} />
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default LoginForm;
