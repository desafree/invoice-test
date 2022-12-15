import React, { FC } from "react";
import classes from "./Filter.module.scss";
import FilterType from "../../../typescript/types/Filter";

interface Props {
  onChange: (newFilter: FilterType) => void;
}

const Filter: FC<Props> = ({ onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    /*    as antipattern!*/
    onChange(event.target.value as FilterType);
  };

  return (
    <select
      name="status"
      id="status"
      className={classes.container}
      onChange={handleChange}
      defaultValue="default"
    >
      <option value="default">Filter by status: default</option>
      <option value="paid">Paid</option>
      <option value="pending">Pending</option>
      <option value="draft">Draft</option>
    </select>
  );
};

export default Filter;
