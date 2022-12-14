import React, { FC } from "react";
import classes from "./AddItemsList.module.scss";
import ItemType from "../../../typescript/interfaces/Item";
import ItemForm from "./ItemForm";
import {
  UseFormRegister,
  FieldValues,
  UseFieldArrayRemove,
  UseFieldArrayAppend,
  Control,
  UseFormGetValues,
  FieldErrorsImpl,
} from "react-hook-form";
import generateKey from "../../../utils/generateKey";
import Item from "../../../typescript/interfaces/Item";

interface Props {
  setItems: React.Dispatch<React.SetStateAction<ItemType[]>>;
  items: ItemType[];
  fields: Record<"id", string>[];
  register: UseFormRegister<FieldValues>;
  remove: UseFieldArrayRemove;
  append: UseFieldArrayAppend<FieldValues, "cart">;
  control: Control<FieldValues, any>;
  getValues: UseFormGetValues<FieldValues>;
  errors: Partial<FieldErrorsImpl<{ [p: string]: any }>>;
  watchCart: Item[];
}

const AddItemsList: FC<Props> = ({
  fields,
  register,
  remove,
  append,
  control,
  getValues,
  errors,
  watchCart,
}) => {
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
              watchCart={watchCart}
              key={field.id}
              register={register}
              index={index}
              remove={remove}
              control={control}
              getValues={getValues}
              errors={errors}
            ></ItemForm>
          );
        })}
      </ul>
      <button
        className={classes["btn-add"]}
        type="button"
        onClick={() => {
          append({
            name: "",
            quantity: 0,
            price: 0,
            id: generateKey(),
            total: 0,
          });
        }}
      >
        +Add New Item
      </button>
    </div>
  );
};

export default AddItemsList;
