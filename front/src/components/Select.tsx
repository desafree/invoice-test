import React from "react";
import classes from "./Select.module.css";

const Select = () => {
  return (
    <div className={classes.container}>
      <label htmlFor="terms       ">Payment Terms</label>
      <select name="terms" id="terms">
        <option value={30}>30</option>
        <option value={7}>7</option>
        <option value={1}>1</option>
      </select>
    </div>
  );
};

export default Select;
