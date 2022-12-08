import React from "react";
import classes from "./Options.module.css";
import Filter from "./Filter";
import AddInvoice from "./AddInvoice";

const Options = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h2>Invoices</h2>
        <p>There are 7 total invoices</p>
      </div>
      <Filter></Filter>
      <AddInvoice></AddInvoice>
    </div>
  );
};

export default Options;
