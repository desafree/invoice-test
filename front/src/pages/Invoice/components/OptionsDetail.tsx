import React, { useContext, useState } from "react";
import classes from "./OptionsDetail.module.scss";
import StatusButton from "../../../common-components/StatusButton";
import useInvoice from "../../../react-query/hooks/useInvoice";
import { useNavigate, useParams } from "react-router-dom";
import Filter from "../../../typescript/types/Filter";
import useDeleteInvoice from "../../../react-query/hooks/useDeleteInvoice";
import useUpdateInvoice from "../../../react-query/hooks/useUpdateInvoice";
import { createPortal } from "react-dom";
import EditInvoiceForm from "./EditInvoiceForm";
import themeContext from "../../../context/themeContext";
import DeletePopUp from "./DeletePopUp";

const OptionsDetail = () => {
  const { darkMode } = useContext(themeContext);
  const { id } = useParams<{ id: string }>();
  const { data, isError } = useInvoice(id!);
  const updateInvoice = useUpdateInvoice();
  const [active, setActive] = useState(false);
  const [popUp, setPopup] = useState(false);

  const handlePaidButtonClick = () => {
    if (data && id) {
      updateInvoice.mutate({ id: id, invoice: { ...data, status: "paid" } });
    }
  };

  const handleClick = () => {
    setActive((prevState) => !prevState);
  };

  const handleClickDelete = () => {
    setPopup((prevState) => !prevState);
  };

  if (data) {
    return (
      <div
        className={`${classes.container} ${classes[darkMode ? "dark" : ""]}`}
      >
        <h5>Status</h5>
        <StatusButton status={data.status}></StatusButton>
        <button onClick={handleClick}>Edit</button>
        <button onClick={handleClickDelete}>Delete</button>
        <button onClick={handlePaidButtonClick}>Mark as Paid</button>
        {active &&
          createPortal(
            <EditInvoiceForm close={handleClick}></EditInvoiceForm>,
            document.getElementById("pop-up")!
          )}
        {popUp &&
          createPortal(
            <DeletePopUp close={handleClickDelete}></DeletePopUp>,
            document.getElementById("pop-up")!
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
