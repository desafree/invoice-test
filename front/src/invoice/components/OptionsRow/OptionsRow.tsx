import React, { FC } from "react";
import classes from "./OptionsRow.module.scss";
import Filter from "../Filter/Filter";
import AddInvoice from "../AddInvoice/AddInvoice";
import FilterType from "../../types/types/Filter";
import useInvoicesFiltered from "../../hooks/useInvoiceFiltered";
import useTheme from "../../../_shared/hooks/useTheme";

interface Props {
  handleFilter: (newFilter: FilterType) => void;
  filter: FilterType;
}

const OptionsRow: FC<Props> = ({ handleFilter, filter }) => {
  const theme = useTheme();
  const { data } = useInvoicesFiltered(filter);

  return (
    <div className={`${classes.container} ${classes[theme]}`}>
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

export default OptionsRow;
