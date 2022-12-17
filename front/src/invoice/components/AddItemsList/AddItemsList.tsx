import React from "react";
import classes from "./AddItemsList.module.scss";
import ItemForm from "../ItemForm/ItemForm";
import createEmptyItem from "../../utils/createEmptyItem";
import { useFieldArray } from "react-hook-form";

const AddItemsList = () => {
  const { fields, append, remove } = useFieldArray({
    name: "cart",
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
            <ItemForm key={field.id} remove={remove} index={index}></ItemForm>
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
