const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema({
  id: {
    type: "String",
  },
  createdAt: {
    type: "String",
  },
  paymentDue: {
    type: "String",
  },
  description: {
    type: "String",
  },
  paymentTerms: {
    type: "Number",
  },
  clientName: {
    type: "String",
  },
  clientEmail: {
    type: "String",
  },
  status: {
    type: "String",
  },
  senderAddress: {
    street: {
      type: "String",
    },
    city: {
      type: "String",
    },
    postCode: {
      type: "String",
    },
    country: {
      type: "String",
    },
  },
  clientAddress: {
    street: {
      type: "String",
    },
    city: {
      type: "String",
    },
    postCode: {
      type: "String",
    },
    country: {
      type: "String",
    },
  },
  items: {
    type: ["Mixed"],
  },
  total: {
    type: "Number",
  },
});

const Invoice = mongoose.model("invoices", InvoiceSchema);
module.exports = Invoice;
