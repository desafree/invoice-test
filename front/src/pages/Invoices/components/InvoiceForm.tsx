import React, { FC, useState } from "react";
import classes from "./InvoiceForm.module.css";
import FormData from "./FormData";
import ItemsList from "./ItemsList";
import stopEventBubbling from "../../../utils/stopEventBubbling";
import { useForm } from "react-hook-form";
import Item from "../../../typescript/interfaces/Item";
import Invoice from "../../../typescript/interfaces/Invoice";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../../utils/formUtils";
import FormOptions from "./FormOptions";
import useAddInvoice from "../../../react-query/hooks/useAddInvoice";
import defineInvoiceDataFromFormInputs from "../../../utils/defineInvoiceDataFromFormInputs";

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
    const invoice: Invoice = defineInvoiceDataFromFormInputs(data, items);
    addInvoice.mutate(invoice, {
      onSuccess: () => {
        setItems([]);
        reset();
        close();
      },
    });
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
