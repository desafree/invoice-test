import React, { FC } from "react";
import classes from "./Total.module.css";
import formatNumber from "../../../utils/formatNumber";

interface Props {
  total: number;
}

const Total: FC<Props> = ({ total }) => {
  return (
    <div className={classes.container}>
      <h4>Amount Due</h4>
      <h2>£ {formatNumber(total)}</h2>
    </div>
  );
};

export default Total;
