import React, { FC, useContext } from "react";
import themeContext from "../../../context/themeContext";
import classes from "./DeletePopUp.module.css";
import useDeleteInvoice from "../../../react-query/hooks/useDeleteInvoice";
import { useNavigate, useParams } from "react-router-dom";
import stopEventBubbling from "../../../utils/stopEventBubbling";

interface Props {
  close: () => void;
}

const DeletePopUp: FC<Props> = ({ close }) => {
  const { darkMode } = useContext(themeContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const deleteInvoice = useDeleteInvoice(id as string);

  const handleDeleteButtonClick = () => {
    deleteInvoice.mutate(id as string, {
      onSuccess: () => {
        navigate("/");
      },
    });
  };

  return (
    <div
      className={`${classes.container} ${classes[darkMode ? "dark" : ""]}`}
      onClick={close}
    >
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
