import React, { useContext } from "react";
import classes from "./InvoiceContainer.module.scss";
import InvoiceData from "./InvoiceData";
import EditItemsList from "./EditItemsList";
import TotalItems from "./TotalItems";
import useInvoice from "../../../react-query/hooks/useInvoice";
import { useParams } from "react-router-dom";
import themeContext from "../../../context/themeContext";

const InvoiceContainer = () => {
  const { id } = useParams();
  const { data, isError } = useInvoice(id as string);
  const { darkMode } = useContext(themeContext);

  if (data) {
    return (
      <div
        className={`${classes.container} ${classes[darkMode ? "dark" : ""]}`}
      >
        <InvoiceData data={data}></InvoiceData>
        <EditItemsList items={data.items}></EditItemsList>
        <TotalItems total={data.total}></TotalItems>
      </div>
    );
  }

  if (isError) {
    return <p>Something went wrong</p>;
  }

  return <p>Loading...</p>;
};

export default InvoiceContainer;
