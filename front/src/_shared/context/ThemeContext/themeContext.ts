import { createContext } from "react";

const themeContext = createContext(
  {} as {
    darkMode: boolean;
    changeTheme: () => void;
  }
);

export default themeContext;
