import { FieldArrayPath, FieldValues } from "react-hook-form/dist/types";
import { useFieldArray } from "react-hook-form";
import {
  RegisterOptions,
  Validate,
} from "react-hook-form/dist/types/validator";
import { FieldArray } from "react-hook-form/dist/types/fieldArray";

function useFieldArrayCopy<
  TFieldValues extends FieldValues = FieldValues,
  TFieldArrayName extends FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>
>(
  name: TFieldArrayName,
  rules?: {
    validate?:
      | Validate<FieldArray<TFieldValues, TFieldArrayName>[]>
      | Record<string, Validate<FieldArray<TFieldValues, TFieldArrayName>[]>>;
  } & Pick<
    RegisterOptions<TFieldValues>,
    "maxLength" | "minLength" | "required"
  >
) {
  return useFieldArray({
    name: name,
    rules: rules,
  });
}

export default useFieldArrayCopy;
