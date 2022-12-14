import React, { FC } from "react";
import classes from "./AddFormData.module.scss";
import { UseFormRegister } from "react-hook-form";
import { FieldErrorsImpl } from "react-hook-form";
import FormData from "../../../typescript/interfaces/FormData";
import { Control } from "react-hook-form";
import Input from "../../../common-components/Input";
import Select from "../../../common-components/Select";

interface Props {
  register: UseFormRegister<FormData>;
  errors: Partial<FieldErrorsImpl<{ [p: string]: any }>>;
}

const AddFormData: FC<Props> = ({ register, errors }) => {
  return (
    <div className={classes.container}>
      <div className={classes["bill-from"]}>
        <h4>Bill From</h4>
        <div className={classes.single}>
          <Input
            name="street-from"
            register={register}
            errors={errors}
            type="text"
          ></Input>
        </div>
        <div className={classes.triple}>
          <Input
            name="city-from"
            register={register}
            errors={errors}
            type="text"
          ></Input>
          <Input
            name="postcode-from"
            register={register}
            errors={errors}
            type="text"
          ></Input>
          <Input
            name="country-from"
            register={register}
            errors={errors}
            type="text"
          ></Input>
        </div>
      </div>
      <div className={classes["bill-to"]}>
        <h4>Bill To</h4>
        <div className={classes.single}>
          <Input
            name="name"
            register={register}
            errors={errors}
            type="text"
          ></Input>
        </div>
        <div className={classes.single}>
          <Input
            name="email"
            register={register}
            errors={errors}
            type="text"
          ></Input>
        </div>
        <div className={classes.single}>
          <Input
            name="street-to"
            register={register}
            errors={errors}
            type="text"
          ></Input>
        </div>
        <div className={classes.triple}>
          <Input
            name="city-to"
            register={register}
            errors={errors}
            type="text"
          ></Input>
          <Input
            name="postcode-to"
            register={register}
            errors={errors}
            type="text"
          ></Input>
          <Input
            name="country-to"
            register={register}
            errors={errors}
            type="text"
          ></Input>
        </div>
        <div className={classes.double}>
          <Input
            name="invoice-date"
            register={register}
            errors={errors}
            type="date"
          ></Input>
          <Select
            name="terms"
            register={register}
            errors={errors}
            values={[30, 7, 1]}
          ></Select>
        </div>
        <div className={classes.double}>
          <Input
            name="description"
            register={register}
            errors={errors}
            type="text"
          ></Input>
          <Select
            name="status"
            register={register}
            errors={errors}
            values={["pending", "draft", "paid"]}
          ></Select>
        </div>
      </div>
    </div>
  );
};

export default AddFormData;
