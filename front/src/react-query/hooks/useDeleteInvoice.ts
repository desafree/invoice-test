import { useMutation, useQueryClient } from "react-query";
import queryKeyFactory from "../query-key-factory";

async function deleteInvoice(id: string) {
  const res = await fetch(`http://localhost:3001/invoices/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error("Somenthing went wrong");
  }

  const data = await res.json();
  return data;
}

const useDeleteInvoice = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteInvoice, {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeyFactory.all);
    },
  });
};

export default useDeleteInvoice;
