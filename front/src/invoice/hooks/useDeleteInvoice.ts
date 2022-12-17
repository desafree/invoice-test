import { useMutation, useQueryClient } from "@tanstack/react-query";
import deleteInvoice from "../apis/deleteInvoice";
import InvoiceType from "../types/interfaces/Invoice";
import invoicesKeys from "../request-management/query-key/query-key-invoice-factory";

const useDeleteInvoice = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteInvoice, {
    onSuccess: (deletedResponse) => {
      const invoicesData: InvoiceType[] =
        queryClient.getQueryData(invoicesKeys.all) || [];

      queryClient.setQueryData(invoicesKeys.all, () => {
        return invoicesData.filter((invoice) => {
          if (invoice.id !== deletedResponse.id) {
            return invoice;
          }
        });
      });
    },
  });
};

export default useDeleteInvoice;
