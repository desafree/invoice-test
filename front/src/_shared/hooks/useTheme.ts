import { useContext } from "react";
import themeContext from "../styles/theme/context/themeContext";

function useTheme() {
  const { darkMode: theme } = useContext(themeContext);
  return theme ? "dark" : "";
}

export default useTheme;
