import { useMutation, useQueryClient } from "react-query";
import queryKeyFactory from "../query-key-factory";

async function deleteInvoice(id: string) {
  const res = await fetch(`http://localhost:3001/invoices/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  const data = await res.json();
  return data;
}

const useDeleteInvoice = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation(deleteInvoice, {
    onSuccess: () => {
      queryClient.removeQueries(queryKeyFactory.detail(id as string));
      queryClient.invalidateQueries(queryKeyFactory.all);
    },
  });
};

export default useDeleteInvoice;
