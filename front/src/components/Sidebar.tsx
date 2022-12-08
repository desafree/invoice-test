import React from "react";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <nav className={classes.container}>
      <span>
        <img src="/images/logo.svg" alt="logo" />
      </span>
      <button>
        <img src="/images/icon-moon.svg" alt="moon" />
      </button>
    </nav>
  );
};

export default Sidebar;
