import React, { FC, useContext, useState } from "react";
import classes from "./EditInvoiceForm.module.scss";
import useUpdateInvoice from "../../../react-query/hooks/useUpdateInvoice";
import Item from "../../../typescript/interfaces/Item";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../../utils/schemaForm";
import Invoice from "../../../typescript/interfaces/Invoice";
import stopEventBubbling from "../../../utils/stopEventBubbling";
import EditFormData from "./EditFormData";
import AddItemsList from "../../Invoices/components/AddItemsList";
import FormOptions from "../../Invoices/components/FormOptions";
import { useParams } from "react-router-dom";
import useInvoice from "../../../react-query/hooks/useInvoice";
import defineInvoiceDataFromFormInputs from "../../../utils/defineInvoiceDataFromFormInputs";
import themeContext from "../../../context/themeContext";

interface Props {
  close: () => void;
}

const EditInvoiceForm: FC<Props> = ({ close }) => {
  const { darkMode } = useContext(themeContext);
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
    const invoice: Invoice = defineInvoiceDataFromFormInputs(data);
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
    <div
      className={`${classes.container} ${classes[darkMode ? "dark" : ""]}`}
      onClick={close}
    >
      <form onClick={stopEventBubbling} onSubmit={handleSubmit(onSubmit)}>
        <h3>Edit Invoice</h3>
        <EditFormData register={register} errors={errors}></EditFormData>
        {/*        <AddItemsList setItems={setItems} items={items}></AddItemsList>*/}
        <FormOptions reset={reset}></FormOptions>
      </form>
    </div>
  );
};

export default EditInvoiceForm;
