import React from "react";
import classes from "./InvoiceData.module.css";

const InvoiceData = () => {
  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <div className={classes.id}>
          <h3>
            <span>#</span>XM9141
          </h3>
        </div>
        <div className={classes.from}>
          <h5>19 Union Terrace</h5>
          <h5>London</h5>
          <h5>EI 3EZ</h5>
          <h5>United Kingdom</h5>
        </div>
      </div>
      <div className={classes.infos}>
        <div className={classes.dates}>
          <div className={classes.date}>
            <h5>Invoice Date</h5>
            <h3>21 Aug 2021</h3>
          </div>
          <div className={classes.date}>
            <h5>Invoice Date</h5>
            <h3>21 Aug 2021</h3>
          </div>
        </div>
        <div className={classes.to}>
          <h5>Bill to</h5>
          <h3>Alex Grin</h3>
          <h5>84 Church Way</h5>
          <h5>Bradford</h5>
          <h5>BDI 9PB</h5>
          <h5>United Kingdom</h5>
        </div>
        <div className={classes.email}>
          <h5>Sent to</h5>
          <h3>alexgrim@gmail.com</h3>
        </div>
      </div>
    </div>
  );
};

export default InvoiceData;
