const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const InvoiceModel = require("./models/Invoice");

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://desafree:F5uq0CI7UCu7Fcc4@cluster0.bcs0k91.mongodb.net/feinvoice?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    app.listen(3001, () => {
      console.log("Server running on port 3001");
    });
  });

app.get("/invoices", async (req, res) => {
  try {
    const invoices = await InvoiceModel.find({});
    res.send(invoices);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.get("/invoices/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const invoice = await InvoiceModel.findOne({ id: id });
    res.send(invoice);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.post("/invoices", async (req, res) => {
  const invoice = new InvoiceModel({
    id: req.body.id,
    createdAt: req.body.createdAt,
    paymentDue: req.body.paymentDue,
    description: req.body.description,
    paymentTerms: req.body.paymentTerms,
    clientName: req.body.clientName,
    clientEmail: req.body.clientEmail,
    status: req.body.status,
    senderAddress: {
      street: req.body.senderAddress.street,
      city: req.body.senderAddress.city,
      postCode: req.body.senderAddress.postCode,
      country: req.body.senderAddress.country,
    },
    clientAddress: {
      street: req.body.clientAddress.street,
      city: req.body.clientAddress.city,
      postCode: req.body.clientAddress.postCode,
      country: req.body.clientAddress.country,
    },
    items: req.body.items,
    total: req.body.total,
  });

  try {
    const newInvoice = await invoice.save();
    res.send(newInvoice);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.delete("/invoices/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await InvoiceModel.deleteOne({ id: id });
    res.send({ message: "deleted successfully" });
  } catch (error) {
    res.status(404).send(err);
  }
});

app.put("/invoices/:id", async (req, res) => {
  try {
    const updatedValue = await InvoiceModel.findOneAndUpdate(
      { id: req.params.id },
      { ...req.body, id: req.params.id },
      { new: true }
    );
    res.send(updatedValue);
  } catch (error) {
    res.status(404).send(error);
  }
});
