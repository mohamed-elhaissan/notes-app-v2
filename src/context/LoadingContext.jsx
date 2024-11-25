/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const loading = createContext();
export default function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <loading.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </loading.Provider>
  );
}
