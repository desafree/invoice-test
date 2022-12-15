import React, { FC } from "react";
import classes from "./Filter.module.scss";
import FilterType from "../../types/types/Filter";
import sidebar from "../../../_shared/components/Sidebar/Sidebar";

interface Props {
  onChange: (newFilter: FilterType) => void;
}

type SelectOption<Values> = { value: Values; label: string };

type SelectProps<Values extends string> = {
  options: SelectOption<Values>[];
  handleChange: (e: React.ChangeEvent<{ value: Values }>) => void;
};

function Select<Values extends string>({
  options,
  handleChange,
}: SelectProps<Values>) {
  return (
    <select
      name="status"
      id="status"
      className={classes.container}
      onChange={
        handleChange as unknown as React.ChangeEventHandler<HTMLSelectElement>
      }
      defaultValue="default"
    >
      {options.map(({ value, label }) => (
        <option value={value}>{label}</option>
      ))}
    </select>
  );
}

const Filter: FC<Props> = ({ onChange }) => {
  const options: SelectOption<FilterType>[] = [
    { value: "default", label: "Filter by status: default" },
    { value: "paid", label: "Paid" },
    { value: "pending", label: "Pending" },
    { value: "draft", label: "Draft" },
  ];

  return (
    <Select options={options} handleChange={(e) => onChange(e.target.value)} />
  );
};

export default Filter;
