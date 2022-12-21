import React, { FC } from "react";
import { EditItemsStyled } from "./EditItems.styled";
import ItemData from "../ItemData/ItemData";
import item from "../../types/interfaces/Item";

interface Props {
  items: item[];
}

const EditItemsList: FC<Props> = ({ items }) => {
  return (
    <EditItemsStyled>
      <div className="tags">
        <h4>Item Name</h4>
        <h4>QTY.</h4>
        <h4>Price</h4>
        <h4>Total</h4>
      </div>
      <ul>
        {items.map((item, index) => {
          return <ItemData data={item} key={item.id}></ItemData>;
        })}
      </ul>
    </EditItemsStyled>
  );
};

export default EditItemsList;
