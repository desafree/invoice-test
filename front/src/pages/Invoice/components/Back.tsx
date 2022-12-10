import React from "react";
import classes from "./Back.module.css";
import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <button className={classes.container} onClick={handleClick}>
      <span>
        <img src="/images/icon-arrow-left.svg" alt="arrow left" />
      </span>
      Go back
    </button>
  );
};

export default Back;
