import React from "react";
import { createContext } from "react";

export const UserDataContext = createContext();

export function UserDataProvider(props) {
   let userNameStorage = (localStorage.getItem("userName"))
   userNameStorage = JSON.parse(userNameStorage)
  return (
    <UserDataContext.Provider value={[userNameStorage]}>
      {props.children}
    </UserDataContext.Provider>
  );
}
