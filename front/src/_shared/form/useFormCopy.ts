import { useForm, UseFormReturn, DefaultValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import { FieldValues } from "react-hook-form/dist/types";

/*definition type of FieldValue*/
/*type Record<K extends keyof any, T> = {
  [P in K]: T;
};
export type FieldValues = Record<string, any>;*/

/*definition type of DefaultValues*/
/*declare const $NestedValue: unique symbol;
export type NestedValue<TValue extends object = object> = {
  [$NestedValue]: never;
} & TValue;
export type BrowserNativeObject = Date | FileList | File;
export type DeepPartial<T> = T extends BrowserNativeObject | NestedValue
  ? T
  : {
      [K in keyof T]?: DeepPartial<T[K]>;
    };
export type DefaultValues<TFieldValues> = DeepPartial<TFieldValues>;*/

function useRegisteredForm<TFieldValues extends FieldValues = FieldValues>(
  schema: yup.ObjectSchema<any>,
  defaultValue?: DefaultValues<TFieldValues> | undefined
) {
  const methods = useForm({
    defaultValues: defaultValue,
    resolver: yupResolver(schema),
  });

  return {
    control: methods.control,
    register: methods.register,
    formState: methods.formState,
    handleSubmit: methods.handleSubmit,
    reset: methods.reset,
  };
}

export default useRegisteredForm;
