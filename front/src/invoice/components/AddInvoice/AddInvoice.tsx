import React, { FC, useLayoutEffect } from "react";
import useTrigger from "../../../_shared/hooks/useTrigger";
import plusIcon from "./icon-plus.svg";
import FormAddContainer from "../FormAddContainer/FormAddContainer";
import PopUpWrapper from "../../../_shared/components/PopUpWrapper/PopUpWrapper";

interface Props {
  className?: string;
}

const AddInvoice: FC<Props> = ({ className }) => {
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

  console.log(trigger);

  return (
    <>
      <button
        className={className}
        onClick={(e) => {
          e.stopPropagation();
          handleTrigger();
        }}
      >
        <span>
          <img src={plusIcon} alt="plus" />
        </span>
        New Invoice
      </button>
      {trigger && (
        <PopUpWrapper>
          <FormAddContainer close={handleTrigger}></FormAddContainer>
        </PopUpWrapper>
      )}
    </>
  );
};

export default AddInvoice;
