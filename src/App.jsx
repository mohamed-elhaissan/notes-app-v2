import { useContext } from "react";
import Login from "./components/Login";
import { LoginCN } from "./context/LoginContext";
function App() {
  const {isLoginIn} = useContext(LoginCN);
  return (
    <>
      {!isLoginIn ? <Login />  : 'urin'}
    </>
  );
}

export default App;
