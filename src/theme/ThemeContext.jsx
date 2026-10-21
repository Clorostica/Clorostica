import React, { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "clorostica-theme";
const THEME_COLORS = { light: "#fbf9fc", dark: "#0f0c17" };

const ThemeContext = createContext(null);

// index.html already applied the saved (or system) theme before first paint
const initialTheme = () =>
  document.documentElement.classList.contains("dark") ? "dark" : "light";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", THEME_COLORS[theme]);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
