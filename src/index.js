import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import { TextFeldundButtonProvider } from "./context/TextFeldundButtonContext";
import { SidebarProvider } from "./context/SidebarContext";
import { SnackbarProvider } from "./context/SnackbarContext";
import { DateTimePickerProvider } from "./context/DateTimePickerContext";
import { TabsProvider } from "./context/TabsContext";
import { ListeProvider } from "./context/ListeContext";
import { UpdateTodoModalProvider } from "./context/UpdateTodoModalContext";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { SigninProvider } from "./context/SigninContext";
import { SignupProvider } from "./context/SignupContext";
import { UserDataProvider } from "./context/UserDataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserDataProvider>
    <TabsProvider>
      <DateTimePickerProvider>
        <SigninProvider>
          <SignupProvider>
            <TextFeldundButtonProvider>
              <UpdateTodoModalProvider>
                <ListeProvider>
                  <SidebarProvider>
                    <SnackbarProvider>
                      <BrowserRouter>
                        <Routes>
                          <Route path="/" element={<App />} />
                          <Route path="/signin" element={<Signin />} />
                          <Route path="/signup" element={<Signup />} />
                        </Routes>
                      </BrowserRouter>
                    </SnackbarProvider>
                  </SidebarProvider>
                </ListeProvider>
              </UpdateTodoModalProvider>
            </TextFeldundButtonProvider>
          </SignupProvider>
        </SigninProvider>
      </DateTimePickerProvider>
    </TabsProvider>
  </UserDataProvider>
);
