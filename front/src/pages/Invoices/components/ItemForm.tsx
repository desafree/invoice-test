import React, { FC, useEffect } from "react";
import classes from "./Item/Item.module.scss";
import deleteIcon from "./Item/icon-delete.svg";
import {
  UseFormRegister,
  UseFieldArrayRemove,
  Control,
  useWatch,
} from "react-hook-form";
import FormData from "../../../typescript/interfaces/FormData";

interface Props {
  index: number;
  register: UseFormRegister<FormData>;
  remove: UseFieldArrayRemove;
  control: Control<FormData, any>;
}

const ItemForm: FC<Props> = ({ index, register, remove, control }) => {
  const items = useWatch({ control, name: "cart" });

  return (
    <li>
      <div className={classes.container}>
        <input
          {...register(`cart.${index}.name`, {
            required: true,
          })}
        />

        <input
          {...register(`cart.${index}.quantity`, {
            valueAsNumber: true,
            required: true,
          })}
        />
        <input
          {...register(`cart.${index}.price`, {
            valueAsNumber: true,
            required: true,
          })}
        />

        <input
          type="number"
          disabled={true}
          value={items[index].price * items[index].quantity}
        />
        <button
          onClick={() => {
            remove(index);
          }}
        >
          <img src={deleteIcon} alt="delete" />
        </button>
      </div>
    </li>
  );
};

export default ItemForm;
