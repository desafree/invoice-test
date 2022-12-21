import React, { FC, useContext } from "react";
import useGoHome from "../../../_shared/hooks/useGoHome";
import useDeleteInvoice from "../../hooks/useDeleteInvoice";
import stopEventBubbling from "../../../_shared/utils/stopEventBubbling";
import useTheme from "../../../_shared/hooks/useTheme";

interface Props {
  close: () => void;
  id: string;
  className?: string;
  dark?: string;
}

const DeletePopUp: FC<Props> = ({ close, id, className }) => {
  const goHome = useGoHome();
  const deleteInvoice = useDeleteInvoice();

  const handleDeleteButtonClick = () => {
    deleteInvoice.mutate(id, {
      onSuccess: goHome,
    });
  };

  return (
    <div className={className} onClick={close}>
      <div
        onClick={(e) => {
          stopEventBubbling(e);
        }}
      >
        <h3>Confirm Deletion</h3>
        <p>
          Are you sure you want to delete invoice #{id}? This action cannot be
          undone.
        </p>
        <div className="buttons">
          <button onClick={close}>Cancel</button>
          <button onClick={handleDeleteButtonClick}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopUp;
