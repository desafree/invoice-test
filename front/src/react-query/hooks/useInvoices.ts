import { useQuery } from "react-query";
import invoicesKeys from "../query-key-factory";
import Invoice from "../../typescript/interfaces/Invoice";

async function getInvoices() {
  const res = await fetch("http://localhost:3001/invoices");
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const data: Invoice[] = await res.json();
  return data;
}

const useInvoices = () => {
  return useQuery(invoicesKeys.all, getInvoices);
};

export default useInvoices;
