import { useQuery } from "react-query";
import invoicesKeys from "../query-key-factory";
import Invoice from "../../typescript/interfaces/Invoice";

async function getInvoicesFiltered() {
  const res = await fetch("http://localhost:3001/invoices");
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  const data: Invoice[] = await res.json();
  return data;
}

const useInvoicesFiltered = (filter: string) => {
  /*  cosi mi refetcha ad ogni cambio di filter, ma non mi conviene utilizzare all e utilizzare il filter solo per cambiare nel select??*/
  return useQuery(invoicesKeys.all, getInvoicesFiltered, {
    select: (data) => {
      return data.filter((invoice) => {
        if (filter === "default") return true;
        if (invoice.status === filter) return true;
      });
    },
  });
};

export default useInvoicesFiltered;
