import React, { FC, useMemo } from "react";
import formatNumber from "../../../_shared/utils/formatNumber";
import { TotalItemsStyled } from "./TotalItems.styled";

interface Props {
  total: number;
}

const TotalItems: FC<Props> = ({ total }) => {
  return (
    <TotalItemsStyled>
      <h4>Amount Due</h4>
      <h2>£ {useMemo(() => formatNumber(total), [total])}</h2>
    </TotalItemsStyled>
  );
};

export default TotalItems;
