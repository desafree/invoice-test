import React from "react";
import Layout from "../../common-components/Layout";
import InvoiceContent from "./components/InvoiceContent";

const InvoicePage = () => {
  /*  const { id } = useParam<>();*/

  return (
    <Layout>
      <InvoiceContent />
    </Layout>
  );
};

export default InvoicePage;
