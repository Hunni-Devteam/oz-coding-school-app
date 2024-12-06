import { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CustomThemeContext = createContext<{
  theme: string;
  setTheme: (theme: string) => void;
}>({
  theme: "dark",
  setTheme: (theme: string) => {},
});

export const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState("dark");

  useEffect(() => {
    // Load saved theme on mount
    AsyncStorage.getItem("theme").then((savedTheme) => {
      if (savedTheme) {
        setThemeState(savedTheme);
      }
    });
  }, []);

  const setTheme = (newTheme: string) => {
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
  const { theme, setTheme } = useContext(CustomThemeContext);
  return { theme, setTheme };
};