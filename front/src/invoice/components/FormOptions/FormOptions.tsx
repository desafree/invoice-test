import React from "react";
import classes from "./FormOptions.module.scss";
import createEmptyDataField from "../../utils/createEmptyDataField";
import { useFormContext } from "react-hook-form";

const FormOptions = () => {
  const { reset } = useFormContext();
  return (
    <div className={classes.container}>
      <button
        onClick={() => {
          reset(createEmptyDataField());
        }}
        type="button"
      >
        Discard
      </button>
      <button type="submit">Save & Send</button>
    </div>
  );
};

export default FormOptions;
