import React, { useEffect, useState } from "react";
import classes from "./AddInvoice.module.scss";
import useTrigger from "../../../../hooks/useTrigger";
import plusIcon from "./icon-plus.svg";
import FormAddLogic from "../FormAddLogic";
import PopUpWrapper from "../../../../common-components/PopUpWrapper";

const AddInvoice = () => {
  const { trigger, handleTrigger } = useTrigger();

  useEffect(() => {
    if (trigger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [trigger]);

  return (
    <>
      <button className={classes.container} onClick={handleTrigger}>
        <span>
          <img src={plusIcon} alt="plus" />
        </span>
        New Invoice
      </button>
      {trigger && (
        <PopUpWrapper>
          <FormAddLogic close={handleTrigger}></FormAddLogic>
        </PopUpWrapper>
      )}
    </>
  );
};

export default AddInvoice;
