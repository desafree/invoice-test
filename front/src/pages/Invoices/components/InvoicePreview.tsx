import React from "react";
import classes from "./InvoicePreview.module.css";
import StatusButton from "./StatusButton";

const InvoicePreview = () => {
  return (
    <li className={classes.container}>
      <h4>
        <span>#</span>RT3080
      </h4>
      <h5>Due 19 Aug 2021</h5>
      <h5>Jensen Huang</h5>
      <h3>£1,800.90</h3>
      <StatusButton></StatusButton>
      <button>
        <img src="/images/icon-arrow-right.svg" alt="arrow right" />
      </button>
    </li>
  );
};

export default InvoicePreview;
