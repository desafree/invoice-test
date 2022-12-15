import React, { FC } from "react";
import useTrigger from "../../../hooks/useTrigger";
import PopUpWrapper from "../../../common-components/PopUpWrapper";
import DeletePopUp from "./DeletePopUp";

interface Props {
  id: string;
}

const DeleteButton: FC<Props> = ({ id }) => {
  const { trigger: triggerClosePopup, handleTrigger: handleTriggerClosePopup } =
    useTrigger();
  return (
    <>
      <button onClick={handleTriggerClosePopup}>Delete</button>
      {triggerClosePopup && (
        <PopUpWrapper>
          <DeletePopUp close={handleTriggerClosePopup} id={id}></DeletePopUp>
        </PopUpWrapper>
      )}
    </>
  );
};

export default DeleteButton;
