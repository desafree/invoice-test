import React from "react";
import Layout from "../../components/Layout";
import Content from "./components/Content";
import InvoiceForm from "../Invoices/components/InvoiceForm";
import { createPortal } from "react-dom";

const Invoice = () => {
  return (
    <Layout>
      <Content></Content>
      {/*      {createPortal(
        <InvoiceForm></InvoiceForm>,
        document.getElementById("pop-up")!
      )}*/}
    </Layout>
  );
};

export default Invoice;
