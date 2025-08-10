import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProviderCustom = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme(prev => prev === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeCustom = () => useContext(ThemeContext);
