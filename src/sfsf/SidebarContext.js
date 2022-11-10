import React from "react";
import { createContext } from "react";

export const SidebarContext = createContext();

export function SidebarProvider(props) {
  const [sidebar, setSidebar] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [tabInputValue, setTabInputValue] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <SidebarContext.Provider
      value={{
        sidebar,
        setSidebar,
        open,
        setOpen,
        tabInputValue,
        setTabInputValue,
        handleOpen,
        handleClose,
      }}
    >
      {props.children}
    </SidebarContext.Provider>
  );
}
