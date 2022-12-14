import React, { FC, useContext, useEffect, useState } from "react";
import classes from "./AddInvoiceForm.module.scss";
import AddFormData from "./AddFormData";
import AddItemsList from "./AddItemsList";
import stopEventBubbling from "../../../utils/stopEventBubbling";
import { useForm } from "react-hook-form";
import Item from "../../../typescript/interfaces/Item";
import Invoice from "../../../typescript/interfaces/Invoice";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../../utils/schemaForm";
import FormOptions from "./FormOptions";
import useAddInvoice from "../../../react-query/hooks/useAddInvoice";
import defineInvoiceDataFromFormInputs from "../../../utils/defineInvoiceDataFromFormInputs";
import themeContext from "../../../context/themeContext";
import { useFieldArray } from "react-hook-form";
import ItemType from "../../../typescript/interfaces/Item";

interface Props {
  close: () => void;
}

const AddInvoiceForm: FC<Props> = ({ close }) => {
  const { darkMode } = useContext(themeContext);
  const [items, setItems] = useState<Item[]>([]);
  const addInvoice = useAddInvoice();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
    getValues,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    name: "cart",
    control,
    shouldUnregister: true,
    rules: {
      minLength: 1,
    },
  });

  const watchCart: ItemType[] = watch("cart");

  const onSubmit = (data: any) => {
    const invoice: Invoice = defineInvoiceDataFromFormInputs(data);
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
        <AddItemsList
          setItems={setItems}
          items={items}
          fields={fields}
          register={register}
          remove={remove}
          append={append}
          control={control}
          getValues={getValues}
          errors={errors}
          watchCart={watchCart}
        ></AddItemsList>
        <FormOptions reset={reset}></FormOptions>
      </form>
    </div>
  );
};

export default AddInvoiceForm;
