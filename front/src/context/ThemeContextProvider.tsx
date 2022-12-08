import React, { FC, ReactNode, useState } from "react";
import themeContext from "./themeContext";

interface Props {
  children: ReactNode;
}

const ThemeContextProvider: FC<Props> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const changeTheme = () => {
    setDarkMode((prevState) => !prevState);
  };

  return (
    <themeContext.Provider value={{ darkMode, changeTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeContextProvider;
