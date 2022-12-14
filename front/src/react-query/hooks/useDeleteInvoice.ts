import { useMutation, useQueryClient } from "@tanstack/react-query";
import queryKeyFactory from "../query-key-factory";
import deleteInvoice from "../../utils/api/deleteInvoice";

const useDeleteInvoice = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation(deleteInvoice, {
    onSuccess: () => {
      queryClient.removeQueries(queryKeyFactory.detail(id as string));
      queryClient.invalidateQueries(queryKeyFactory.all);
    },
  });
};

export default useDeleteInvoice;
