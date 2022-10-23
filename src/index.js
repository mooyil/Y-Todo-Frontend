import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import { TextFeldundButtonProvider } from "./Context/TextFeldundButtonContext";
import { SidebarProvider } from "./Context/SidebarContext";
import { SnackbarProvider } from "./Context/SnackbarContext";
import { DateTimePickerProvider } from "./Context/DateTimePickerContext";
import { TabsProvider } from "./Context/TabsContext";
import { ListeProvider } from "./Context/ListeContext";
import { UpdateTodoModalProvider } from "./Context/UpdateTodoModalContext";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import { SigninProvider } from "./Context/SigninContext";
import { SignupProvider } from "./Context/SignupContext";
import { UserDataProvider } from "./Context/UserDataContext";

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
