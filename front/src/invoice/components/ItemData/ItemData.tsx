import React, { FC } from "react";
import item from "../../types/interfaces/Item";
import formatNumber from "../../../_shared/utils/formatNumber";
import { ItemDataStyled } from "./ItemData.styled";

interface Props {
  data: item;
}

const ItemData: FC<Props> = ({ data }) => {
  return (
    <ItemDataStyled>
      <h3>{data.name}</h3>
      <h4>{data.quantity}</h4>
      <h4>£ {formatNumber(data.price)}</h4>
      <h3>£ {formatNumber(data.price * data.quantity)}</h3>
    </ItemDataStyled>
  );
};

export default ItemData;
