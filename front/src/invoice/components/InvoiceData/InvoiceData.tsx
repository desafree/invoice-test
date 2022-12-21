import React, { FC } from "react";
import Invoice from "../../types/interfaces/Invoice";
import formatDate from "../../../_shared/utils/formatDate";
import { InvoiceDataStyled } from "./InvoiceData.styled";

interface Props {
  data: Invoice;
}

const InvoiceData: FC<Props> = ({ data }) => {
  const formattedDate = formatDate(data.createdAt);
  const formattedPaymentDate = formatDate(data.paymentDue);

  return (
    <InvoiceDataStyled>
      <div className="row">
        <div className="id">
          <h3>
            <span>#</span>
            {data.id}
          </h3>
        </div>
        <div className="from">
          <h5>{data.senderAddress.street}</h5>
          <h5>{data.senderAddress.city}</h5>
          <h5>{data.senderAddress.postCode}</h5>
          <h5>{data.senderAddress.country}</h5>
        </div>
      </div>
      <div className="infos">
        <div className="dates">
          <div className="date">
            <h5>Invoice Date</h5>
            <h3>{formattedDate}</h3>
          </div>
          <div className="date">
            <h5>Payment Date</h5>
            <h3>{formattedPaymentDate}</h3>
          </div>
        </div>
        <div className="to">
          <h5>Bill to</h5>
          <h3>{data.clientName}</h3>
          <h5>{data.senderAddress.street}</h5>
          <h5>{data.senderAddress.city}</h5>
          <h5>{data.senderAddress.postCode}</h5>
          <h5>{data.senderAddress.country}</h5>
        </div>
        <div className="email">
          <h5>Sent to</h5>
          <h3>{data.clientEmail}</h3>
        </div>
      </div>
    </InvoiceDataStyled>
  );
};

export default InvoiceData;
