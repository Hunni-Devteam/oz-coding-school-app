import { createContext, useContext, useState } from "react";

const CustomThemeContext = createContext<{
  theme: string;
  setTheme: (theme: string) => void;
}>({
  theme: "",
  setTheme: (theme: string) => {},
});

export const useCustomTheme = () => {
  const { theme, setTheme } = useContext(CustomThemeContext);

  return { theme, setTheme };
}

export const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("dark");

  return (
    <CustomThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </CustomThemeContext.Provider>
  );
}