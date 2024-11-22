import BaseStyles from "@/styles/base";
import { useState, useEffect } from "react";
import {
  Button,
  Keyboard,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  SafeAreaView,
  Pressable,
  StyleSheet,
} from "react-native";

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
              secureTextEntry
              onChange={(e) => setPassword(e.nativeEvent.text)}
              value={password}
            />
          </View>
          <Button title="Submit" onPress={handleSubmit} disabled={isDisabled} />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 32,
    gap: 16,
  },
  formControl: { gap: 6 },
});

export default LoginForm;
