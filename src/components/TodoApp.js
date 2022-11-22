import Liste from "./Liste";
import Navbar from "./Navbar";
import Snackbar from "./Snackbar";
import TextFeldundButton from "./TextFieldAndButton";
import React from "react";
import Sidebar from "./Sidebar";
import TodoButton from "./TodoButton";
import authService from "../services/auth.service";
import Signin from "./Signin";
import { Box, ThemeProvider } from "@mui/material";
import { MyContext } from "../context/ContextProvider";
import { DateTimePickerContext } from "../context/DateTimePickerProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function TodoApp({mode, setMode}) {
  const [currentUser, setCurrentUser] = React.useState(undefined);

  const {
    snackbar,
    todoInputValue,
    tabValue,
    TabPanel,
    currentTab,
    listTabs,
    userNameStorage,
  } = React.useContext(MyContext);

  const [dateValue] = React.useContext(DateTimePickerContext);

  const user = authService.getCurrentUser();

  if (!user) {
    return <Signin />;
  }

  const logout = () => {
    authService.logout();
  };

  let displayedDate;

  if (dateValue != null) {
    displayedDate =
      dateValue.$d.toDateString() + ",  " + dateValue.$d.toLocaleTimeString();
  }

  let todoItem = {
    content: todoInputValue,
    done: false,
    date: displayedDate,
    tab: currentTab,
    userName: userNameStorage,
  };

  return (
      <Box>
        <Navbar logout={logout} mode={mode} setMode={setMode} />
        <Sidebar />
        <TextFeldundButton todoItem={todoItem} displayedDate={displayedDate} />
        {listTabs.map((tab, i) => {
          return (
            <TabPanel value={tabValue} key={i} index={i}>
              <Liste displayedDate={displayedDate} todoItem={todoItem} />
            </TabPanel>
          );
        })}
        <TodoButton todoItem={todoItem} />
        <Snackbar Classname={snackbar} />
      </Box>
  );
}

export default TodoApp;
