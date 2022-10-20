import React from "react";
import { createContext } from "react";
import { UserDataContext } from "./UserDataContext";

export const UpdateTodoModalContext = createContext()

export function UpdateTodoModalProvider (props) { 

    const [open, setOpen] = React.useState(false)

    return (
        <UpdateTodoModalContext.Provider value={{open, setOpen}}>
            {props.children}
        </UpdateTodoModalContext.Provider>
    )
 }