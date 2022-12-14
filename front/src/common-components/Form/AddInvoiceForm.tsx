import React, { FC, useContext, useEffect } from "react";
import classes from "./AddInvoiceForm.module.scss";
import AddFormData from "./AddFormData";
import AddItemsList from "./AddItemsList";
import stopEventBubbling from "../../utils/stopEventBubbling";
import { useForm } from "react-hook-form";
import Invoice from "../../typescript/interfaces/Invoice";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../utils/schemaForm";
import FormOptions from "./FormOptions";
import defineDefaultDataFromInvoice from "../../utils/defineDefaultDataFromInvoice";
import FormData from "../../typescript/interfaces/FormData";
import useTheme from "../../hooks/useTheme";

interface Props {
  close: () => void;
  defaultData?: Invoice;
  onSubmit: (data: FormData) => void;
}

const AddInvoiceForm: FC<Props> = ({ close, defaultData, onSubmit }) => {
  const theme = useTheme();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm<FormData>({
    defaultValues: defineDefaultDataFromInvoice(defaultData),
    resolver: yupResolver(schema),
  });

  return (
    <div className={`${classes.container} ${classes[theme]}`} onClick={close}>
      <form onClick={stopEventBubbling} onSubmit={handleSubmit(onSubmit)}>
        <h3>{defaultData ? "Edit Invoice" : "Add Invoice"}</h3>
        <AddFormData register={register} errors={errors}></AddFormData>
        <AddItemsList control={control} register={register}></AddItemsList>
        <FormOptions reset={reset}></FormOptions>
      </form>
    </div>
  );
};

export default AddInvoiceForm;
