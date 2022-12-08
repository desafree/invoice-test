import React from "react";
import classes from "./Options.module.css";
import StatusButton from "../../Invoices/components/StatusButton";

const Options = () => {
  return (
    <div className={classes.container}>
      <h5>Status</h5>
      <StatusButton></StatusButton>
      <button>Edit</button>
      <button>Delete</button>
      <button>Mark as Paid</button>
    </div>
  );
};

export default Options;
