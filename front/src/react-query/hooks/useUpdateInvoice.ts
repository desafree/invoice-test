import { useMutation, useQueryClient } from "react-query";
import queryKeyFactory from "../query-key-factory";
import InvoiceType from "../../typescript/interfaces/Invoice";
import invoicesKeys from "../query-key-factory";

async function updateInvoice(obj: { id: string; invoice: InvoiceType }) {
  const res = await fetch(`http://localhost:3001/invoices/${obj.id}`, {
    method: "PUT",
    body: JSON.stringify(obj.invoice),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  const data = await res.json();
  return data;
}

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
