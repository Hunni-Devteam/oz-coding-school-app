<<<<<<< HEAD
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
=======
import BaseStyles from '@/styles/base';
import { useState, useEffect } from 'react';
import { Button, Keyboard, Text, TextInput, TouchableWithoutFeedback, View, SafeAreaView, Pressable, StyleSheet } from 'react-native';
>>>>>>> e19cd2bf1bbaaf7a5690b7ae763d55450ac193c1

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
        <View>
          <Text>id:</Text>
          <TextInput onChange={(e) => setId(e.nativeEvent.text)} value={id} />
        </View>
        <View>
          <Text>Password:</Text>
          <TextInput
=======
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
>>>>>>> e19cd2bf1bbaaf7a5690b7ae763d55450ac193c1
            secureTextEntry
            onChange={(e) => setPassword(e.nativeEvent.text)}
            value={password}
          />
        </View>
<<<<<<< HEAD
        <Button title="submit" disabled={isDisabled} onPress={handleSubmit} />
      </SafeAreaView>
=======
        <Pressable style={BaseStyles.button} onPress={handleSubmit}>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
>>>>>>> e19cd2bf1bbaaf7a5690b7ae763d55450ac193c1
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
