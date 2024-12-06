import { useContext, useEffect, useState } from "react";
import "./App.scss";
import LoginForm from "./components/Login-form";
import { loading } from "./context/LoadingContext";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Dashboard from "./components/dashboard/Dashboard";
import { MdDarkMode } from "react-icons/md";
function App() {
  const { isLoading } = useContext(loading);
  const [isDarkMode,setIsDarkMode] = useState(false);
  const handleDarkMode = ()=>{
    return isDarkMode ? setIsDarkMode(false) : setIsDarkMode(true);
  }

useEffect(()=>{
  if (isDarkMode) {
    window.document.body.classList.add('dark')
  }else {
    window.document.body.classList.remove('dark')

  }
},[isDarkMode])
  return (
    <div className="bg-[#f3f3f3] dark:bg-[#a6a6a6]">
      <button onClick={handleDarkMode} className="fixed right-5 bottom-5 z-20 w-16 h-16 shadow-custom-shadow  bg-black rounded-full text-white flex items-center justify-center">
        <MdDarkMode className="text-3xl"/>
      </button>
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
