import React, { FC, ReactNode, useContext } from "react";
import Sidebar from "./Sidebar/Sidebar";
import classes from "./Layout.module.scss";
import themeContext from "../context/themeContext";
import useTheme from "../hooks/useTheme";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const theme = useTheme();

  return (
    <div className={`${classes.container} ${classes[theme]}`}>
      <Sidebar></Sidebar>
      {children}
    </div>
  );
};

export default Layout;
