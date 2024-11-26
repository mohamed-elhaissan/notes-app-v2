/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const loginContext = createContext();
export default function LoginProvider({ children }) {
  const [auth, setAuth] = useState({isLoged:false,user: null});
  return (
    <loginContext.Provider value={{ auth, setAuth }}>
      {children}
    </loginContext.Provider>
  );
}
