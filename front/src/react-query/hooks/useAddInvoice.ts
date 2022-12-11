import { useMutation, useQueryClient } from "react-query";
import queryKeyFactory from "../query-key-factory";
import InvoiceType from "../../typescript/interfaces/Invoice";

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
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeyFactory.lists());
    },
  });
};

export default useAddInvoice;
