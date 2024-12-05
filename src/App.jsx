import { useContext } from "react";
import "./App.scss";
import LoginForm from "./components/Login-form";
import { loading } from "./context/LoadingContext";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Dashboard from "./components/dashboard/Dashboard";
import { MdDarkMode } from "react-icons/md";
function App() {
  const { isLoading } = useContext(loading);

  return (
    <div className="bg-[#f3f3f3] dark:bg-[#a6a6a6]">
      <div className="fixed right-5 bottom-5 w-16 h-16 shadow-custom-shadow  bg-black rounded-full text-white flex items-center justify-center">
        <MdDarkMode className="text-3xl"/>
      </div>
      {isLoading && (
        <div className="loading flex items-center justify-center bg-slate-200 fixed left-0 top-0  z-20 h-full w-full">
          <span className="text-8xl font-custom-Font">LOADING</span>
        </div>
      )}
      <Routes>
        <Route path="/*" element={<Dashboard />} />
        <Route path="/" element={<LoginForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
