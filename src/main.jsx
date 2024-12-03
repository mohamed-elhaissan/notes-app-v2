
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import LoadingProvider from "./context/LoadingContext.jsx";
import LoginProvider from "./context/UserContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  
    <BrowserRouter>
      <LoadingProvider>
        <LoginProvider>
          <App />
        </LoginProvider>
      </LoadingProvider>
    </BrowserRouter>
  
);
