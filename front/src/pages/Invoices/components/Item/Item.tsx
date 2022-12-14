import React, { FC, useEffect, useState } from "react";
import classes from "./Item.module.scss";
import ItemType from "../../../../typescript/interfaces/Item";
import deleteIcon from "./icon-delete.svg";

interface Props {
  removeItem: (id: string) => void;
  data: ItemType;
  updateItems: (newItem: ItemType) => void;
}

const Item: FC<Props> = ({ removeItem, data, updateItems }) => {
  /*  const [formData, setFormData] = useState<ItemType>({
    name: data.name,
    id: data.id,
    quantity: data.quantity,
    price: data.price,
  });

  useEffect(() => {
    updateItems(formData);
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedItem = { ...data };
    if (e.target.name === "name") {
      updatedItem[e.target.name] = e.target.value || "";
    } else if (e.target.name === "price") {
      updatedItem[e.target.name] =
        Number(e.target.value) > 0 ? Number(e.target.value) : 0;
    } else if (e.target.name === "quantity") {
      updatedItem[e.target.name] =
        Number(e.target.value) > 0 ? Number(e.target.value) : 0;
    }
    updateItems(updatedItem);
  };*/

  return (
    <div className={classes.container}>
      <input
        type="text"
        value={data.name}
        /*        onChange={handleChange}*/
        name="name"
      />
      <input
        type="number"
        value={data.quantity}
        /*        onChange={handleChange}*/
        name="quantity"
      />
      <input
        type="number"
        value={data.price}
        /*        onChange={handleChange}*/
        name="price"
      />
      <input type="text" disabled={true} value={data.price * data.quantity} />
      <button
        onClick={() => {
          removeItem(data.id);
        }}
      >
        <img src={deleteIcon} alt="delete" />
      </button>
    </div>
  );
};

export default Item;
