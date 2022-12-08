import React from "react";
import classes from "./ItemsList.module.css";
import ItemData from "./ItemData";

const ItemsList = () => {
  return (
    <div className={classes.container}>
      <div className={classes.tags}>
        <h4>Item Name</h4>
        <h4>QTY.</h4>
        <h4>Price</h4>
        <h4>Total</h4>
      </div>
      <ul>
        <ItemData></ItemData>
        <ItemData></ItemData>
      </ul>
    </div>
  );
};

export default ItemsList;
