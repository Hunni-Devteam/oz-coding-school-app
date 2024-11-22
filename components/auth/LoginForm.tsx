<<<<<<< HEAD
import BaseStyles from '@/styles/base';
import { useState, useEffect } from 'react';
import { Button, Keyboard, Text, TextInput, TouchableWithoutFeedback, View, SafeAreaView, Pressable, StyleSheet } from 'react-native';
=======
import { useState, useEffect } from "react";
import {
  Button,
  Keyboard,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  SafeAreaView,
} from "react-native";
>>>>>>> c12cacb (🔀 Develop branch created)

export const LoginForm = ({
  onSubmit,
}: {
  onSubmit: (id: string, password: string) => void;
}) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  function handleSubmit() {
    onSubmit(id, password);
    setId("");
    setPassword("");
    setIsDisabled(true);
  }

  useEffect(() => {
    if (password !== "" && id !== "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [id, password]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
<<<<<<< HEAD
    <SafeAreaView>
      <View style={styles.root}>
        <View style={styles.formControl}>
          <Text>id</Text>
          <TextInput
          style={BaseStyles.textInput}
            onChange={(e) => setId(e.nativeEvent.text)}
            value={id}
          />
        </View>
        <View style={styles.formControl}>
          <Text>Password</Text>
          <TextInput
          style={BaseStyles.textInput}
=======
      <SafeAreaView>
        <View>
          <Text>id:</Text>
          <TextInput onChange={(e) => setId(e.nativeEvent.text)} value={id} />
        </View>
        <View>
          <Text>Password:</Text>
          <TextInput
>>>>>>> c12cacb (🔀 Develop branch created)
            secureTextEntry
            onChange={(e) => setPassword(e.nativeEvent.text)}
            value={password}
          />
        </View>
<<<<<<< HEAD
        <Pressable style={BaseStyles.button} onPress={handleSubmit}>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
=======
        <Button title="submit" disabled={isDisabled} onPress={handleSubmit} />
      </SafeAreaView>
>>>>>>> c12cacb (🔀 Develop branch created)
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 32,
    gap: 16,
  },
  formControl: { gap: 6 }
}); 

export default LoginForm;
