import React, { FC, ReactNode, useContext } from "react";
import Sidebar from "./Sidebar/Sidebar";
import classes from "./Layout.module.scss";
import themeContext from "../context/themeContext";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const { darkMode } = useContext(themeContext);

  return (
    <div className={`${classes.container} ${classes[darkMode ? "dark" : ""]}`}>
      <Sidebar></Sidebar>
      {children}
    </div>
  );
};

export default Layout;
