import React, { useState } from "react";
import classes from "./Options.module.css";
import StatusButton from "../../Invoices/components/StatusButton";
import useInvoice from "../../../react-query/hooks/useInvoice";
import { useNavigate, useParams } from "react-router-dom";
import Filter from "../../../typescript/types/Filter";
import useDeleteInvoice from "../../../react-query/hooks/useDeleteInvoice";
import useUpdateInvoice from "../../../react-query/hooks/useUpdateInvoice";
import { createPortal } from "react-dom";
import InvoiceForm from "./InvoiceForm";

const Options = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isError } = useInvoice(id as string);
  const deleteInvoice = useDeleteInvoice(id as string);
  const updateInvoice = useUpdateInvoice();
  const [active, setActive] = useState(false);

  const handleDeleteButtonClick = () => {
    deleteInvoice.mutate(id as string, {
      onSuccess: () => {
        navigate("/");
      },
    });
  };

  const handlePaidButtonClick = () => {
    if (data && id) {
      updateInvoice.mutate({ id: id, invoice: { ...data, status: "paid" } });
    }
  };

  const handleClick = () => {
    setActive((prevState) => !prevState);
  };

  if (data) {
    return (
      <div className={classes.container}>
        <h5>Status</h5>
        <StatusButton status={data.status as Filter}></StatusButton>
        <button onClick={handleClick}>Edit</button>
        <button onClick={handleDeleteButtonClick}>Delete</button>
        <button onClick={handlePaidButtonClick}>Mark as Paid</button>
        {active &&
          createPortal(
            <InvoiceForm close={handleClick}></InvoiceForm>,
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

export default Options;
