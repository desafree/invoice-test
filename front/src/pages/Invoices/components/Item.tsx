import React from "react";
import classes from "./Item.module.css";

const Item = () => {
  return (
    <div className={classes.container}>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" disabled={true} />
      <button>
        <img src="/images/icon-delete.svg" alt="delete" />
      </button>
    </div>
  );
};

export default Item;
