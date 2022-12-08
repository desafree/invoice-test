import React from "react";
import classes from "./InvoicesList.module.css";
import data from "../../../defaultdata";
import InvoicePreview from "./InvoicePreview";

const InvoicesList = () => {
  return (
    <ul className={classes.container}>
      {data.map((invoice) => {
        return <InvoicePreview></InvoicePreview>;
      })}
    </ul>
  );
};

export default InvoicesList;
