import { SunIcon, MoonIcon } from "@/assets/icons";
import { useThemeContext } from "@/contexts/ThemeProvider";

export default function ToggleThemeBtn() {
  const { isDarkModeOn, toggleTheme } = useThemeContext();
  return (
    <button
      className="h-fit w-fit rounded-full border-none outline-transparent"
      onClick={toggleTheme}
    >
      {isDarkModeOn ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
