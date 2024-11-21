import { Alert, Button, View } from "react-native";
import LoginForm from '@/components/auth/LoginForm';

interface AppProps {}
interface AppState {
    name: string;
}

const SignInPage = () => {
    const onSubmitUsername = (id: string, password: string) => {
        Alert.alert(`you entered: ${id} and Password ${password}`);
    }
        

    return (
        <View>
            <LoginForm onSubmit={onSubmitUsername} />
        </View>
    )
}

export default SignInPage