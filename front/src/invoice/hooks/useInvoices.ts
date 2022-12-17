import { useQuery } from "@tanstack/react-query";
import invoicesKeys from "../request-management/query-key/query-key-invoice-factory";
import getInvoices from "../apis/getInvoices";

const useInvoices = () => {
  return useQuery(invoicesKeys.all, getInvoices);
};

export default useInvoices;
