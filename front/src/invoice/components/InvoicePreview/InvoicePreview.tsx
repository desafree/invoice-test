import React, { FC, useContext } from "react";
import classes from "./InvoicePreview.module.scss";
import StatusButton from "../StatusButton/StatusButton";
import Invoice from "../../types/interfaces/Invoice";
import formatDate from "../../../_shared/utils/formatDate";
import formatNumber from "../../../_shared/utils/formatNumber";
import Filter from "../../types/types/Filter";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import themeContext from "../../../_shared/styles/theme/themeContext";
import arrowIcon from "./icon-arrow-right.svg";
import useTheme from "../../../_shared/hooks/useTheme";

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
