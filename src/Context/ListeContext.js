import React from "react";
import { createContext } from "react";

export const ListeContext = createContext()

export function ListeProvider (props) {
    const [updatedTodo, setUpdatedTodo] = React.useState([]);
    
    return (
        <ListeContext.Provider value={{updatedTodo, setUpdatedTodo}}>
            {props.children}
        </ListeContext.Provider>
    )
 }