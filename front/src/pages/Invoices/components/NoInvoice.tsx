import { useContext } from "react";
import themeContext from "../../../context/themeContext";
import classes from "./NoInvoice.module.css";

const NoInvoice = () => {
  const { darkMode } = useContext(themeContext);

  return (
    <div className={`${classes.container} ${classes[darkMode ? "dark" : ""]}`}>
      <img src="/images/illustration-empty.svg" alt="" />
      <h3>There is nothing here</h3>
      <p>
        Create an invoice by clicking the <strong>New Invoice</strong> button
        and get started
      </p>
    </div>
  );
};

export default NoInvoice;
