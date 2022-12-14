import React, { useEffect, useState } from "react";
import classes from "./AddInvoice.module.scss";
import { createPortal } from "react-dom";
import AddInvoiceForm from "../AddInvoiceForm";
import plusIcon from "./icon-plus.svg";

const AddInvoice = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive((prevState) => !prevState);
  };

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [active]);

  return (
    <>
      <button className={classes.container} onClick={handleClick}>
        <span>
          <img src={plusIcon} alt="plus" />
        </span>
        New Invoice
      </button>
      {active &&
        createPortal(
          <AddInvoiceForm close={handleClick}></AddInvoiceForm>,
          document.getElementById("pop-up")!
        )}
    </>
  );
};

export default AddInvoice;
