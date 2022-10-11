import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import { TextFeldundButtonProvider } from "./Context/TextFeldundButtonContext";
import { SidebarProvider } from "./Context/SidebarContext";
import { SnackbarProvider } from "./Context/SnackbarContext";
import SignUp from "./Components/SignUp";
import { DateTimePickerProvider } from "./Context/DateTimePickerContext";
import { TabsProvider } from "./Context/TabsContext";
import { ListeProvider } from "./Context/ListeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TextFeldundButtonProvider>
    <ListeProvider>
      <SidebarProvider>
        <SnackbarProvider>
          <DateTimePickerProvider>
            <TabsProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<App />} />
                  <Route path="/signup" element={<SignUp />} />
                </Routes>
              </BrowserRouter>
            </TabsProvider>
          </DateTimePickerProvider>
        </SnackbarProvider>
      </SidebarProvider>
    </ListeProvider>
  </TextFeldundButtonProvider>
);
