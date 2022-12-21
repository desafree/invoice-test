import React, { FC } from "react";
import FilterType from "../../types/types/Filter";
import useInvoicesFiltered from "../../hooks/useInvoiceFiltered";
import useTheme from "../../../_shared/hooks/useTheme";
import { AddInvoiceStyled } from "../AddInvoice/AddInvoice.styled";
import { FilterStyled } from "../Filter/Filter.styled";
import { OptionsRowStyled } from "./OptionsRow.styled";

interface Props {
  handleFilter: (newFilter: FilterType) => void;
  filter: FilterType;
}

const OptionsRow: FC<Props> = ({ handleFilter, filter }) => {
  const theme = useTheme();
  const { data } = useInvoicesFiltered(filter);

  return (
    <OptionsRowStyled dark={theme}>
      <div className="title">
        <h2>Invoices</h2>
        <p>
          {data?.length || 0 > 0
            ? `There are ${data?.length} total invoices`
            : "No invoices"}
        </p>
      </div>
      <FilterStyled onChange={handleFilter}></FilterStyled>
      <AddInvoiceStyled></AddInvoiceStyled>
    </OptionsRowStyled>
  );
};

export default OptionsRow;
