import React, { FC } from "react";
import useTrigger from "../../../_shared/hooks/useTrigger";
import PopUpWrapper from "../../../_shared/components/PopUpWrapper/PopUpWrapper";
import FormEditLogic from "../FormEditContainer/FormEditContainer";

interface Props {
  id: string;
}

const EditButton: FC<Props> = ({ id }) => {
  const { trigger: triggerForm, handleTrigger: handleTriggerForm } =
    useTrigger();

  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleTriggerForm();
        }}
      >
        Edit
      </button>
      {triggerForm && (
        <PopUpWrapper>
          <FormEditLogic close={handleTriggerForm} id={id}></FormEditLogic>
        </PopUpWrapper>
      )}
    </>
  );
};

export default EditButton;
