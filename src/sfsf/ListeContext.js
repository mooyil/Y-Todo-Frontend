import React from "react";
import { createContext } from "react";

export const ListeContext = createContext()

export function ListeProvider (props) {
    const [updatedTodo, setUpdatedTodo] = React.useState([]);
    const [updatedInputValue, setUpdatedInputValue] = React.useState("");

    
    return (
        <ListeContext.Provider value={{updatedTodo, setUpdatedTodo, updatedInputValue, setUpdatedInputValue}}>
            {props.children}
        </ListeContext.Provider>
    )
 }