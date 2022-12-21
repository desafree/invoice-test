import React from "react";
import ItemForm from "../ItemForm/ItemForm";
import createEmptyItem from "../../utils/createEmptyItem";
import { useFieldArray } from "react-hook-form";
import { AddItemsListStyled } from "./AddItemsList.styled";

const AddItemsList = () => {
  const { fields, append, remove } = useFieldArray({
    name: "cart",
  });

  return (
    <AddItemsListStyled>
      <h4>Item List</h4>
      <div className="tags">
        <h5>Item Name</h5>
        <h5>Qty.</h5>
        <h5>Price</h5>
        <h5>Total</h5>
        <span></span>
      </div>
      <ul className="items">
        {fields.map((field, index) => {
          return (
            <ItemForm key={field.id} remove={remove} index={index}></ItemForm>
          );
        })}
      </ul>

      <button
        className="btn-add"
        type="button"
        onClick={() => {
          append(createEmptyItem());
        }}
      >
        +Add New Item
      </button>
    </AddItemsListStyled>
  );
};

export default AddItemsList;
