import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { ContextProvider } from "./context/ContextProvider";
import { DateTimePickerProvider } from "./context/DateTimePickerProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <DateTimePickerProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </DateTimePickerProvider>
  </ContextProvider>
);
