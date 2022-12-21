import illustrationIcon from "./illustration-empty.svg";
import useTheme from "../../../_shared/hooks/useTheme";
import { NoInvoiceStyled } from "./NoInvoice.styled";

const NoInvoice = () => {
  const theme = useTheme();

  return (
    <NoInvoiceStyled dark={theme}>
      <img src={illustrationIcon} alt="" />
      <h3>There is nothing here</h3>
      <p>
        Create an invoice by clicking the <strong>New Invoice</strong> button
        and get started
      </p>
    </NoInvoiceStyled>
  );
};

export default NoInvoice;
