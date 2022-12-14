import React, { FC } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import FormData from "../typescript/interfaces/FormData";
import classes from "./Select.module.scss";
import { FieldPath, FieldErrorsImpl } from "react-hook-form";
import FieldName from "../typescript/types/FieldNames";

interface Props {
  name: FieldName;
  values: (string | number)[];
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  defaultData?: string;
}

const Select: FC<Props> = ({ name, register, errors, values, defaultData }) => {
  return (
    <div className={classes.container}>
      <label htmlFor={name}>{name}</label>
      <select id={name} {...register(name)} defaultValue={defaultData}>
        {values.map((value) => {
          return (
            <option value={value} key={value}>
              {value}
            </option>
          );
        })}
      </select>
      {errors[name] && <p className={classes.error}>{errors[name]!.message}</p>}
    </div>
  );
};

export default Select;
