import React from "react";
import classes from "./Input.module.css";

const Input = () => {
  return (
    <div className={classes.container}>
      <label htmlFor="street-from">Street Address</label>
      <input type="text" />
    </div>
  );
};

export default Input;
