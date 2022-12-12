import { useMutation, useQueryClient } from "react-query";
import InvoiceType from "../../typescript/interfaces/Invoice";
import invoicesKeys from "../query-key-factory";

async function postInvoice(newInvoice: InvoiceType) {
  const res = await fetch("http://localhost:3001/invoices", {
    method: "POST",
    body: JSON.stringify(newInvoice),
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

const useAddInvoice = () => {
  const queryClient = useQueryClient();

  return useMutation(postInvoice, {
    onSuccess: (newInvoice) => {
      const data = queryClient.getQueryData(invoicesKeys.all);
      queryClient.setQueryData(invoicesKeys.all, () => {
        return [...(data as InvoiceType[]), newInvoice];
      });
    },
  });
};

export default useAddInvoice;
