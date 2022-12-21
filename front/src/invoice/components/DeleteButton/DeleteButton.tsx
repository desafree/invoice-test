import React, { FC } from "react";
import useTrigger from "../../../_shared/hooks/useTrigger";
import PopUpWrapper from "../../../_shared/components/PopUpWrapper/PopUpWrapper";
import { DeletePopUpStyled } from "../DeletePopUp/DeletePopUp.styled";
import useTheme from "../../../_shared/hooks/useTheme";

interface Props {
  id: string;
}

const DeleteButton: FC<Props> = ({ id }) => {
  const { trigger: triggerClosePopup, handleTrigger: handleTriggerClosePopup } =
    useTrigger();

  const dark = useTheme();

  return (
    <>
      <button onClick={handleTriggerClosePopup}>Delete</button>
      {triggerClosePopup && (
        <PopUpWrapper>
          <DeletePopUpStyled
            close={handleTriggerClosePopup}
            id={id}
            dark={dark}
          ></DeletePopUpStyled>
        </PopUpWrapper>
      )}
    </>
  );
};

export default DeleteButton;
