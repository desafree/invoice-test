import React from "react";
import classes from "./Filter.module.css";

const Filter = () => {
  return (
    <select name="status" id="status" className={classes.container}>
      <option value="default" selected={true}>
        Filter by status
      </option>
      <option value="paid">Paid</option>
      <option value="pending">Pending</option>
      <option value="draft">Draft</option>
    </select>
  );
};

export default Filter;
