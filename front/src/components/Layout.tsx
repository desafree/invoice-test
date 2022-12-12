import React, { FC, ReactNode, useContext } from "react";
import Sidebar from "./Sidebar";
import classes from "./Layout.module.css";
import { createPortal } from "react-dom";
import themeContext from "../context/themeContext";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const { darkMode } = useContext(themeContext);

  return (
    <div className={`${classes.container} ${classes[darkMode ? "dark" : ""]}`}>
      {createPortal(<Sidebar></Sidebar>, document.getElementById("root")!)}
      {children}
    </div>
  );
};

export default Layout;
