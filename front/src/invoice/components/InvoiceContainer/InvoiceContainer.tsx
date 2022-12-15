import React, { useContext } from "react";
import classes from "./InvoiceContainer.module.scss";
import InvoiceData from "../InvoiceData/InvoiceData";
import EditItemsList from "../EditItemsList/EditItemsList";
import TotalItems from "../TotalItems/TotalItems";
import useInvoice from "../../hooks/useInvoice";
import { useParams } from "react-router-dom";
import useTheme from "../../../_shared/hooks/useTheme";

const InvoiceContainer = () => {
  const { id } = useParams();
  const { data, isError } = useInvoice(id!);
  const theme = useTheme();

  if (data) {
    return (
      <div className={`${classes.container} ${classes[theme]}`}>
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
