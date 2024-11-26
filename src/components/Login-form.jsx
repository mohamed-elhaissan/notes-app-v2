/* eslint-disable react/prop-types */
import { useContext, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
import axios from "axios";
import { loading } from "../context/LoadingContext";
import { loginContext } from "../context/LoginAuth.jsx";
const LoginForm = () => {
  const { setIsLoading } = useContext(loading);
  const cinInputRef = useRef()
  const passwordInputRef = useRef()
  const {setAuth} = useContext(loginContext)
  const [err, setErr] = useState({ isvisible: false, txt: "" });







  async function handleLogin(e) {
    e.preventDefault();
    setIsLoading(true);
    if (cinInputRef.current.length == 0 || passwordInputRef.current.length == 0) {
      setErr({ isvisible: true, txt: "Please fill out the input field!" });
      const errorTimeout = setTimeout(() => {
        setErr({ isvisible: false, txt: "" });
      }, 2000);
      return () => clearTimeout(errorTimeout);
    } else {


      try {
        const response = await axios.post(
          "https://notes.devlop.tech/api/login",
          JSON.stringify({
            cin: cinInputRef.current.value,
            password: passwordInputRef.current.value,
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response) {
          setAuth({isLoged : true,response})
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }

    setIsLoading(false);
  }
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <AnimatePresence>
        {err.isvisible && <NotificationErro txtError={err.txt} />}
      </AnimatePresence>
      <div className="bg-white p-4 rounded-lg w-[30%]">
        <h1 className="text-center font-semibold text-2xl my-2">
          Welcome back!
        </h1>
        <p className="text-center opacity-50 text-sm mb-5">
          Enter your Credentials to access your account
        </p>
        <form
          method="POST"
          className="flex flex-col gap-5"
          onSubmit={handleLogin}
        >
          <div className="flex flex-col">
            <label htmlFor="cin">cin</label>
            <input
              ref={cinInputRef}
              type="text"
              className="border outline-[#A1A1AA] py-1 px-4 rounded-sm"
              
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input ref={passwordInputRef}
              type="Password"
              
              className="border outline-[#A1A1AA] py-1 px-4 rounded-sm"
            />
          </div>
          <button className="bg-black shadow-custom-shadow rounded-md  py-3 mb-4 text-center text-white text-sm font-semibold ">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;

const NotificationErro = ({ txtError }) => {
  return (
    <div>
      <motion.div
        initial={{ y: -20, scale: 0, opacity: 0 }}
        animate={{ y: 10, opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 40 }}
        exit={{ y: "100%", opacity: 0 }}
        className="absolute flex items-center right-5 top-0 gap-4 bg-red-500 text-white px-2 py-1 rounded-md"
      >
        <p>{txtError} </p>
        <IoMdClose />
      </motion.div>
    </div>
  );
};
