import React, { FC } from "react";
import classes from "./AddItemsList.module.scss";
import ItemForm from "./ItemForm";
import { Control, useFieldArray, UseFormRegister } from "react-hook-form";
import FormData from "../../typescript/interfaces/FormData";
import createEmptyItem from "../../utils/createEmptyItem";

interface Props {
  control: Control<FormData, any>;
  register: UseFormRegister<FormData>;
}

const AddItemsList: FC<Props> = ({ control, register }) => {
  const { fields, append, remove } = useFieldArray({
    name: "cart",
    control,
    shouldUnregister: true,
    rules: {
      minLength: 1,
    },
  });

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
