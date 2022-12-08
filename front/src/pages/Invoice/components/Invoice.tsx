import React from "react";
import classes from "./Invoice.module.css";
import InvoiceData from "./InvoiceData";
import ItemsList from "./ItemsList";
import Total from "./Total";

const Invoice = () => {
  return (
    <div className={classes.container}>
      <InvoiceData></InvoiceData>
      <ItemsList></ItemsList>
      <Total></Total>
    </div>
  );
};

export default Invoice;
