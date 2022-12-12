import React from "react";
import classes from "./Content.module.css";
import Back from "./Back";
import Options from "./Options";
import Invoice from "./Invoice";
import ErrorBoundary from "../../../components/ErrorBoundary";

const Content = () => {
  return (
    <main className={classes.container}>
      <Back></Back>
      <ErrorBoundary>
        <Options></Options>
      </ErrorBoundary>
      <ErrorBoundary>
        <Invoice></Invoice>
      </ErrorBoundary>
    </main>
  );
};

export default Content;
