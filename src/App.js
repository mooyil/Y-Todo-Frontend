import Liste from "./Components/Liste";
import Navbar from "./Components/Navbar";
import Snackbar from "./Components/Snackbar";
import TextFeldundButton from "./Components/TextFeldundButton";
import React from "react";
import Sidebar from "./Components/Sidebar";
import { TextFeldundButtonContext } from "./Context/TextFeldundButtonContext";
import TodoButton from "./Components/TodoButton";
import { SnackbarContext } from "./Context/SnackbarContext";
import { DateTimePickerContext } from "./Context/DateTimePickerContext";
import { TabsContext } from "./Context/TabsContext";
import authService from "./services/auth.service";
import { SigninContext } from "./Context/SigninContext";
import { SignupContext } from "./Context/SignupContext";
import { UserDataContext } from "./Context/UserDataContext";
import Signin from "./Components/Signin";

function App() {
  const [snackbar] = React.useContext(SnackbarContext);
  const [dateValue] = React.useContext(DateTimePickerContext);
  const { todoInputValue, tasks } = React.useContext(TextFeldundButtonContext);
  const { tabValue, TabPanel, currentTab, listTabs } =
    React.useContext(TabsContext);
  const [currentUser, setCurrentUser] = React.useState(undefined);
  const [userEmailStorage] = React.useContext(UserDataContext);

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
    userEmail: userEmailStorage,
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
