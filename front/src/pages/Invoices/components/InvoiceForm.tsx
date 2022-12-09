import React, { FC, useState } from "react";
import classes from "./InvoiceForm.module.css";
import FormData from "./FormData";
import ItemsList from "./ItemsList";
import stopEventBubbling from "../../../utils/stopEventBubbling";
import { useForm } from "react-hook-form";
import Item from "../../../typescript/interfaces/Item";
import Invoice from "../../../typescript/interfaces/Invoice";
import generateKey from "../../../utils/generateKey";
import Filter from "../../../typescript/types/Filter";

interface Props {
  close: () => void;
}

const InvoiceForm: FC<Props> = ({ close }) => {
  const [items, setItems] = useState<Item[]>([]);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    const invoice: Invoice = {
      senderAddress: {
        street: "19 Union Terrace",
        city: "London",
        postCode: "E1 3EZ",
        country: "United Kingdom",
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
        return total * (curr.quantity * curr.price);
      }, 0),
    };
    console.log(invoice);
    setItems([]);
    reset();
  };

  return (
    <div className={classes.container} onClick={close}>
      <form onClick={stopEventBubbling} onSubmit={handleSubmit(onSubmit)}>
        <h3>New Invoice</h3>
        <FormData register={register}></FormData>
        <ItemsList setItems={setItems} items={items}></ItemsList>
      </form>
    </div>
  );
};

export default InvoiceForm;
