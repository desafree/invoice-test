import React, { useContext } from "react";
import classes from "./Sidebar.module.scss";
import ThemeContext from "../../context/themeContext";
import moonIcon from "./icon-moon.svg";
import logo from "./logo.svg";

const Sidebar = () => {
  const { changeTheme } = useContext(ThemeContext);

  const handleClick = () => {
    changeTheme();
  };

  return (
    <nav className={classes.container}>
      <span>
        <img src={logo} alt="logo" />
      </span>
      <button onClick={handleClick}>
        <img src={moonIcon} alt="moon" />
      </button>
    </nav>
  );
};

export default Sidebar;
