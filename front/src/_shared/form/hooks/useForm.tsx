import * as yup from "yup";
import {
  useForm as useFormHookForm,
  UseFormReturn as UseFormReturnHookForm,
} from "react-hook-form";
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

export type UseFormReturn<T extends Record<string, any>> =
  UseFormReturnHookForm<T>;

function useForm<T extends Record<string, any>>({
  initialValues,
  validationSchema,
}: UseFormProps<T>) {
  return useFormHookForm<T>({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });
}

export default useForm;
