import React from "react";
import classes from "./InvoiceForm.module.css";
import FormData from "./FormData";
import ItemsList from "./ItemsList";

const InvoiceForm = () => {
  return (
    <div className={classes.container}>
      <form>
        <h3>New Invoice</h3>
        <FormData></FormData>
        <ItemsList></ItemsList>
      </form>
    </div>
  );
};

export default InvoiceForm;
