import { useQuery } from "@tanstack/react-query";
import invoicesKeys from "../query-key-factory";
import getInvoices from "../../utils/api/getInvoices";

const useInvoicesFiltered = (filter: string) => {
  return useQuery(invoicesKeys.all, getInvoices, {
    select: (data) => {
      return data.filter((invoice) => {
        if (filter === "default") return true;
        if (invoice.status === filter) return true;
      });
    },
  });
};

export default useInvoicesFiltered;
