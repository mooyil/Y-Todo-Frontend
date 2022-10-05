import React from "react";
import { createContext } from "react";

export const SidebarContext = createContext();

export function SidebarProvider(props) {
  const [sidebar, setSidebar] = React.useState(false);

  return (
    <SidebarContext.Provider value={[sidebar, setSidebar]}>
      {props.children}
    </SidebarContext.Provider>
  );
}
