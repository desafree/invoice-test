import React, { FC } from "react";
import useTrigger from "../../../hooks/useTrigger";
import PopUpWrapper from "../../../common-components/PopUpWrapper";
import FormEditLogic from "./FormEditLogic";

interface Props {
  id: string;
}

const EditButton: FC<Props> = ({ id }) => {
  const { trigger: triggerForm, handleTrigger: handleTriggerForm } =
    useTrigger();

  return (
    <>
      <button onClick={handleTriggerForm}>Edit</button>
      {triggerForm && (
        <PopUpWrapper>
          <FormEditLogic close={handleTriggerForm} id={id}></FormEditLogic>
        </PopUpWrapper>
      )}
    </>
  );
};

export default EditButton;