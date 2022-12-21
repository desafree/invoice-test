import React, { FC } from "react";
import Filter from "../../types/types/Filter";
import { StatusButtonStyled } from "./StatusButton.styled";

interface Props {
  status: Filter;
}

const StatusButton: FC<Props> = ({ status }) => {
  return (
    <StatusButtonStyled status={status}>
      <span></span>
      {status}
    </StatusButtonStyled>
  );
};

export default StatusButton;
