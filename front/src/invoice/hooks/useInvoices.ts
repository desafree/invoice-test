import { useQuery } from "@tanstack/react-query";
import invoicesKeys from "../../_shared/apis/react-query/query-key-factory";
import getInvoices from "../apis/getInvoices";

const useInvoices = () => {
  return useQuery(invoicesKeys.all, getInvoices);
};

export default useInvoices;
