import React, { FC } from "react";
import classes from "./InvoicesList.module.css";
import InvoicePreview from "./InvoicePreview";
import Filter from "../../../typescript/types/Filter";
import useInvoicesFiltered from "../../../react-query/hooks/useInvoiceFiltered";

interface Props {
  activeFilter: Filter;
}

const InvoicesList: FC<Props> = ({ activeFilter }) => {
  const { data, isError } = useInvoicesFiltered(activeFilter);

  if (data) {
    return (
      <ul className={classes.container}>
        {data.length === 0 ? (
          <p>No invoices...</p>
        ) : (
          data.map((invoice) => {
            return (
              <InvoicePreview key={invoice.id} data={invoice}></InvoicePreview>
            );
          })
        )}
      </ul>
    );
  }

  if (isError) {
    return <p>"Something went wrong"</p>;
  }

  return <p>Loading...</p>;
};

export default InvoicesList;
