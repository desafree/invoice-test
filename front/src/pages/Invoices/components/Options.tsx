import React, { FC, useContext } from "react";
import classes from "./Options.module.css";
import Filter from "./Filter";
import AddInvoice from "./AddInvoice";
import FilterType from "../../../typescript/types/Filter";
import useInvoicesFiltered from "../../../react-query/hooks/useInvoiceFiltered";
import themeContext from "../../../context/themeContext";

interface Props {
  handleFilter: (newFilter: FilterType) => void;
  filter: FilterType;
}

const Options: FC<Props> = ({ handleFilter, filter }) => {
  const { darkMode } = useContext(themeContext);
  const { data } = useInvoicesFiltered(filter);

  return (
    <div className={`${classes.container} ${classes[darkMode ? "dark" : ""]}`}>
      <div className={classes.title}>
        <h2>Invoices</h2>
        <p>
          {data?.length || 0 > 0
            ? `There are ${data?.length} total invoices`
            : "No invoices"}
        </p>
      </div>
      <Filter onChange={handleFilter}></Filter>
      <AddInvoice></AddInvoice>
    </div>
  );
};

export default Options;
