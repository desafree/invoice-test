import Invoice from "../typescript/interfaces/Invoice";
import generateKey from "./generateKey";
import Item from "../typescript/interfaces/Item";

const defineInvoiceDataFromFormInputs = (data: any, items: Item[]) => {
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
    items: items,
    total: items.reduce((total, curr) => {
      return total + curr.quantity * curr.price;
    }, 0),
  };

  return invoice;
};

export default defineInvoiceDataFromFormInputs;
