import React from "react";
import StatusButton from "../StatusButton/StatusButton";
import useInvoice from "../../hooks/useInvoice";
import { useParams } from "react-router-dom";
import useUpdateInvoice from "../../hooks/useUpdateInvoice";
import useTheme from "../../../_shared/hooks/useTheme";
import EditButton from "../EditButton/EditButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import { OptionsDetailStyled } from "./OptionsDetail.styled";

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
      <OptionsDetailStyled dark={theme}>
        <h5>Status</h5>
        <StatusButton status={data.status}></StatusButton>
        <EditButton id={id!}></EditButton>
        <DeleteButton id={id!}></DeleteButton>
        <button onClick={handlePaidButtonClick}>Mark as Paid</button>
      </OptionsDetailStyled>
    );
  }

  if (isError) {
    return <p>Something went wrong</p>;
  }

  return <p>Loading...</p>;
};

export default OptionsDetail;
