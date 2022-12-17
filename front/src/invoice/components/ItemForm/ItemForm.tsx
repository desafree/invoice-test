import React, { FC } from "react";
import classes from "../Item/Item.module.scss";
import deleteIcon from "../Item/icon-delete.svg";
import { UseFieldArrayRemove, useFormContext, useWatch } from "react-hook-form";

interface Props {
  index: number;
  remove: UseFieldArrayRemove;
}

const ItemForm: FC<Props> = ({ index, remove }) => {
  const { register, formState: errors } = useFormContext();
  const quantity = useWatch({
    name: `cart.${index}.quantity`,
  });
  const price = useWatch({
    name: `cart.${index}.price`,
  });

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

        <input type="number" disabled={true} value={quantity * price} />
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
