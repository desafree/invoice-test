import React from "react";
import classes from "./Content.module.css";
import Back from "./Back";
import Options from "./Options";
import Invoice from "./Invoice";

const Content = () => {
  return (
    <main className={classes.container}>
      <Back></Back>
      <Options></Options>
      <Invoice></Invoice>
    </main>
  );
};

export default Content;
