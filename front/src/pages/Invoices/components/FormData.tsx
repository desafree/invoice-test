import React from "react";
import classes from "./FormData.module.css";
import Input from "../../../components/Input";
import Select from "../../../components/Select";

const FormData = () => {
  return (
    <div className={classes.container}>
      <div className={classes["bill-from"]}>
        <h4>Bill From</h4>
        <div className={classes.single}>
          <Input></Input>
        </div>
        <div className={classes.triple}>
          <Input></Input>
          <Input></Input>
          <Input></Input>
        </div>
      </div>
      <div className={classes["bill-to"]}>
        <h4>Bill To</h4>
        <div className={classes.single}>
          <Input></Input>
        </div>
        <div className={classes.single}>
          <Input></Input>
        </div>
        <div className={classes.single}>
          <Input></Input>
        </div>
        <div className={classes.triple}>
          <Input></Input>
          <Input></Input>
          <Input></Input>
        </div>
        <div className={classes.double}>
          <Input></Input>
          <Select></Select>
        </div>
        <div className={classes.single}>
          <Input></Input>
        </div>
      </div>
    </div>
  );
};

export default FormData;
