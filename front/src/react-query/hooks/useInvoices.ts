import { useQuery } from "@tanstack/react-query";
import invoicesKeys from "../query-key-factory";
import getInvoices from "../../utils/api/getInvoices";

const useInvoices = () => {
  return useQuery(invoicesKeys.all, getInvoices);
};

export default useInvoices;
