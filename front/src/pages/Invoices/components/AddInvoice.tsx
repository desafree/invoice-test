import React, { useState } from "react";
import classes from "./AddInvoice.module.css";
import { createPortal } from "react-dom";
import InvoiceForm from "./InvoiceForm";

const AddInvoice = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive((prevState) => !prevState);
  };

  return (
    <>
      <button className={classes.container} onClick={handleClick}>
        <span>
          <img src="/images/icon-plus.svg" alt="plus" />
        </span>
        New Invoice
      </button>
      {active &&
        createPortal(
          <InvoiceForm close={handleClick}></InvoiceForm>,
          document.getElementById("pop-up")!
        )}
    </>
  );
};

export default AddInvoice;
