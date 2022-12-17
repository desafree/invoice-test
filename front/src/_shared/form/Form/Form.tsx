import React from "react";
import useFormHook from "../hooks/useFormHook";
import { FormProvider } from "react-hook-form";

type FormProps = {
  children: React.ReactNode;
  onSubmit: any;
  formContextValue: ReturnType<typeof useFormHook>;
};

const Form = React.forwardRef<HTMLFormElement, FormProps>((props, ref) => {
  return (
    <FormProvider {...props.formContextValue}>
      <form
        onSubmit={props.formContextValue.handleSubmit(props.onSubmit)}
        ref={ref}
      >
        {props.children}
      </form>
    </FormProvider>
  );
});

export default Form;
