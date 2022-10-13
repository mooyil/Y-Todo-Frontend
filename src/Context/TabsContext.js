import { createContext } from "react";
import React from "react";

export const TabsContext = createContext();

export function TabsProvider(props) {
  const [tabValue, setTabValue] = React.useState(0);
  const [listTabs, setListTabs] = React.useState([]);
  const [currentTab, setCurrentTab] = React.useState()

  function TabPanel({ children, value, index }) {
    return <div>{value === index && <div>{children}</div>}</div>;
  }

  function handleTabsValue(event, val) {
    setCurrentTab(event.target.textContent)
    setTabValue(val);
  }


  return (
    <TabsContext.Provider
      value={{
        tabValue,
        setTabValue,
        TabPanel,
        handleTabsValue,
        currentTab,
        setCurrentTab,
        listTabs,
        setListTabs,
      }}
    >
      {props.children}
    </TabsContext.Provider>
  );
}
