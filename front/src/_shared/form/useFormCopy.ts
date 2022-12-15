import { useForm } from "react-hook-form";
import { Resolver } from "react-hook-form/dist/types/resolvers";

function useFormDefined(
  defaultValues:
    | {
        append?: {} | undefined;
        delete?: {} | undefined;
        get?: {} | undefined;
        getAll?: {} | undefined;
        has?: {} | undefined;
        set?: {} | undefined;
        forEach?: {} | undefined;
        entries?: {} | undefined;
        keys?: {} | undefined;
        values?: {} | undefined;
        [Symbol.iterator]?: {} | undefined;
      }
    | undefined,
  resolver: Resolver<FormData, any> | undefined
) {
  return useForm<FormData>({
    defaultValues: defaultValues,
    resolver: resolver,
  });
}

export default useFormDefined;
