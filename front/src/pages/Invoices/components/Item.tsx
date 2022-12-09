import React, { FC, useEffect, useState } from "react";
import classes from "./Item.module.css";
import ItemType from "../../../typescript/interfaces/Item";

interface Props {
  removeItem: (id: string) => void;
  data: ItemType;
  updateItems: (newItem: ItemType) => void;
}

const Item: FC<Props> = ({ removeItem, data, updateItems }) => {
  const [name, setName] = useState(data.name);
  const [quantity, setQuantity] = useState(data.quantity);
  const [price, setPrice] = useState(data.price);

  useEffect(() => {
    updateItems({
      name: name,
      quantity: quantity,
      price: price,
      total: quantity * price,
      id: data.id,
    } as ItemType);
  }, [name, quantity, price]);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };

  return (
    <div className={classes.container}>
      <input type="text" value={name} onChange={handleChangeName} />
      <input type="number" value={quantity} onChange={handleChangeQuantity} />
      <input type="number" value={price} onChange={handleChangePrice} />
      <input type="text" disabled={true} value={quantity * price} />
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
