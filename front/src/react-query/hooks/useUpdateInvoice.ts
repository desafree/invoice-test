import { useMutation, useQueryClient } from "react-query";
import queryKeyFactory from "../query-key-factory";
import InvoiceType from "../../typescript/interfaces/Invoice";

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
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeyFactory.all);
    },
  });
};

export default useUpdateInvoice;
