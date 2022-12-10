import React, { FC } from "react";
import classes from "./FormData.module.css";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { FieldErrorsImpl } from "react-hook-form";

interface Props {
  register: UseFormRegister<FieldValues>;
  errors: Partial<FieldErrorsImpl<{ [p: string]: any }>>;
}

const FormData: FC<Props> = ({ register, errors }) => {
  return (
    <div className={classes.container}>
      <div className={classes["bill-from"]}>
        <h4>Bill From</h4>
        <div className={classes.single}>
          <div className={classes.input}>
            <label htmlFor="street-from">Street Address</label>
            <input type="text" {...register("street-from")} />
            {errors["street-from"]?.message && (
              <p className={classes.error}>
                {errors["street-from"].message as string}
              </p>
            )}
          </div>
        </div>
        <div className={classes.triple}>
          <div className={classes.input}>
            <label htmlFor="city-from">City</label>
            <input type="text" {...register("city-from")} />
            {errors["city-from"]?.message && (
              <p className={classes.error}>
                {errors["city-from"].message as string}
              </p>
            )}
          </div>
          <div className={classes.input}>
            <label htmlFor="postcode-from">Post Code</label>
            <input type="text" {...register("postcode-from")} />
            {errors["postcode-from"]?.message && (
              <p className={classes.error}>
                {errors["postcode-from"].message as string}
              </p>
            )}
          </div>
          <div className={classes.input}>
            <label htmlFor="country-from">Country</label>
            <input type="text" {...register("country-from")} />
            {errors["country-from"]?.message && (
              <p className={classes.error}>
                {errors["country-from"].message as string}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className={classes["bill-to"]}>
        <h4>Bill To</h4>
        <div className={classes.single}>
          <div className={classes.input}>
            <label htmlFor="name">Client's Name</label>
            <input type="text" {...register("name")} />
            {errors["name"]?.message && (
              <p className={classes.error}>
                {errors["name"].message as string}
              </p>
            )}
          </div>
        </div>
        <div className={classes.single}>
          <div className={classes.input}>
            <label htmlFor="email">Client's Email</label>
            <input type="text" {...register("email")} />
            {errors["email"]?.message && (
              <p className={classes.error}>
                {errors["email"].message as string}
              </p>
            )}
          </div>
        </div>
        <div className={classes.single}>
          <div className={classes.input}>
            <label htmlFor="street-to">Street Address</label>
            <input type="text" {...register("street-to")} />
            {errors["street-to"]?.message && (
              <p className={classes.error}>
                {errors["street-to"].message as string}
              </p>
            )}
          </div>
        </div>
        <div className={classes.triple}>
          <div className={classes.input}>
            <label htmlFor="city-to">City</label>
            <input type="text" {...register("city-to")} />
            {errors["city-to"]?.message && (
              <p className={classes.error}>
                {errors["city-to"].message as string}
              </p>
            )}
          </div>
          <div className={classes.input}>
            <label htmlFor="postcode-to">Post Code</label>
            <input type="text" {...register("postcode-to")} />
            {errors["postcode-to"]?.message && (
              <p className={classes.error}>
                {errors["postcode-to"].message as string}
              </p>
            )}
          </div>
          <div className={classes.input}>
            <label htmlFor="country-to">Country</label>
            <input type="text" {...register("country-to")} />
            {errors["country-to"]?.message && (
              <p className={classes.error}>
                {errors["country-to"].message as string}
              </p>
            )}
          </div>
        </div>
        <div className={classes.double}>
          <div className={classes.input}>
            <label htmlFor="invoice-date">Invoice Date</label>
            <input type="date" {...register("invoice-date")} />
            {errors["invoice-date"]?.message && (
              <p className={classes.error}>
                {errors["invoice-date"].message as string}
              </p>
            )}
          </div>
          <div className={classes.input}>
            <label htmlFor="terms">Payment Terms</label>
            <select id="terms" {...register("terms")}>
              <option value={30}>30</option>
              <option value={7}>7</option>
              <option value={1}>1</option>
            </select>
            {errors["terms"]?.message && (
              <p className={classes.error}>
                {errors["terms"].message as string}
              </p>
            )}
          </div>
        </div>
        <div className={classes.double}>
          <div className={classes.input}>
            <label htmlFor="description">Project Description</label>
            <input type="text" {...register("description")} />
            {errors["description"]?.message && (
              <p className={classes.error}>
                {errors["description"].message as string}
              </p>
            )}
          </div>
          <div className={classes.input}>
            <label htmlFor="status">Payment Terms</label>
            <select id="status" {...register("status")}>
              <option value={"pending"}>pending</option>
              <option value={"draft"}>draft</option>
              <option value={"paid"}>paid</option>
            </select>
            {errors["status"]?.message && (
              <p className={classes.error}>
                {errors["status"].message as string}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormData;
