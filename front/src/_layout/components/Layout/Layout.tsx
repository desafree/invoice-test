import React, { FC, ReactNode } from "react";
import Sidebar from "../../../_shared/components/Sidebar/Sidebar";
import classes from "./Layout.module.scss";
import useTheme from "../../../_shared/hooks/useTheme";

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
