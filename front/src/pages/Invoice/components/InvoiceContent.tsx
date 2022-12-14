import React from "react";
import classes from "./InvoiceContent.module.scss";
import Back from "./Back/Back";
import OptionsDetail from "./OptionsDetail";
import InvoiceContainer from "./InvoiceContainer";
import ErrorBoundary from "../../../common-components/ErrorBoundary";

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
