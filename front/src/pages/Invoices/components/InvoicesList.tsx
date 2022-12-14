import React, { FC, useContext } from "react";
import classes from "./InvoicesList.module.scss";
import InvoicePreview from "./InvoicePreview/InvoicePreview";
import Filter from "../../../typescript/types/Filter";
import useInvoicesFiltered from "../../../react-query/hooks/useInvoiceFiltered";
import themeContext from "../../../context/themeContext";
import NoInvoice from "./NoInvoice/NoInvoice";

interface Props {
  activeFilter: Filter;
}

const InvoicesList: FC<Props> = ({ activeFilter }) => {
  const { darkMode } = useContext(themeContext);
  const { data, isError } = useInvoicesFiltered(activeFilter);

  if (data) {
    return (
      <ul className={`${classes.container} ${classes[darkMode ? "dark" : ""]}`}>
        {data.length === 0 ? (
          <NoInvoice></NoInvoice>
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
