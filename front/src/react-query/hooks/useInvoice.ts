import { useQuery, useQueryClient } from "react-query";
import invoicesKeys from "../query-key-factory";
import Invoice from "../../typescript/interfaces/Invoice";
import queryKeyFactory from "../query-key-factory";

async function getInvoice(id: string) {
  const res = await fetch(`http://localhost:3001/invoices/${id}`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const data: Invoice = await res.json();
  return data;
}

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
