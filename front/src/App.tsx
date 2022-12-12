import React, { useContext } from "react";
import "./App.module.css";
import QueryProvider from "./react-query/QueryClient";
import ThemeContextProvider from "./context/ThemeContextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Invoices from "./pages/Invoices/Invoices";
import Invoice from "./pages/Invoice/Invoice";
import ErrorBoundary from "./components/ErrorBoundary";
import ThemeContext from "./context/themeContext";

function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <ThemeContextProvider>
      <QueryProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <ErrorBoundary>
                  <Invoices></Invoices>
                </ErrorBoundary>
              }
            ></Route>
            <Route
              path="/:id"
              element={
                <ErrorBoundary>
                  <Invoice></Invoice>
                </ErrorBoundary>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </QueryProvider>
    </ThemeContextProvider>
  );
}

export default App;
