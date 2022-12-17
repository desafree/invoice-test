import { useContext } from "react";
import themeContext from "../../../_shared/styles/theme/themeContext";
import classes from "./NoInvoice.module.scss";
import illustrationIcon from "./illustration-empty.svg";
import useTheme from "../../../_shared/hooks/useTheme";

const NoInvoice = () => {
  const theme = useTheme();

  return (
    <div className={`${classes.container} ${classes[theme]}`}>
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
