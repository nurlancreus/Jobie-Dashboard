import { ReactNode, createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "@/hooks/useLocalStorageState";

type ThemeContextType = {
  isDarkModeOn: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

type ThemeProviderProps = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDarkModeOn, setIsDarkModeOn] = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
    "isDarkModeOn",
  );

  useEffect(() => {
    const rootEl = document.documentElement;

    if (isDarkModeOn) rootEl.className = "dark";
    if (!isDarkModeOn) rootEl.className = "light";
  }, [isDarkModeOn]);

  const toggleTheme = () => {
    setIsDarkModeOn((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkModeOn, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeContext = () => {
  const contextValue = useContext(ThemeContext);

  if (contextValue == null)
    throw new Error("Cannot use outside of ThemeProvider");

  return contextValue;
};
