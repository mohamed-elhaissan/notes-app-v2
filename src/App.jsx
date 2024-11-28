import { useContext } from "react";
import "./App.scss";
import LoginForm from "./components/Login-form";
import { loading } from "./context/LoadingContext";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Dashboard from "./components/dashboard/Dashboard";
function App() {
  const { isLoading } = useContext(loading);

  return (
    <>
      {isLoading && (
        <div className="loading flex items-center justify-center bg-slate-200 fixed left-0 top-0  z-20 h-full w-full">
          <div className="w-10 h-10 rounded-full border-t-4 border-black"></div>
        </div>
      )}
      <Routes>
        {window.localStorage.getItem("authToken") ? (
          <Route path="/" element={<Dashboard />} />
        ) : (
          <Route path="/" element={<LoginForm />} />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
