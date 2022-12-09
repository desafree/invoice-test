import React, { FC } from "react";
import classes from "./FormData.module.css";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface Props {
  register: UseFormRegister<FieldValues>;
}

const FormData: FC<Props> = ({ register }) => {
  return (
    <div className={classes.container}>
      <div className={classes["bill-from"]}>
        <h4>Bill From</h4>
        <div className={classes.single}>
          <div className={classes.input}>
            <label htmlFor="street-from">Street Address</label>
            <input type="text" {...register("street-from")} />
          </div>
        </div>
        <div className={classes.triple}>
          <div className={classes.input}>
            <label htmlFor="city-from">City</label>
            <input type="text" {...register("city-from")} />
          </div>
          <div className={classes.input}>
            <label htmlFor="postcode-from">Post Code</label>
            <input type="text" {...register("postcode-from")} />
          </div>
          <div className={classes.input}>
            <label htmlFor="country-from">Country</label>
            <input type="text" {...register("country-from ")} />
          </div>
        </div>
      </div>
      <div className={classes["bill-to"]}>
        <h4>Bill To</h4>
        <div className={classes.single}>
          <div className={classes.input}>
            <label htmlFor="name">Client's Name</label>
            <input type="text" {...register("name")} />
          </div>
        </div>
        <div className={classes.single}>
          <div className={classes.input}>
            <label htmlFor="email">Client's Email</label>
            <input type="text" {...register("email")} />
          </div>
        </div>
        <div className={classes.single}>
          <div className={classes.input}>
            <label htmlFor="street-to">Street Address</label>
            <input type="text" {...register("street-to")} />
          </div>
        </div>
        <div className={classes.triple}>
          <div className={classes.input}>
            <label htmlFor="city-to">City</label>
            <input type="text" {...register("city-to")} />
          </div>
          <div className={classes.input}>
            <label htmlFor="postcode-to">Post Code</label>
            <input type="text" {...register("postcode-to")} />
          </div>
          <div className={classes.input}>
            <label htmlFor="country-to">Street Address</label>
            <input type="text" {...register("country-to")} />
          </div>
        </div>
        <div className={classes.double}>
          <div className={classes.input}>
            <label htmlFor="invoice-date">Invoice Date</label>
            <input type="date" {...register("invoice-date")} />
          </div>
          <div className={classes.input}>
            <label htmlFor="terms">Payment Terms</label>
            <select id="terms" {...register("terms")}>
              <option value={30}>30</option>
              <option value={7}>7</option>
              <option value={1}>1</option>
            </select>
          </div>
        </div>
        <div className={classes.double}>
          <div className={classes.input}>
            <label htmlFor="description">Project Description</label>
            <input type="text" {...register("description")} />
          </div>
          <div className={classes.input}>
            <label htmlFor="status">Payment Terms</label>
            <select id="status" {...register("status")}>
              <option value={"pending"}>pending</option>
              <option value={"draft"}>draft</option>
              <option value={"paid"}>paid</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormData;
