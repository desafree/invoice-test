import React, { useState } from "react";
import classes from "./Content.module.css";
import Options from "./Options";
import InvoicesList from "./InvoicesList";
import Filter from "../../../typescript/types/Filter";

const Content = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>("default");
  const handleFilter = (newFilter: Filter) => {
    setActiveFilter(newFilter);
  };

  return (
    <main className={classes.container}>
      <Options handleFilter={handleFilter} filter={activeFilter}></Options>
      <InvoicesList activeFilter={activeFilter}></InvoicesList>
    </main>
  );
};

export default Content;
