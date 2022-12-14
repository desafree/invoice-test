import { useMutation, useQueryClient } from "@tanstack/react-query";
import InvoiceType from "../../typescript/interfaces/Invoice";
import invoicesKeys from "../query-key-factory";
import postInvoice from "../../utils/api/postInvoice";

const useAddInvoice = () => {
  const queryClient = useQueryClient();

  return useMutation(postInvoice, {
    onSuccess: (newInvoice) => {
      queryClient.setQueryData<InvoiceType[]>(
        invoicesKeys.all,
        (data: InvoiceType[] = []) => {
          return [...data, newInvoice];
        }
      );
    },
  });
};

export default useAddInvoice;
