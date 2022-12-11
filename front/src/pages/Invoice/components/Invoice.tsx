import React from "react";
import classes from "./Invoice.module.css";
import InvoiceData from "./InvoiceData";
import ItemsList from "./ItemsList";
import Total from "./Total";
import useInvoice from "../../../react-query/hooks/useInvoice";
import { useParams } from "react-router-dom";

const Invoice = () => {
  const { id } = useParams();
  const { data, isError } = useInvoice(id as string);

  if (data) {
    return (
      <div className={classes.container}>
        <InvoiceData data={data}></InvoiceData>
        <ItemsList items={data.items}></ItemsList>
        <Total total={data.total}></Total>
      </div>
    );
  }

  if (isError) {
    return <p>Something went wrong</p>;
  }

  return <p>Loading...</p>;
};

export default Invoice;
