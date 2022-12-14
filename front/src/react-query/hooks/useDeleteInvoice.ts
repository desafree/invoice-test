import { useMutation, useQueryClient } from "@tanstack/react-query";
import deleteInvoice from "../../utils/api/deleteInvoice";
import InvoiceType from "../../typescript/interfaces/Invoice";
import invoicesKeys from "../query-key-factory";

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
