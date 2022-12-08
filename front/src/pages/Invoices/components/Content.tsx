import React from "react";
import classes from "./Content.module.css";
import Options from "./Options";
import InvoicesList from "./InvoicesList";

const Content = () => {
  return (
    <main className={classes.container}>
      <Options></Options>
      <InvoicesList></InvoicesList>
    </main>
  );
};

export default Content;
