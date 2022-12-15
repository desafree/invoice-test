import React from "react";
import classes from "./InvoiceContent.module.scss";
import Back from "../Back/Back";
import OptionsDetail from "../OptionData/OptionsDetail";
import InvoiceContainer from "../InvoiceContainer/InvoiceContainer";
import ErrorBoundary from "../../../_shared/components/ErrorBooundary/ErrorBoundary";

const InvoiceContent = () => {
  return (
    <main className={classes.container}>
      <Back />
      <ErrorBoundary>
        <OptionsDetail></OptionsDetail>
      </ErrorBoundary>
      <ErrorBoundary>
        <InvoiceContainer></InvoiceContainer>
      </ErrorBoundary>
    </main>
  );
};

export default InvoiceContent;
