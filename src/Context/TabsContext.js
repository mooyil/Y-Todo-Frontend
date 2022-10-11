import { createContext } from "react";
import React from "react";

export const TabsContext = createContext();

export function TabsProvider(props) {
  const [tabValue, setTabValue] = React.useState(0);

  function TabPanel({ children, value, index }) {
    return <div>{value === index && <div>{children}</div>}</div>;
  }

  function handleTabsValue(event, val) {
    setTabValue(val);
  }

  return (
    <TabsContext.Provider
      value={{
        tabValue,
        setTabValue,
        TabPanel,
        handleTabsValue,
      }}
    >
      {props.children}
    </TabsContext.Provider>
  );
}
