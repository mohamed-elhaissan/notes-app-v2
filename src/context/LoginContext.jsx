/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";

export const LoginCN = createContext();
export default function LoginProvider({ children }) {
  const [isLoginIn, setIsLoginIn] = useState(false);
  return (
    <LoginCN.Provider value={{ isLoginIn, setIsLoginIn }}>
      {children}
    </LoginCN.Provider>
  );
}
