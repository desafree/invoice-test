import React, { FC } from "react";
import classes from "./Select.module.scss";
import FieldName from "../../../invoice/types/types/FieldNames";
import { useFormContext } from "react-hook-form";

interface Props {
  name: FieldName;
  values: (string | number)[];
}

const Select: FC<Props> = ({ name, values }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={classes.container}>
      <label htmlFor={name}>{name}</label>
      <select id={name} {...register(name)}>
        {values.map((value) => {
          return (
            <option value={value} key={value}>
              {value}
            </option>
          );
        })}
      </select>
      {errors[name] !== undefined && <p>{errors[name]?.message as string}</p>}
    </div>
  );
};

export default Select;
