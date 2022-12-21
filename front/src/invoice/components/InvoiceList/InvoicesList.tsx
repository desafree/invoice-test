import React, { FC } from "react";
import InvoicePreview from "../InvoicePreview/InvoicePreview";
import Filter from "../../types/types/Filter";
import useInvoicesFiltered from "../../hooks/useInvoiceFiltered";
import NoInvoice from "../NoInvoice/NoInvoice";
import useTheme from "../../../_shared/hooks/useTheme";
import { InvoicesListStyled } from "./InvoicesList.styled";

interface Props {
  activeFilter: Filter;
}

const InvoicesList: FC<Props> = ({ activeFilter }) => {
  const theme = useTheme();
  const { data, isError } = useInvoicesFiltered(activeFilter);

  if (data) {
    return (
      <InvoicesListStyled dark={theme}>
        {data.length === 0 ? (
          <NoInvoice></NoInvoice>
        ) : (
          data.map((invoice) => {
            return (
              <InvoicePreview key={invoice.id} data={invoice}></InvoicePreview>
            );
          })
        )}
      </InvoicesListStyled>
    );
  }

  if (isError) {
    return <p>"Something went wrong"</p>;
  }

  return <p>Loading...</p>;
};

export default InvoicesList;
