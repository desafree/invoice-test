import React, { FC } from "react";
import classes from "./StatusButton.module.scss";
import Filter from "../typescript/types/Filter";

interface Props {
  status: Filter;
}

const StatusButton: FC<Props> = ({ status }) => {
  return (
    <div className={`${classes.container} ${classes[status]}`}>
      <span></span>
      {status}
    </div>
  );
};

export default StatusButton;
