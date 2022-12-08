import React from "react";
import Layout from "../../components/Layout";
import Content from "./components/Content";
import InvoiceForm from "./components/InvoiceForm";
import { createPortal } from "react-dom";

const Invoices = () => {
  return (
    <Layout>
      <Content />
      {/*      {createPortal(
        <InvoiceForm></InvoiceForm>,
        document.getElementById("pop-up")!
      )}*/}
    </Layout>
  );
};

export default Invoices;
