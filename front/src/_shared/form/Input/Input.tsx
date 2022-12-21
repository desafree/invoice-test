import React, { FC } from "react";
import { InputStyled } from "./Input.styled";
import { useController, useFormContext } from "react-hook-form";

interface Props {
  name: string;
  type: "text" | "date";
}

const Input: FC<Props> = ({ name, type }) => {
  const {
    field,
    fieldState: { error, invalid },
  } = useController({
    name,
  });

  return (
    <InputStyled>
      <label htmlFor={name}>{name}</label>
      <input {...field} type={type} />
      {invalid && <p>{error?.message}</p>}
    </InputStyled>
  );
};

export default Input;
