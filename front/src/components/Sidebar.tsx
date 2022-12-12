import React, { useContext } from "react";
import classes from "./Sidebar.module.css";
import ThemeContext from "../context/themeContext";

const Sidebar = () => {
  const { changeTheme } = useContext(ThemeContext);

  const handleClick = () => {
    changeTheme();
  };

  return (
    <nav className={classes.container}>
      <span>
        <img src="/images/logo.svg" alt="logo" />
      </span>
      <button onClick={handleClick}>
        <img src="/images/icon-moon.svg" alt="moon" />
      </button>
    </nav>
  );
};

export default Sidebar;
