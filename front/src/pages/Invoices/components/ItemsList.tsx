import React, { FC } from "react";
import classes from "./ItemsList.module.css";
import Item from "./Item";
import FormOptions from "./FormOptions";
import ItemType from "../../../typescript/interfaces/Item";
import generateKey from "../../../utils/generateKey";

interface Props {
  setItems: React.Dispatch<React.SetStateAction<ItemType[]>>;
  items: ItemType[];
}

const ItemsList: FC<Props> = ({ setItems, items }) => {
  const handleClick = () => {
    const newItem = {
      name: "",
      quantity: 0,
      price: 0,
      id: generateKey(),
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id: string) => {
    setItems(
      items.filter((item) => {
        if (item.id !== id) return true;
      })
    );
  };

  const updateItems = (newItem: ItemType) => {
    const updatedItems = items.map((item) => {
      if (item.id === newItem.id) return newItem;
      return item;
    });

    setItems(updatedItems);
  };

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
        {items.map((item) => {
          return (
            <Item
              removeItem={removeItem}
              data={item}
              updateItems={updateItems}
            ></Item>
          );
        })}
      </ul>
      <button
        className={classes["btn-add"]}
        onClick={handleClick}
        type="button"
      >
        +Add New Item
      </button>
      <FormOptions></FormOptions>
    </div>
  );
};

export default ItemsList;
