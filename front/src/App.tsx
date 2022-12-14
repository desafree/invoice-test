import React, { useContext } from "react";
import "./App.css";
import QueryProvider from "./react-query/QueryClient";
import ThemeContextProvider from "./context/ThemeContextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InvoicesListPage from "./pages/Invoices/InvoicesListPage";
import InvoicePage from "./pages/Invoice/InvoicePage";
import ThemeContext from "./context/themeContext";

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
