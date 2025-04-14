
import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
type Language = "en" | "fr";

interface ThemeContextType {
  theme: Theme;
  language: Language;
  setTheme: (theme: Theme) => void;
  setLanguage: (language: Language) => void;
  toggleTheme: () => void;
  toggleLanguage: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check for stored preference or use system preference
    const storedTheme = localStorage.getItem("theme") as Theme;
    if (storedTheme) return storedTheme;
    
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  
  const [language, setLanguage] = useState<Language>(() => {
    // Check for stored preference or use browser preference
    const storedLanguage = localStorage.getItem("language") as Language;
    if (storedLanguage) return storedLanguage;
    
    const browserLang = navigator.language.substring(0, 2);
    return browserLang === "fr" ? "fr" : "en";
  });

  useEffect(() => {
    // Update localStorage and body class when theme changes
    localStorage.setItem("theme", theme);
    
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    // Update localStorage when language changes
    localStorage.setItem("language", language);
  }, [language]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  };

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === "en" ? "fr" : "en");
  };

  const value = {
    theme,
    language,
    setTheme,
    setLanguage,
    toggleTheme,
    toggleLanguage
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
