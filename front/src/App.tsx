import React from "react";
import "./App.css";
import QueryProvider from "./_shared/apis/react-query/QueryClient";
import ThemeContextProvider from "./_shared/context/ThemeContext/ThemeContextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InvoicesListPage from "./invoice/views/InvoicesList/InvoicesListPage";
import InvoicePage from "./invoice/views/InvoicePage/InvoicePage";

function App() {
  return (
    <ThemeContextProvider>
      <QueryProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<InvoicesListPage></InvoicesListPage>}
            ></Route>
            <Route path="/:id" element={<InvoicePage></InvoicePage>}></Route>
          </Routes>
        </BrowserRouter>
      </QueryProvider>
    </ThemeContextProvider>
  );
}

export default App;
