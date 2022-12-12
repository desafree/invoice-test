import React, { useContext } from "react";
import classes from "./Back.module.css";
import { useNavigate } from "react-router-dom";
import themeContext from "../../../context/themeContext";

const Back = () => {
  const navigate = useNavigate();
  const { darkMode } = useContext(themeContext);
  const handleClick = () => {
    navigate("/");
  };

  return (
    <button
      className={`${classes.container} ${classes[darkMode ? "dark" : ""]}`}
      onClick={handleClick}
    >
      <span>
        <img src="/images/icon-arrow-left.svg" alt="arrow left" />
      </span>
      Go back
    </button>
  );
};

export default Back;
