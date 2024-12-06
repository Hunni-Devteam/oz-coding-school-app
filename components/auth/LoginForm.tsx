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
import { useBaseStyles } from "@/hooks/useBaseStyles";
import { useCustomTheme } from "@/hooks/useCustomTheme";
import { Colors } from "@/constants/Colors";

const isWeb = Platform.OS === "web";

export const LoginForm = ({
  onSubmit,
}: {
  onSubmit: (id: string, password: string) => void;
}) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const baseStyles = useBaseStyles();
  const { theme } = useCustomTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    if (password !== "" && id !== "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [id, password]);

  const handleSubmit = () => {
    onSubmit(id, password);
    setId("");
    setPassword("");
    setIsDisabled(true);
  };

  return (
    <TouchableWithoutFeedback onPress={isWeb ? undefined : Keyboard.dismiss}>
      <ScrollView style={baseStyles.scrollView}>
        <ThemedView style={styles.root}>
          <ThemedView style={styles.formControl}>
            <ThemedText>id</ThemedText>
            <TextInput
              style={[
                baseStyles.textInput,
                { color: isDark ? Colors.dark.text : Colors.light.text }
              ]}
              value={id}
              onChangeText={setId}
              placeholder="Enter your id"
              placeholderTextColor={isDark ? "#666" : "#999"}
              autoCapitalize="none"
            />
          </ThemedView>

          <ThemedView style={styles.formControl}>
            <ThemedText>Password</ThemedText>
            <TextInput
              style={[
                baseStyles.textInput,
                { color: isDark ? Colors.dark.text : Colors.light.text }
              ]}
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
              placeholderTextColor={isDark ? "#666" : "#999"}
              secureTextEntry
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
