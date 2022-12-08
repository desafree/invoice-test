import React, { FC, ReactNode } from "react";
import Sidebar from "./Sidebar";
import classes from "./Layout.module.css";
import { createPortal } from "react-dom";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={classes.container}>
      {createPortal(<Sidebar></Sidebar>, document.getElementById("root")!)}
      {children}
    </div>
  );
};

export default Layout;
