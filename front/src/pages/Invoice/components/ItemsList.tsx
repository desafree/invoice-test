import React, { FC } from "react";
import classes from "./ItemsList.module.css";
import ItemData from "./ItemData";
import item from "../../../typescript/interfaces/Item";

interface Props {
  items: item[];
}

const ItemsList: FC<Props> = ({ items }) => {
  return (
    <div className={classes.container}>
      <div className={classes.tags}>
        <h4>Item Name</h4>
        <h4>QTY.</h4>
        <h4>Price</h4>
        <h4>Total</h4>
      </div>
      <ul>
        {items.map((item, index) => {
          return <ItemData data={item} key={item.id}></ItemData>;
        })}
      </ul>
    </div>
  );
};

export default ItemsList;
