import Item from "./Item";
import Filter from "../types/Filter";

interface InvoiceFormData {
  status: Filter;
  "street-from": string;
  "city-from": string;
  "postcode-from": string;
  "country-from": string;
  name: string;
  email: string;
  "street-to": string;
  "city-to": string;
  "postcode-to": string;
  "country-to": string;
  "invoice-date": Date;
  terms: number;
  description: string;
  cart: Item[];
}

export default InvoiceFormData;
