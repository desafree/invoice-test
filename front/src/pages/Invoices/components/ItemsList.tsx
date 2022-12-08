import React from "react";
import classes from "./ItemsList.module.css";
import Item from "./Item";
import FormOptions from "./FormOptions";

const ItemsList = () => {
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
        <Item></Item>
        <Item></Item>
      </ul>
      <button className={classes["btn-add"]}>+Add New Item</button>
      <FormOptions></FormOptions>
    </div>
  );
};

export default ItemsList;
