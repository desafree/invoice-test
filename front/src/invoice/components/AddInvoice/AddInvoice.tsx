import React, { useEffect, useLayoutEffect, useState } from "react";
import classes from "./AddInvoice.module.scss";
import useTrigger from "../../../_shared/hooks/useTrigger";
import plusIcon from "./icon-plus.svg";
import FormAddLogic from "../FormAddLogic/FormAddLogic";
import PopUpWrapper from "../../../_shared/components/PopUpWrapper/PopUpWrapper";

const AddInvoice = () => {
  const { trigger, handleTrigger } = useTrigger();

  useLayoutEffect(() => {
    if (trigger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
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
