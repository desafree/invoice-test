import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import React from "react";
import { NestedValue } from "react-hook-form/dist/types/form";
import { BrowserNativeObject } from "react-hook-form/dist/types/utils";

export type DeepPartial<T> = T extends BrowserNativeObject | NestedValue
  ? T
  : {
      [K in keyof T]?: DeepPartial<T[K]>;
    };

type UseFormProps<T extends Record<string, any>> = {
  initialValues: DeepPartial<T> | undefined;
  validationSchema: yup.SchemaOf<T>;
};

function useFormHook<T extends Record<string, any>>({
  initialValues,
  validationSchema,
}: UseFormProps<T>) {
  return useForm({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });
}

export default useFormHook;
