import React, { FC } from "react";
import classes from "./ItemData.module.scss";
import item from "../../types/interfaces/Item";
import formatNumber from "../../../_shared/utils/formatNumber";

interface Props {
  data: item;
}

const ItemData: FC<Props> = ({ data }) => {
  return (
    <div className={classes.container}>
      <h3>{data.name}</h3>
      <h4>{data.quantity}</h4>
      <h4>£ {formatNumber(data.price)}</h4>
      <h3>£ {formatNumber(data.price * data.quantity)}</h3>
    </div>
  );
};

export default ItemData;
