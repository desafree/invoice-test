import React, { FC } from "react";
import classes from "./FormOptions.module.scss";
import { UseFormReset } from "react-hook-form";
import FormData from "../../typescript/interfaces/FormData";
import createEmptyDataField from "../../utils/createEmptyDataField";

interface Props {
  reset: UseFormReset<FormData>;
}

const FormOptions: FC<Props> = ({ reset }) => {
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
