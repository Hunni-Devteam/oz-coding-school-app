import { SafeAreaView, StyleSheet, Alert, Button } from "react-native";
import LoginForm from "@features/auth/components/auth/LoginForm";
import { ThemedView } from "@shared/components/ui";

interface AppProps {}
interface AppState {
  name: string;
}

const SignInPage = () => {
  const onSubmitUsername = (id: string, password: string) => {
    Alert.alert(`you entered: ${id} and Password ${password}`);
  };

  return (
    <ThemedView>
      <LoginForm onSubmit={onSubmitUsername} />
    </ThemedView>
  );
};

export default SignInPage;
