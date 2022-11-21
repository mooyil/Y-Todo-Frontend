import { createContext } from "react";
import React from "react";

export const MyContext = createContext();

export function ContextProvider(props) {
  //Sidebar context
  const [sidebar, setSidebar] = React.useState(false);
  const [openSidebarModal, setOpenSidebarModal] = React.useState(false);
  const [tabInputValue, setTabInputValue] = React.useState("");
  const handleOpen = () => setOpenSidebarModal(true);
  const handleClose = () => setOpenSidebarModal(false);

  //Signin
  const [signinUsername, setSigninUsername] = React.useState("");
  const [signinPassword, setSigninPassword] = React.useState("");

  //Signup
  const [signupUsername, setSignupUsername] = React.useState("");
  const [signupPassword, setSignupPassword] = React.useState("");

  //Snackbar
  const [snackbar, setSnackbar] = React.useState("");

  //Tabs
  const [tabValue, setTabValue] = React.useState(0);
  const [listTabs, setListTabs] = React.useState([]);
  const [currentTab, setCurrentTab] = React.useState("");

  function TabPanel({ children, value, index }) {
    return <div>{value === index && <div>{children}</div>}</div>;
  }

  function handleTabsValue(event, val) {
    setCurrentTab(event.target.textContent);
    setTabValue(val);
  }

  //TextFeldundButton context
  const [tasks, setTasks] = React.useState([]);
  const [todoInputValue, setTodoInputValue] = React.useState("");
  const [count, setCount] = React.useState(0);

  //UserData context
  let userNameStorage = localStorage.getItem("userName");
  userNameStorage = JSON.parse(userNameStorage);
  return (
    <MyContext.Provider
      value={{
        //Sidebar
        sidebar,
        setSidebar,
        openSidebarModal,
        setOpenSidebarModal,
        tabInputValue,
        setTabInputValue,
        handleOpen,
        handleClose,

        //Signin
        signinUsername,
        setSigninUsername,
        signinPassword,
        setSigninPassword,

        //Signup
        signupUsername,
        setSignupUsername,
        signupPassword,
        setSignupPassword,

        //Snackbar
        snackbar,
        setSnackbar,

        //Tabs
        tabValue,
        setTabValue,
        TabPanel,
        handleTabsValue,
        currentTab,
        setCurrentTab,
        listTabs,
        setListTabs,

        //Textfeld und Button
        todoInputValue,
        setTodoInputValue,
        tasks,
        setTasks,
        count,
        setCount,

        //Userdata
        userNameStorage,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}
