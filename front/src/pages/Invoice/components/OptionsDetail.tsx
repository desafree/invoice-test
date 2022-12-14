import React, { useContext, useState } from "react";
import classes from "./OptionsDetail.module.scss";
import StatusButton from "../../../common-components/StatusButton";
import useInvoice from "../../../react-query/hooks/useInvoice";
import { useParams } from "react-router-dom";
import useUpdateInvoice from "../../../react-query/hooks/useUpdateInvoice";
import { createPortal } from "react-dom";
import DeletePopUp from "./DeletePopUp";
import FormEditLogic from "./FormEditLogic";
import useTheme from "../../../hooks/useTheme";
import useTrigger from "../../../hooks/useTrigger";
import PopUpWrapper from "../../../common-components/PopUpWrapper";

const OptionsDetail = () => {
  const theme = useTheme();
  const { id } = useParams<{ id: string }>();

  const { data, isError } = useInvoice(id!);
  const updateInvoice = useUpdateInvoice();

  const { trigger: triggerForm, handleTrigger: handleTriggerForm } =
    useTrigger();
  const { trigger: triggerClosePopup, handleTrigger: handleTriggerClosePopup } =
    useTrigger();

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
        <button onClick={handleTriggerForm}>Edit</button>
        <button onClick={handleTriggerClosePopup}>Delete</button>
        <button onClick={handlePaidButtonClick}>Mark as Paid</button>
        {triggerForm && (
          <PopUpWrapper>
            <FormEditLogic close={handleTriggerForm} id={id!}></FormEditLogic>
          </PopUpWrapper>
        )}
        {triggerClosePopup && (
          <PopUpWrapper>
            <DeletePopUp close={handleTriggerClosePopup} id={id!}></DeletePopUp>
          </PopUpWrapper>
        )}
      </div>
    );
  }

  if (isError) {
    return <p>Something went wrong</p>;
  }

  return <p>Loading...</p>;
};

export default OptionsDetail;
