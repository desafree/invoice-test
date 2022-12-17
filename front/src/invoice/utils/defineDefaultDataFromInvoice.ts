import Invoice from "../types/interfaces/Invoice";
import InvoiceFormData from "../types/interfaces/FormData";

function defineDefaultDataFromInvoice(
  invoiceData: Invoice | undefined
): InvoiceFormData | undefined {
  if (invoiceData) {
    const defaultFormData = {
      "street-from": invoiceData.senderAddress.street,
      "city-from": invoiceData.senderAddress.city,
      "postcode-from": invoiceData.senderAddress.postCode,
      "country-from": invoiceData.senderAddress.country,
      name: invoiceData.clientName,
      email: invoiceData.clientEmail,
      "street-to": invoiceData.clientAddress.street,
      "city-to": invoiceData.clientAddress.city,
      "postcode-to": invoiceData.clientAddress.postCode,
      "country-to": invoiceData.clientAddress.country,
      "invoice-date": invoiceData.paymentDue,
      terms: invoiceData.paymentTerms,
      description: invoiceData.description,
      cart: invoiceData.items,
      status: invoiceData.status,
    };

    return defaultFormData;
  }

  return undefined;
}

export default defineDefaultDataFromInvoice;
