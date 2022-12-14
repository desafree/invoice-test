import React, { FC, useEffect } from "react";
import classes from "./Item/Item.module.scss";
import deleteIcon from "./Item/icon-delete.svg";
import {
  FieldValues,
  UseFormRegister,
  UseFieldArrayRemove,
  Control,
  UseFormGetValues,
  FieldErrorsImpl,
} from "react-hook-form";
import ItemType from "../../../typescript/interfaces/Item";

interface Props {
  index: number;
  register: UseFormRegister<FieldValues>;
  remove: UseFieldArrayRemove;
  control: Control<FieldValues, any>;
  getValues: UseFormGetValues<FieldValues>;
  errors: Partial<FieldErrorsImpl<{ [p: string]: any }>>;
  watchCart: ItemType[];
}

const ItemForm: FC<Props> = ({
  index,
  register,
  remove,
  getValues,
  errors,
  watchCart,
}) => {
  useEffect(() => {
    console.log(watchCart[index]);
  }, watchCart);

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
          {...register(`cart.${index}.total`, {
            valueAsNumber: true,
            required: true,
          })}
          value={watchCart[index].price * watchCart[index].quantity}
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
