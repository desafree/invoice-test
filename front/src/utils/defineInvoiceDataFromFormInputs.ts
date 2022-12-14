import Invoice from "../typescript/interfaces/Invoice";
import generateKey from "./generateKey";
import FormData from "../typescript/interfaces/FormData";

const defineInvoiceDataFromFormInputs = (data: FormData) => {
  const invoice: Invoice = {
    senderAddress: {
      street: data["street-from"],
      city: data["city-from"],
      postCode: data["postcode-from"],
      country: data["country-from"],
    },
    clientAddress: {
      street: data["street-to"],
      city: data["city-to"],
      postCode: data["postcode-to"],
      country: data["country-to"],
    },
    id: generateKey(),
    description: data.description,
    paymentTerms: Number(data.terms),
    createdAt: new Date(),
    paymentDue: new Date(data["invoice-date"]),
    clientName: data.name,
    clientEmail: data.email,
    status: data.status,
    items: data.cart,
    total: data.cart.reduce((acc, curr) => {
      console.log(curr, acc);
      return acc + curr.price * curr.quantity;
    }, 0),
  };

  return invoice;
};

export default defineInvoiceDataFromFormInputs;
