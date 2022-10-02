import React from "react";
import { createContext } from "react";

export const SnackbarContext = createContext();

export function SnackbarProvider(props) {
  const [snackbar, setSnackbar] = React.useState("");

  return (
    <SnackbarContext.Provider value={[snackbar, setSnackbar]}>
        {props.children}
    </SnackbarContext.Provider>
  )
}
