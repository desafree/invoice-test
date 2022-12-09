import React from "react";
import classes from "./FormOptions.module.css";

const FormOptions = () => {
  return (
    <div className={classes.container}>
      <button>Discard</button>
      <button>Save & Send</button>
    </div>
  );
};

export default FormOptions;
