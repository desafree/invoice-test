import { useContext } from "react";
import themeContext from "../../../../context/themeContext";
import classes from "./NoInvoice.module.scss";
import illustrationIcon from "./illustration-empty.svg";

const NoInvoice = () => {
  const { darkMode } = useContext(themeContext);

  return (
    <div className={`${classes.container} ${classes[darkMode ? "dark" : ""]}`}>
      <img src={illustrationIcon} alt="" />
      <h3>There is nothing here</h3>
      <p>
        Create an invoice by clicking the <strong>New Invoice</strong> button
        and get started
      </p>
    </div>
  );
};

export default NoInvoice;
