import React, { useState } from "react";
import classes from "./ListContent.module.scss";
import OptionsRow from "./OptionsRow";
import InvoicesList from "./InvoicesList";
import Filter from "../../../typescript/types/Filter";
import ErrorBoundary from "../../../common-components/ErrorBoundary";

const ListContent = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>("default");
  const handleFilter = (newFilter: Filter) => {
    setActiveFilter(newFilter);
  };

  return (
    <main className={classes.container}>
      <ErrorBoundary>
        <OptionsRow
          handleFilter={handleFilter}
          filter={activeFilter}
        ></OptionsRow>
      </ErrorBoundary>
      <ErrorBoundary>
        <InvoicesList activeFilter={activeFilter}></InvoicesList>
      </ErrorBoundary>
    </main>
  );
};

export default ListContent;
