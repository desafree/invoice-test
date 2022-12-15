import { useMutation, useQueryClient } from "@tanstack/react-query";
import updateInvoice from "../apis/updateInvoice";
import InvoiceType from "../types/interfaces/Invoice";
import invoicesKeys from "../../_shared/apis/react-query/query-key-factory";

const useUpdateInvoice = () => {
  const queryClient = useQueryClient();

  return useMutation(updateInvoice, {
    onSuccess: (updatedInvoice) => {
      const invoicesData: InvoiceType[] =
        queryClient.getQueryData(invoicesKeys.all) || [];

      queryClient.setQueryData(invoicesKeys.all, () => {
        return invoicesData.map((invoice) => {
          if (invoice.id === updatedInvoice.id) {
            return updatedInvoice;
          }
          return invoice;
        });
      });
      queryClient.setQueryData(invoicesKeys.detail(updatedInvoice.id), () => {
        return updatedInvoice;
      });
    },
  });
};

export default useUpdateInvoice;
