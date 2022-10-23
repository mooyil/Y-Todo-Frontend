import React from "react";
import { createContext } from "react";

export const SigninContext = createContext();

export function SigninProvider(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <SigninContext.Provider value={{ email, setEmail, password, setPassword }}>
      {props.children}
    </SigninContext.Provider>
  );
}
