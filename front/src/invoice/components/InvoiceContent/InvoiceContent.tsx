import React from "react";
import OptionsDetail from "../OptionData/OptionsDetail";
import InvoiceContainer from "../InvoiceContainer/InvoiceContainer";
import ErrorBoundary from "../../../_shared/components/ErrorBooundary/ErrorBoundary";
import { BackStyled } from "../Back/Back.styled";
import useTheme from "../../../_shared/hooks/useTheme";
import { InvoiceContentStyled } from "./InvoiceContent.styled";

const InvoiceContent = () => {
  const theme = useTheme();

  return (
    <InvoiceContentStyled>
      <BackStyled dark={theme} />
      <ErrorBoundary>
        <OptionsDetail></OptionsDetail>
      </ErrorBoundary>
      <ErrorBoundary>
        <InvoiceContainer></InvoiceContainer>
      </ErrorBoundary>
    </InvoiceContentStyled>
  );
};

export default InvoiceContent;
