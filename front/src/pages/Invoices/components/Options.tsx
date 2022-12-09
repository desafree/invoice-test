import React, { FC } from "react";
import classes from "./Options.module.css";
import Filter from "./Filter";
import AddInvoice from "./AddInvoice";
import FilterType from "../../../typescript/types/Filter";
import useInvoicesFiltered from "../../../react-query/hooks/useInvoiceFiltered";

interface Props {
  handleFilter: (newFilter: FilterType) => void;
  filter: FilterType;
}

const Options: FC<Props> = ({ handleFilter, filter }) => {
  const { data } = useInvoicesFiltered(filter);

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h2>Invoices</h2>
        <p>There are {data?.length} total invoices</p>
      </div>
      <Filter onChange={handleFilter}></Filter>
      <AddInvoice></AddInvoice>
    </div>
  );
};

export default Options;
