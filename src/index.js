import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import { TextFeldundButtonProvider } from "./Context/TextFeldundButtonContext";
import { SidebarProvider } from "./Context/SidebarContext";
import { SnackbarProvider } from "./Context/SnackbarContext";
import SignUp from "./Components/SignUp";
import DateAndTimePicker from "./Components/DateAndTimePicker";
import {DateTimePickerProvider} from "./Context/DateTimePickerContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TextFeldundButtonProvider>
    <SidebarProvider>
      <SnackbarProvider>
        <DateTimePickerProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/date" element={<DateAndTimePicker />} />
            </Routes>
          </BrowserRouter>
        </DateTimePickerProvider>
      </SnackbarProvider>
    </SidebarProvider>
  </TextFeldundButtonProvider>
);
