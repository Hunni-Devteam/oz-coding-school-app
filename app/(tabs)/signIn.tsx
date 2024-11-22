import { Alert, Button, View } from "react-native";
import LoginForm from "@/components/auth/LoginForm";
import FriendLogo from "@/assets/images/friend-svgrepo-com.svg";

interface AppProps {}
interface AppState {
  name: string;
}

const SignInPage = () => {
  const onSubmitUsername = (id: string, password: string) => {
    Alert.alert(`you entered: ${id} and Password ${password}`);
  };

  return (
    <View>
      <LoginForm onSubmit={onSubmitUsername} />
      <FriendLogo width={200} height={200} />
    </View>
  );
};

export default SignInPage;
