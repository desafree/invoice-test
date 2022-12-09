import React, { FC } from "react";
import classes from "./InvoicePreview.module.css";
import StatusButton from "./StatusButton";
import Invoice from "../../../typescript/interfaces/Invoice";
import formatDate from "../../../utils/formatDate";
import formatNumber from "../../../utils/formatNumber";
import Filter from "../../../typescript/types/Filter";

interface Props {
  data: Invoice;
}

const InvoicePreview: FC<Props> = ({ data }) => {
  const formattedTotal = formatNumber(data.total);
  const formattedDate = formatDate(data.paymentDue);

  return (
    <li className={classes.container}>
      <h4>
        <span>#</span>
        {data.id}
      </h4>
      <h5>{formattedDate}</h5>
      <h5>{data.clientName}</h5>
      <h3>£{formattedTotal}</h3>
      <StatusButton status={data.status as Filter}></StatusButton>
      <button>
        <img src="/images/icon-arrow-right.svg" alt="arrow right" />
      </button>
    </li>
  );
};

export default InvoicePreview;
