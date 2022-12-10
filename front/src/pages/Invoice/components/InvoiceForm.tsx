import React, { FC, useState } from "react";
import classes from "./InvoiceForm.module.css";
import useUpdateInvoice from "../../../react-query/hooks/useUpdateInvoice";
import Item from "../../../typescript/interfaces/Item";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../../utils/formUtils";
import Invoice from "../../../typescript/interfaces/Invoice";
import generateKey from "../../../utils/generateKey";
import stopEventBubbling from "../../../utils/stopEventBubbling";
import FormData from "./FormData";
import ItemsList from "../../Invoices/components/ItemsList";
import FormOptions from "../../Invoices/components/FormOptions";
import { useParams } from "react-router-dom";
import useInvoice from "../../../react-query/hooks/useInvoice";

interface Props {
  close: () => void;
}

const InvoiceForm: FC<Props> = ({ close }) => {
  const { id } = useParams();
  const { data } = useInvoice(id as string);
  const [items, setItems] = useState<Item[]>(data?.items || []);
  const updateInvoice = useUpdateInvoice();
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
    updateInvoice.mutate({ id: id as string, invoice: { ...invoice } });
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
