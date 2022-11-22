import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./context/ContextProvider";
import { DateTimePickerProvider } from "./context/DateTimePickerProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <DateTimePickerProvider>
      <App />
    </DateTimePickerProvider>
  </ContextProvider>
);
