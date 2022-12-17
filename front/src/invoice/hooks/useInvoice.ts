import { useQuery, useQueryClient } from "@tanstack/react-query";
import invoicesKeys from "../request-management/query-key/query-key-invoice-factory";
import Invoice from "../types/interfaces/Invoice";
import queryKeyFactory from "../request-management/query-key/query-key-invoice-factory";
import getInvoice from "../apis/getInvoice";

const useInvoices = (id: string) => {
  const queryClient = useQueryClient();

  return useQuery(
    invoicesKeys.detail(id),
    () => {
      return getInvoice(id);
    },
    {
      initialData: () => {
        const invoices: Invoice[] =
          queryClient.getQueryData(queryKeyFactory.all) || [];
        return invoices.find((invoice) => {
          if (invoice.id === id) {
            return true;
          }
        });
      },
    }
  );
};

export default useInvoices;
