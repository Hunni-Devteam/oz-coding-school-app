import { createContext, useContext, useState, useEffect } from "react";
import { useColorScheme as useNativeColorScheme } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

type ThemeType = 'light' | 'dark';

const CustomThemeContext = createContext<{
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}>({
  theme: "dark",
  setTheme: () => {},
});

export const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const systemColorScheme = useNativeColorScheme();
  const [theme, setThemeState] = useState<ThemeType>(systemColorScheme || 'light'); // Default to 'light' if no system scheme

  useEffect(() => {
    // Load saved theme on mount
    AsyncStorage.getItem("theme").then((savedTheme) => {
      if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        setThemeState(savedTheme);
      }
    });
  }, []);

  // Update theme when system color scheme changes
  useEffect(() => {
    if (systemColorScheme) {
      setThemeState(systemColorScheme);
    }
  }, [systemColorScheme]);

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
    AsyncStorage.setItem("theme", newTheme);
  };

  return (
    <CustomThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </CustomThemeContext.Provider>
  );
};

export const useCustomTheme = () => {
  const context = useContext(CustomThemeContext);
  if (!context) {
    throw new Error('useCustomTheme must be used within a CustomThemeProvider');
  }
  return context;
};