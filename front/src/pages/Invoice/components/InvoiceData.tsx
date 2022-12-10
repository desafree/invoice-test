import React, { FC } from "react";
import classes from "./InvoiceData.module.css";
import Invoice from "../../../typescript/interfaces/Invoice";
import formatDate from "../../../utils/formatDate";

interface Props {
  data: Invoice;
}

const InvoiceData: FC<Props> = ({ data }) => {
  const formattedDate = formatDate(data.createdAt);
  const formattedPaymentDate = formatDate(data.paymentDue);

  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <div className={classes.id}>
          <h3>
            <span>#</span>
            {data.id}
          </h3>
        </div>
        <div className={classes.from}>
          <h5>{data.senderAddress.street}</h5>
          <h5>{data.senderAddress.city}</h5>
          <h5>{data.senderAddress.postCode}</h5>
          <h5>{data.senderAddress.country}</h5>
        </div>
      </div>
      <div className={classes.infos}>
        <div className={classes.dates}>
          <div className={classes.date}>
            <h5>Invoice Date</h5>
            <h3>{formattedDate}</h3>
          </div>
          <div className={classes.date}>
            <h5>Payment Date</h5>
            <h3>{formattedPaymentDate}</h3>
          </div>
        </div>
        <div className={classes.to}>
          <h5>Bill to</h5>
          <h3>{data.clientName}</h3>
          <h5>{data.senderAddress.street}</h5>
          <h5>{data.senderAddress.city}</h5>
          <h5>{data.senderAddress.postCode}</h5>
          <h5>{data.senderAddress.country}</h5>
        </div>
        <div className={classes.email}>
          <h5>Sent to</h5>
          <h3>{data.clientEmail}</h3>
        </div>
      </div>
    </div>
  );
};

export default InvoiceData;
