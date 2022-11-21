import Liste from "./components/Liste";
import Navbar from "./components/Navbar";
import Snackbar from "./components/Snackbar";
import TextFeldundButton from "./components/TextFieldAndButton";
import React from "react";
import Sidebar from "./components/Sidebar";
import TodoButton from "./components/TodoButton";
import authService from "./services/auth.service";
import Signin from "./components/Signin";
import { Box, ThemeProvider } from "@mui/material";
import { MyContext } from "./context/ContextProvider";
import { DateTimePickerContext } from "./context/DateTimePickerProvider";
import { theme } from "./styles/theme";

function App() {
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
    <ThemeProvider theme={theme}>
      <Box>
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
      </Box>
    </ThemeProvider>
  );
}

export default App;
