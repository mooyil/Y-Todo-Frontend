import React from "react";
import { createContext } from "react";

export const UserDataContext = createContext();

export function UserDataProvider(props) {
   let userEmailStorage = localStorage.getItem("userEmail")
   JSON.stringify(userEmailStorage)
   console.log(userEmailStorage)

  return (
    <UserDataContext.Provider value={[userEmailStorage]}>
      {props.children}
    </UserDataContext.Provider>
  );
}
