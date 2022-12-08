import React from "react";
import classes from "./Back.module.css";

const Back = () => {
  return (
    <div className={classes.container}>
      <span>
        <img src="/images/icon-arrow-left.svg" alt="arrow left" />
      </span>
      Go back
    </div>
  );
};

export default Back;
