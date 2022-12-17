import React, { FC } from "react";
import classes from "./Input.module.scss";
import { useFormContext } from "react-hook-form";

interface Props {
  name: string;
  type: "text" | "date";
  defaultData?: string;
}

const Input: FC<Props> = ({ name, type }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={classes.container}>
      <label htmlFor={name}>{name}</label>
      <input {...register(name)} type={type} />
      {errors[name] !== undefined && <p>{errors[name]?.message as string}</p>}
    </div>
  );
};

export default Input;
