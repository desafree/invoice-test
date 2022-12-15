import React, { FC } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import FormData from "../../../invoice/types/interfaces/FormData";
import classes from "./Input.module.scss";
import FieldName from "../../../invoice/types/types/FieldNames";

interface Props {
  name: FieldName;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  type: "text" | "date";
  defaultData?: string;
}

const Input: FC<Props> = ({ name, register, errors, type, defaultData }) => {
  return (
    <div className={classes.container}>
      <label htmlFor={name}>{name}</label>
      <input {...register(name)} type={type} defaultValue={defaultData} />
      {errors[name] && <p className={classes.error}>{errors[name]!.message}</p>}
    </div>
  );
};

export default Input;
