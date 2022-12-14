import FormData from "../types/interfaces/FormData";

function createEmptyDataField() {
  const formData: FormData = {
    status: "pending",
    description: "",
    terms: 7,
    "invoice-date": new Date(),
    "country-to": "",
    "postcode-to": "",
    "city-to": "",
    "street-to": "",
    email: "",
    name: "",
    "country-from": "",
    "postcode-from": "",
    "city-from": "",
    "street-from": "",
    cart: [],
  };

  return formData;
}

export default createEmptyDataField;
