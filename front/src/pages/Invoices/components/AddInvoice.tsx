import React from "react";
import classes from "./AddInvoice.module.css";

const AddInvoice = () => {
  return (
    <button className={classes.container}>
      <span>
        <img src="/images/icon-plus.svg" alt="plus" />
      </span>
      New Invoice
    </button>
  );
};

export default AddInvoice;
