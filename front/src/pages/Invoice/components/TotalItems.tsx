import React, { FC, useMemo } from "react";
import classes from "./TotalItems.module.scss";
import formatNumber from "../../../utils/formatNumber";

interface Props {
  total: number;
}

const TotalItems: FC<Props> = ({ total }) => {
  return (
    <div className={classes.container}>
      <h4>Amount Due</h4>
      <h2>£ {useMemo(() => formatNumber(total), [total])}</h2>
    </div>
  );
};

export default TotalItems;
