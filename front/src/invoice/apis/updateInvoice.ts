import InvoiceType from "../types/interfaces/Invoice";

async function updateInvoice(obj: { id: string; invoice: InvoiceType }) {
  const res = await fetch(`http://localhost:3001/invoices/${obj.id}`, {
    method: "PUT",
    body: JSON.stringify(obj.invoice),
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

export default updateInvoice;
