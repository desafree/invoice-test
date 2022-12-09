const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const InvoiceModel = require("./models/Invoice");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://desafree:F5uq0CI7UCu7Fcc4@cluster0.bcs0k91.mongodb.net/feinvoice?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

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
    id: req.id,
    createdAt: req.createdAt,
    paymentDue: req.paymentDue,
    description: req.description,
    paymentTerms: req.paymentTerms,
    clientName: req.clientName,
    clientEmail: req.clientEmail,
    status: req.status,
    senderAddress: {
      street: req.street,
      city: req.city,
      postCode: req.postCode,
      country: req.country,
    },
    clientAddress: {
      street: req.clientStreet,
      city: req.clientCity,
      postCode: req.clientPostCOde,
      country: req.clientcountry,
    },
    items: [
      {
        name: req.itemName,
        quantity: req.itemQuantity,
        price: req.itemPrice,
        total: req.itemTotal,
      },
    ],
    total: req.total,
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
    await InvoiceModel.findByIdAndDelete(id);
    res.send({ message: "deleted successfully" });
  } catch (error) {
    res.status(404).send(err);
  }
});

app.put("/posts/:id", async (req, res) => {
  const id = req.params.id;
  try {
    var updatedValue = await InvoiceModel.findByIdAndUpdate(
      id,
      req.updatedObj,
      { new: true }
    );
    res.send(updatedValue);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
