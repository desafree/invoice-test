import { useContext } from "react";
import themeContext from "../context/ThemeContext/themeContext";

function useTheme() {
  const { darkMode: theme } = useContext(themeContext);
  return theme ? "dark" : "";
}

export default useTheme;