import { useState, useEffect } from "react";
import {
  Button,
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useBaseStyles } from "@/hooks/useBaseStyles";


const isWeb = Platform.OS === "web";

export const LoginForm = ({
  onSubmit,
}: {
  onSubmit: (id: string, password: string) => void;
}) => {
  const baseStyles = useBaseStyles();
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
    <TouchableWithoutFeedback onPress={isWeb ? undefined : Keyboard.dismiss}>
      <ScrollView style={baseStyles.scrollView}>
        <ThemedView style={styles.root}>
          <ThemedView style={styles.formControl}>
            <ThemedText>id</ThemedText>
            <TextInput
              style={baseStyles.textInput}
              onChange={(e) => setId(e.nativeEvent.text)}
              value={id}
            />
          </ThemedView>
          <ThemedView style={styles.formControl}>
            <ThemedText>Password</ThemedText>
            <TextInput
              style={baseStyles.textInput}
              secureTextEntry
              onChange={(e) => setPassword(e.nativeEvent.text)}
              value={password}
            />
          </ThemedView>
          <Button title="Submit" onPress={handleSubmit} disabled={isDisabled} />
        </ThemedView>
      </ScrollView>
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
