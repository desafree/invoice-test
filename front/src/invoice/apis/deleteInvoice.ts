import DeletedOutputFromApi from "../types/interfaces/DeletedOutputFromApi";

async function deleteInvoice(id: string) {
  const res = await fetch(`http://localhost:3001/invoices/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  const data: DeletedOutputFromApi = await res.json();
  return data;
}

export default deleteInvoice;
