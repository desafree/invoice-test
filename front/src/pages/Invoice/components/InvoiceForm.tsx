import React, { FC, useState } from "react";
import classes from "./InvoiceForm.module.css";
import useUpdateInvoice from "../../../react-query/hooks/useUpdateInvoice";
import Item from "../../../typescript/interfaces/Item";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../../utils/formUtils";
import Invoice from "../../../typescript/interfaces/Invoice";
import stopEventBubbling from "../../../utils/stopEventBubbling";
import FormData from "./FormData";
import ItemsList from "../../Invoices/components/ItemsList";
import FormOptions from "../../Invoices/components/FormOptions";
import { useParams } from "react-router-dom";
import useInvoice from "../../../react-query/hooks/useInvoice";
import defineInvoiceDataFromFormInputs from "../../../utils/defineInvoiceDataFromFormInputs";

interface Props {
  close: () => void;
}

const InvoiceForm: FC<Props> = ({ close }) => {
  const { id } = useParams();
  const { data } = useInvoice(id as string);
  const [items, setItems] = useState<Item[]>(() => {
    return data?.items || [];
  });
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
    const invoice: Invoice = defineInvoiceDataFromFormInputs(data, items);
    updateInvoice.mutate(
      { id: id as string, invoice: { ...invoice } },
      {
        onSuccess: () => {
          setItems([]);
          reset();
          close();
        },
      }
    );
  };

  return (
    <div className={classes.container} onClick={close}>
      <form onClick={stopEventBubbling} onSubmit={handleSubmit(onSubmit)}>
        <h3>Edit Invoice</h3>
        <FormData register={register} errors={errors}></FormData>
        <ItemsList setItems={setItems} items={items}></ItemsList>
        <FormOptions reset={reset}></FormOptions>
      </form>
    </div>
  );
};

export default InvoiceForm;
