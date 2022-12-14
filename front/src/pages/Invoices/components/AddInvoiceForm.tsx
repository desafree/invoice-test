import React, { FC, useContext, useEffect } from "react";
import classes from "./AddInvoiceForm.module.scss";
import AddFormData from "./AddFormData";
import AddItemsList from "./AddItemsList";
import stopEventBubbling from "../../../utils/stopEventBubbling";
import { useForm } from "react-hook-form";
import Invoice from "../../../typescript/interfaces/Invoice";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../../utils/schemaForm";
import FormOptions from "./FormOptions";
import useAddInvoice from "../../../react-query/hooks/useAddInvoice";
import defineInvoiceDataFromFormInputs from "../../../utils/defineInvoiceDataFromFormInputs";
import themeContext from "../../../context/themeContext";
import FormData from "../../../typescript/interfaces/FormData";

interface Props {
  close: () => void;
}

const AddInvoiceForm: FC<Props> = ({ close }) => {
  const { darkMode } = useContext(themeContext);
  const addInvoice = useAddInvoice();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const invoice: Invoice = defineInvoiceDataFromFormInputs(data);
    console.log(data, invoice);
    addInvoice.mutate(invoice, {
      onSuccess: () => {
        close();
      },
    });
  };

  return (
    <div
      className={`${classes.container} ${classes[darkMode ? "dark" : ""]}`}
      onClick={close}
    >
      <form onClick={stopEventBubbling} onSubmit={handleSubmit(onSubmit)}>
        <h3>New Invoice</h3>
        <AddFormData register={register} errors={errors}></AddFormData>
        <AddItemsList control={control} register={register}></AddItemsList>
        <FormOptions reset={reset}></FormOptions>
      </form>
    </div>
  );
};

export default AddInvoiceForm;
