import Item from "./Item";
import Filter from "../types/Filter";

interface FormData {
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
  "invoice-date": string;
  terms: string;
  description: string;
  cart: Item[];
  status: Filter;
}

export default FormData;
