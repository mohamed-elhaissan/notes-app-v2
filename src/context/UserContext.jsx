/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const userContext = createContext();
export default function LoginProvider({ children }) {
  const [user, setUser] = useState();
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}
