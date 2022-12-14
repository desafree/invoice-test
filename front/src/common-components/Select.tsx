import React, { FC } from "react";
import { UseFormRegister } from "react-hook-form";
import FormData from "../typescript/interfaces/FormData";
import classes from "./Select.module.scss";
import { FieldPath, FieldErrorsImpl } from "react-hook-form";

interface Props {
  name: FieldPath<FormData>;
  values: (string | number)[];
  register: UseFormRegister<FormData>;
  errors: Partial<FieldErrorsImpl<{ [p: string]: any }>>;
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
      {errors["terms"]?.message && (
        <p className={classes.error}>{errors[name]!.message as string}</p>
      )}
    </div>
  );
};

export default Select;
