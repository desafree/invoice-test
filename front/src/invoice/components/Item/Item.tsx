import React, { FC } from "react";
import ItemType from "../../types/interfaces/Item";
import deleteIcon from "./icon-delete.svg";
import { ItemStyled } from "./Item.styled";

interface Props {
  removeItem: (id: string) => void;
  data: ItemType;
  updateItems: (newItem: ItemType) => void;
}

const Item: FC<Props> = ({ removeItem, data, updateItems }) => {
  return (
    <ItemStyled>
      <input
        type="text"
        value={data.name}
        /*        onChange={handleChange}*/
        name="name"
      />
      <input
        type="number"
        value={data.quantity}
        /*        onChange={handleChange}*/
        name="quantity"
      />
      <input
        type="number"
        value={data.price}
        /*        onChange={handleChange}*/
        name="price"
      />
      <input type="text" disabled={true} value={data.price * data.quantity} />
      <button
        onClick={() => {
          removeItem(data.id);
        }}
      >
        <img src={deleteIcon} alt="delete" />
      </button>
    </ItemStyled>
  );
};

export default Item;
