import React from "react";
import QueryProvider from "./_shared/request-management/query-client/QueryClient";
import ThemeContextProvider from "./_shared/styles/theme/context/ThemeContextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InvoicesListPage from "./invoice/views/InvoicesList/InvoicesListPage";
import InvoicePage from "./invoice/views/InvoicePage/InvoicePage";
import { GlobalStyles } from "./_shared/styles/global-style/globalStyles";
import { ThemeProvider } from "./_shared/styles/theme/provider/ThemeProvider";

function App() {
  return (
    <ThemeContextProvider>
      <QueryProvider>
        <BrowserRouter>
          <ThemeProvider>
            <GlobalStyles></GlobalStyles>
            <Routes>
              <Route
                path="/"
                element={<InvoicesListPage></InvoicesListPage>}
              ></Route>
              <Route path="/:id" element={<InvoicePage></InvoicePage>}></Route>
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
      </QueryProvider>
    </ThemeContextProvider>
  );
}

export default App;
