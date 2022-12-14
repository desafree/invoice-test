import React, { FC, useContext } from "react";
import useGoHome from "../../../hooks/useGoHome";
import classes from "./DeletePopUp.module.scss";
import useDeleteInvoice from "../../../react-query/hooks/useDeleteInvoice";
import stopEventBubbling from "../../../utils/stopEventBubbling";
import useTheme from "../../../hooks/useTheme";

interface Props {
  close: () => void;
  id: string;
}

const DeletePopUp: FC<Props> = ({ close, id }) => {
  const theme = useTheme();
  const goHome = useGoHome();
  const deleteInvoice = useDeleteInvoice();

  const handleDeleteButtonClick = () => {
    deleteInvoice.mutate(id as string, {
      onSuccess: goHome,
    });
  };

  return (
    <div className={`${classes.container} ${classes[theme]}`} onClick={close}>
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
        <div className={classes.buttons}>
          <button onClick={close}>Cancel</button>
          <button onClick={handleDeleteButtonClick}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopUp;
