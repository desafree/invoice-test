import InvoiceType from "../types/interfaces/Invoice";

async function postInvoice(newInvoice: InvoiceType) {
  const res = await fetch("http://localhost:3001/invoices", {
    method: "POST",
    body: JSON.stringify(newInvoice),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  const data: InvoiceType = await res.json();
  return data;
}

export default postInvoice;
