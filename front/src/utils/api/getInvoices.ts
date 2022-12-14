import Invoice from "../../typescript/interfaces/Invoice";

async function getInvoices() {
  const res = await fetch("http://localhost:3001/invoices");
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const data: Invoice[] = await res.json();
  return data;
}

export default getInvoices;
