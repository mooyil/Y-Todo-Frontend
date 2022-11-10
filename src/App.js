import Liste from "./iwas/Liste";
import Navbar from "./iwas/Navbar";
import Snackbar from "./iwas/Snackbar";
import TextFeldundButton from "./iwas/TextFeldundButton";
import React from "react";
import Sidebar from "./iwas/Sidebar";
import { TextFeldundButtonContext } from "./context/TextFeldundButtonContext";
import TodoButton from "./iwas/TodoButton";
import { SnackbarContext } from "./context/SnackbarContext";
import { DateTimePickerContext } from "./context/DateTimePickerContext";
import { TabsContext } from "./context/TabsContext";
import authService from "./services/auth.service";
import { UserDataContext } from "./context/UserDataContext";
import Signin from "./iwas/Signin";

function App() {
  const [snackbar] = React.useContext(SnackbarContext);
  const [dateValue] = React.useContext(DateTimePickerContext);
  const { todoInputValue, tasks } = React.useContext(TextFeldundButtonContext);
  const { tabValue, TabPanel, currentTab, listTabs } =
    React.useContext(TabsContext);
  const [currentUser, setCurrentUser] = React.useState(undefined);
  const [userNameStorage] = React.useContext(UserDataContext);

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
    userId: "mikail",
    done: false,
    date: displayedDate,
    tab: currentTab,
    userName: userNameStorage,
  };

  return (
    <div className="app-container">
      <Navbar logout={logout} />
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
    </div>
  );
}

export default App;
