import { useMutation, useQueryClient } from "@tanstack/react-query";
import InvoiceType from "../types/interfaces/Invoice";
import invoicesKeys from "../request-management/query-key/query-key-invoice-factory";
import postInvoice from "../apis/postInvoice";

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
