import React from "react";
import { createContext } from "react";

export const SignupContext = createContext();

export function SignupProvider(props) {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
  return <SignupContext.Provider value={{email, setEmail, password, setPassword}}>{props.children}</SignupContext.Provider>;
}
