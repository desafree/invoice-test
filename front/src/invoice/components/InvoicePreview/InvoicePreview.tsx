import React, { FC } from "react";
import StatusButton from "../StatusButton/StatusButton";
import Invoice from "../../types/interfaces/Invoice";
import formatDate from "../../../_shared/utils/formatDate";
import formatNumber from "../../../_shared/utils/formatNumber";
import { Link } from "react-router-dom";
import arrowIcon from "./icon-arrow-right.svg";
import useTheme from "../../../_shared/hooks/useTheme";
import { InvoicePreviewStyled } from "./InvocePreview.styled";

interface Props {
  data: Invoice;
}

const InvoicePreview: FC<Props> = ({ data }) => {
  const theme = useTheme();
  const formattedTotal = formatNumber(data.total);
  const formattedDate = formatDate(data.paymentDue);

  return (
    <InvoicePreviewStyled dark={theme}>
      <h4>
        <span>#</span>
        {data.id}
      </h4>
      <h5>{formattedDate}</h5>
      <h5>{data.clientName}</h5>
      <h3>£{formattedTotal}</h3>
      <StatusButton status={data.status}></StatusButton>
      <Link to={`/${data.id}`}>
        <img src={arrowIcon} alt="arrow right" />
      </Link>
    </InvoicePreviewStyled>
  );
};

export default InvoicePreview;
