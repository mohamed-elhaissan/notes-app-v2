import { useContext } from "react";
import "./App.scss";
import LoginForm from "./components/Login-form";
import { loading } from "./context/LoadingContext";
function App() {
  const {loading} = useContext(loading)
  return (
    <>
    {isload}
      <LoginForm />
    </>
  );
}

export default App;
