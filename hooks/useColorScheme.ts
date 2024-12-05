import { useCustomTheme } from "./useCustomTheme";

// export { useColorScheme } from 'react-native';
export const useColorScheme = () => {
    const { theme } = useCustomTheme();

    return theme as 'light' | 'dark';
}