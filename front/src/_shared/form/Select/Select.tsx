import React, { FC } from "react";
import { SelectStyled } from "./Select.styled";
import FieldName from "../../../invoice/types/types/FieldNames";
import { useController } from "react-hook-form";

interface Props {
  name: FieldName;
  values: (string | number)[];
}

const Select: FC<Props> = ({ name, values }) => {
  const {
    field,
    fieldState: { error, invalid },
  } = useController({
    name,
  });

  return (
    <SelectStyled>
      <label htmlFor={name}>{name}</label>
      <select id={name} {...field}>
        {values.map((value) => {
          return (
            <option value={value} key={value}>
              {value}
            </option>
          );
        })}
      </select>
      {invalid && <p>{error?.message}</p>}
    </SelectStyled>
  );
};

export default Select;
