import React, { FC, useContext } from "react";
import classes from "./InvoicePreview.module.css";
import StatusButton from "./StatusButton";
import Invoice from "../../../typescript/interfaces/Invoice";
import formatDate from "../../../utils/formatDate";
import formatNumber from "../../../utils/formatNumber";
import Filter from "../../../typescript/types/Filter";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import themeContext from "../../../context/themeContext";

interface Props {
  data: Invoice;
}

const InvoicePreview: FC<Props> = ({ data }) => {
  const { darkMode } = useContext(themeContext);
  const formattedTotal = useMemo(() => formatNumber(data.total), [data.total]);
  const formattedDate = useMemo(
    () => formatDate(data.paymentDue),
    [data.paymentDue]
  );

  return (
    <li className={`${classes.container} ${classes[darkMode ? "dark" : ""]}`}>
      <h4>
        <span>#</span>
        {data.id}
      </h4>
      <h5>{formattedDate}</h5>
      <h5>{data.clientName}</h5>
      <h3>£{formattedTotal}</h3>
      <StatusButton status={data.status as Filter}></StatusButton>
      <Link to={`/${data.id}`}>
        <img src="/images/icon-arrow-right.svg" alt="arrow right" />
      </Link>
    </li>
  );
};

export default InvoicePreview;
