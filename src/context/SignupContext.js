import React from "react";
import { createContext } from "react";

export const SignupContext = createContext();

export function SignupProvider(props) {
    const [username, setusername] = React.useState("")
    const [password, setPassword] = React.useState("")
  return <SignupContext.Provider value={{username, setusername, password, setPassword}}>{props.children}</SignupContext.Provider>;
}