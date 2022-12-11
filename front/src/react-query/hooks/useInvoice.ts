import { useQuery } from "react-query";
import invoicesKeys from "../query-key-factory";
import Invoice from "../../typescript/interfaces/Invoice";

async function getInvoice(id: string) {
  const res = await fetch(`http://localhost:3001/invoices/${id}`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const data: Invoice = await res.json();
  return data;
}

const useInvoices = (id: string) => {
  return useQuery(invoicesKeys.detail(id), () => {
    return getInvoice(id);
  });
};

export default useInvoices;
