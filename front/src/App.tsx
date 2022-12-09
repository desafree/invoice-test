import React from "react";
import "./App.module.css";
import QueryProvider from "./react-query/QueryClient";
import ThemeContextProvider from "./context/ThemeContextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Invoices from "./pages/Invoices/Invoices";
import Invoice from "./pages/Invoice/Invoice";

function App() {
  return (
    <ThemeContextProvider>
      <QueryProvider>
        {/*        fix query client*/}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Invoices></Invoices>}></Route>
            <Route path="/:id" element={<Invoice></Invoice>}></Route>
          </Routes>
        </BrowserRouter>
      </QueryProvider>
    </ThemeContextProvider>
  );
}

export default App;
