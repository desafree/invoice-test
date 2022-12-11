import React, { FC, useEffect, useState } from "react";
import classes from "./Item.module.css";
import ItemType from "../../../typescript/interfaces/Item";

interface Props {
  removeItem: (id: string) => void;
  data: ItemType;
  updateItems: (newItem: ItemType) => void;
}

const Item: FC<Props> = ({ removeItem, data, updateItems }) => {
  const [formData, setFormData] = useState({
    name: data.name,
    id: data.id,
    quantity: data.quantity,
    price: data.price,
  } as ItemType);

  useEffect(() => {
    updateItems(formData);
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedItem = { ...formData };
    if (e.target.name === "name") {
      updatedItem[e.target.name] = e.target.value;
    } else if (e.target.name === "price") {
      updatedItem[e.target.name] = Number(e.target.value);
    } else if (e.target.name === "quantity") {
      updatedItem[e.target.name] = Number(e.target.value);
    }
    setFormData(updatedItem);
  };

  return (
    <div className={classes.container}>
      <input
        type="text"
        value={formData.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="number"
        value={formData.quantity}
        onChange={handleChange}
        name="quantity"
      />
      <input
        type="number"
        value={formData.price}
        onChange={handleChange}
        name="price"
      />
      <input
        type="text"
        disabled={true}
        value={formData.price * formData.quantity}
      />
      <button
        onClick={() => {
          removeItem(data.id);
        }}
      >
        <img src="/images/icon-delete.svg" alt="delete" />
      </button>
    </div>
  );
};

export default Item;
