import React, { FC } from "react";
import classes from "./FormOptions.module.css";
import { UseFormReset, FieldValues } from "react-hook-form";

interface Props {
  reset: UseFormReset<FieldValues>;
}

const FormOptions: FC<Props> = ({ reset }) => {
  return (
    <div className={classes.container}>
      <button
        onClick={() => {
          reset({
            status: "pending",
            description: "",
            terms: 7,
            "invoice-date": new Date(),
            "country-to": "",
            "postcode-to": "",
            "city-to": "",
            "street-to": "",
            email: "",
            name: "",
            "country-from": "",
            "postcode-from": "",
            "city-from": "",
            "street-from": "",
            data: "",
          });
        }}
        type="button"
      >
        Discard
      </button>
      <button>Save & Send</button>
    </div>
  );
};

export default FormOptions;
