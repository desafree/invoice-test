import React, { FC } from "react";
import classes from "./AddItemsList.module.scss";
import ItemForm from "./ItemForm";
import {
  Control,
  FieldErrors,
  useFieldArray,
  UseFormRegister,
  useWatch,
} from "react-hook-form";
import FormData from "../../types/interfaces/FormData";
import createEmptyItem from "../../utils/createEmptyItem";
import useFieldArrayCopy from "../../../_shared/form/useFieldArrayCopy";

interface Props {
  control: Control<FormData, any>;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const AddItemsList: FC<Props> = ({ control, register, errors }) => {
  const { fields, append, remove } = useFieldArrayCopy("cart");

  console.log("cart", useWatch({ name: "description" }));

  return (
    <div className={classes.container}>
      <h4>Item List</h4>
      <div className={classes.tags}>
        <h5>Item Name</h5>
        <h5>Qty.</h5>
        <h5>Price</h5>
        <h5>Total</h5>
        <span></span>
      </div>
      <ul className={classes.items}>
        {fields.map((field, index) => {
          return (
            <ItemForm
              key={field.id}
              register={register}
              remove={remove}
              control={control}
              index={index}
            ></ItemForm>
          );
        })}
      </ul>

      <button
        className={classes["btn-add"]}
        type="button"
        onClick={() => {
          append(createEmptyItem());
        }}
      >
        +Add New Item
      </button>
    </div>
  );
};

export default AddItemsList;
