import React, { useState } from "react";
import OptionsRow from "../OptionsRow/OptionsRow";
import InvoicesList from "../InvoiceList/InvoicesList";
import Filter from "../../types/types/Filter";
import ErrorBoundary from "../../../_shared/components/ErrorBooundary/ErrorBoundary";
import { ListContentStyled } from "./ListContent.styled";

const ListContent = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>("default");
  const handleFilter = (newFilter: Filter) => {
    setActiveFilter(newFilter);
  };

  return (
    <ListContentStyled>
      <ErrorBoundary>
        <OptionsRow
          handleFilter={handleFilter}
          filter={activeFilter}
        ></OptionsRow>
      </ErrorBoundary>
      <ErrorBoundary>
        <InvoicesList activeFilter={activeFilter}></InvoicesList>
      </ErrorBoundary>
    </ListContentStyled>
  );
};

export default ListContent;
