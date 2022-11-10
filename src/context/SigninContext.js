import React from "react";
import { createContext } from "react";

export const SigninContext = createContext();

export function SigninProvider(props) {
  const [username, setusername] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <SigninContext.Provider value={{ username, setusername, password, setPassword }}>
      {props.children}
    </SigninContext.Provider>
  );
}