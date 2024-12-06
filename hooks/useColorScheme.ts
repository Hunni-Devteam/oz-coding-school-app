import { useCustomTheme } from "./useCustomTheme";

export const useColorScheme = () => {
  const { theme } = useCustomTheme();
  return theme as 'light' | 'dark';
};