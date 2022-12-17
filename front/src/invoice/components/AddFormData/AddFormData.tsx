import React from "react";
import classes from "./AddFormData.module.scss";
import Input from "../../../_shared/form/Input/Input";
import Select from "../../../_shared/form/Select/Select";

const AddFormData = () => {
  return (
    <div className={classes.container}>
      <div className={classes["bill-from"]}>
        <h4>Bill From</h4>
        <div className={classes.single}>
          <Input name="street-from" type="text"></Input>
        </div>
        <div className={classes.triple}>
          <Input name="city-from" type="text"></Input>
          <Input name="postcode-from" type="text"></Input>
          <Input name="country-from" type="text"></Input>
        </div>
      </div>
      <div className={classes["bill-to"]}>
        <h4>Bill To</h4>
        <div className={classes.single}>
          <Input name="name" type="text"></Input>
        </div>
        <div className={classes.single}>
          <Input name="email" type="text"></Input>
        </div>
        <div className={classes.single}>
          <Input name="street-to" type="text"></Input>
        </div>
        <div className={classes.triple}>
          <Input name="city-to" type="text"></Input>
          <Input name="postcode-to" type="text"></Input>
          <Input name="country-to" type="text"></Input>
        </div>
        <div className={classes.double}>
          <Input name="invoice-date" type="date"></Input>
          <Select name="terms" values={[30, 7, 1]}></Select>
        </div>
        <div className={classes.double}>
          <Input name="description" type="text"></Input>
          <Select name="status" values={["pending", "draft", "paid"]}></Select>
        </div>
      </div>
    </div>
  );
};

export default AddFormData;
