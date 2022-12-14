import { useQuery, useQueryClient } from "@tanstack/react-query";
import invoicesKeys from "../query-key-factory";
import Invoice from "../../typescript/interfaces/Invoice";
import queryKeyFactory from "../query-key-factory";
import getInvoice from "../../utils/api/getInvoice";

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
