import React from "react";
import classes from "./OptionsDetail.module.scss";
import StatusButton from "../../../common-components/StatusButton";
import useInvoice from "../../../react-query/hooks/useInvoice";
import { useParams } from "react-router-dom";
import useUpdateInvoice from "../../../react-query/hooks/useUpdateInvoice";
import useTheme from "../../../hooks/useTheme";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

const OptionsDetail = () => {
  const theme = useTheme();
  const { id } = useParams<{ id: string }>();

  const { data, isError } = useInvoice(id!);
  const updateInvoice = useUpdateInvoice();

  const handlePaidButtonClick = () => {
    if (data) {
      updateInvoice.mutate({ id: id!, invoice: { ...data, status: "paid" } });
    }
  };

  if (data) {
    return (
      <div className={`${classes.container} ${classes[theme]}`}>
        <h5>Status</h5>
        <StatusButton status={data.status}></StatusButton>
        <EditButton id={id!}></EditButton>
        <DeleteButton id={id!}></DeleteButton>
        <button onClick={handlePaidButtonClick}>Mark as Paid</button>
      </div>
    );
  }

  if (isError) {
    return <p>Something went wrong</p>;
  }

  return <p>Loading...</p>;
};

export default OptionsDetail;
