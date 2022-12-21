import React from "react";
import createEmptyDataField from "../../utils/createEmptyDataField";
import { useFormContext } from "react-hook-form";
import { FormOptionsStyled } from "./FormOptions.styled";

const FormOptions = () => {
  const { reset } = useFormContext();
  return (
    <FormOptionsStyled>
      <button
        onClick={() => {
          reset(createEmptyDataField());
        }}
        type="button"
      >
        Discard
      </button>
      <button type="submit">Save & Send</button>
    </FormOptionsStyled>
  );
};

export default FormOptions;
