import { FieldPath, FieldValues } from "react-hook-form/dist/types";
import { useWatch } from "react-hook-form";

function useWatchCopy<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(name: TFieldName) {
  return useWatch({ name });
}

export default useWatchCopy;
