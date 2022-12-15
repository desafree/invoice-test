import React, { FC, useContext } from "react";
import classes from "./InvoicePreview.module.scss";
import StatusButton from "../../../../common-components/StatusButton";
import Invoice from "../../../../typescript/interfaces/Invoice";
import formatDate from "../../../../utils/formatDate";
import formatNumber from "../../../../utils/formatNumber";
import Filter from "../../../../typescript/types/Filter";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import themeContext from "../../../../context/themeContext";
import arrowIcon from "./icon-arrow-right.svg";
import useTheme from "../../../../hooks/useTheme";

interface Props {
  data: Invoice;
}

const InvoicePreview: FC<Props> = ({ data }) => {
  const theme = useTheme();
  const formattedTotal = formatNumber(data.total);
  const formattedDate = formatDate(data.paymentDue);

  return (
    <li className={`${classes.container} ${classes[theme]}`}>
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
    </li>
  );
};

export default InvoicePreview;
