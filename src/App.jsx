import { useContext } from "react";
import "./App.scss";
import LoginForm from "./components/Login-form";
import { loading } from "./context/LoadingContext";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import { loginContext } from "./context/LoginAuth";
function App() {
  const { isLoading } = useContext(loading);
  const {auth} = useContext(loginContext);
  return (
    <>
      {isLoading && (
        <div className="loading flex items-center justify-center bg-slate-200 fixed left-0 top-0  z-20 h-full w-full">
          <div className="w-10 h-10 rounded-full border-t-4 border-black"></div>
        </div>
      )}
      <Routes>
      {!auth.isLoged ? (
        <Route path="/" element={<LoginForm/>}/>
        <Route path="*" element={<NotFound/>}/>
        
      ):(
      )}
      </Routes>
      
    </>
  );
}

export default App;
