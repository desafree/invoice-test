import React, { FC, useState } from "react";
import classes from "./InvoiceForm.module.css";
import FormData from "./FormData";
import ItemsList from "./ItemsList";
import stopEventBubbling from "../../../utils/stopEventBubbling";
import { useForm } from "react-hook-form";
import Item from "../../../typescript/interfaces/Item";
import Invoice from "../../../typescript/interfaces/Invoice";
import generateKey from "../../../utils/generateKey";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../../utils/formUtils";
import FormOptions from "./FormOptions";
import useAddInvoice from "../../../react-query/hooks/useAddInvoice";
import { useMutation } from "react-query";

interface Props {
  close: () => void;
}

const InvoiceForm: FC<Props> = ({ close }) => {
  const [items, setItems] = useState<Item[]>([]);
  const addInvoice = useAddInvoice();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
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
    addInvoice.mutate(invoice);
    setItems([]);
    reset();
    close();
  };

  return (
    <div className={classes.container} onClick={close}>
      <form onClick={stopEventBubbling} onSubmit={handleSubmit(onSubmit)}>
        <h3>New Invoice</h3>
        <FormData register={register} errors={errors}></FormData>
        <ItemsList setItems={setItems} items={items}></ItemsList>
        <FormOptions reset={reset}></FormOptions>
      </form>
    </div>
  );
};

export default InvoiceForm;
