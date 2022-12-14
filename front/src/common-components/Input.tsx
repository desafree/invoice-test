import React, { FC } from "react";
import { UseFormRegister } from "react-hook-form";
import FormData from "../typescript/interfaces/FormData";
import classes from "./Input.module.scss";
import { FieldPath, FieldErrorsImpl } from "react-hook-form";

interface Props {
  name: FieldPath<FormData>;
  register: UseFormRegister<FormData>;
  errors: Partial<FieldErrorsImpl<{ [p: string]: any }>>;
  type: "text" | "date";
}

const Input: FC<Props> = ({ name, register, errors, type }) => {
  return (
    <div className={classes.container}>
      <label htmlFor={name}>{name}</label>
      <input {...register(name)} type={type} />
      {errors[name]?.message && (
        <p className={classes.error}>{errors[name]!.message as string}</p>
      )}
    </div>
  );
};

export default Input;
