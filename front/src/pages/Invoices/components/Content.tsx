import React, { useState } from "react";
import classes from "./Content.module.css";
import Options from "./Options";
import InvoicesList from "./InvoicesList";
import Filter from "../../../typescript/types/Filter";
import ErrorBoundary from "../../../components/ErrorBoundary";

const Content = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>("default");
  const handleFilter = (newFilter: Filter) => {
    setActiveFilter(newFilter);
  };

  return (
    <main className={classes.container}>
      <ErrorBoundary>
        <Options handleFilter={handleFilter} filter={activeFilter}></Options>
      </ErrorBoundary>
      <ErrorBoundary>
        <InvoicesList activeFilter={activeFilter}></InvoicesList>
      </ErrorBoundary>
    </main>
  );
};

export default Content;
