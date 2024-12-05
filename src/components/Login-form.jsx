/* eslint-disable react/prop-types */
import { useContext, useRef, useState } from "react";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
import { request } from "../utils/axiosUtilis.jsx";
import { loading } from "../context/LoadingContext";
import { userContext } from "../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const { setIsLoading } = useContext(loading);
  const cinInputRef = useRef();
  const passwordInputRef = useRef();
  const { setUser } = useContext(userContext);
  const [err, setErr] = useState({ isvisible: false, txt: "" });
  const Navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    setIsLoading(true);
    if (
      cinInputRef.current.value == "" ||
      passwordInputRef.current.value == ""
    ) {
      setErr({ isvisible: true, txt: "Please fill out the input field!" });
    } else {
      try {
        const response = await request({
          method: "post",
          url: "/login",
          data: {
            cin: cinInputRef.current.value,
            password: passwordInputRef.current.value,
          },
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status) {
          console.log(response.status == 200);

          console.log("this is data", response);
          setErr({ isvisible: true, txt: response?.message });
          setUser({
            firstName: response.data.user?.first_name,
            lastName: response.data.user?.last_name,
          });
          window.localStorage.setItem("authToken", response.data.token);
          window.localStorage.setItem(
            "userInfo",
            `${response.data.user.first_name} ${response.data.user.last_name} `
          );
          console.log(response.data.user.first_name);

          Navigate("/dashboard");
        }
      } catch (error) {
        console.error(error);

        setErr({ isvisible: true, txt: error.response?.data.message });
      } finally {
        setIsLoading(false);
      }
    }
    cinInputRef.current.value = "";
    passwordInputRef.current.value = "";
    const timeOut = setTimeout(() => {
      setErr({ isvisible: false, txt: "" });
    }, 1000);
    return () => clearTimeout(timeOut);
  }
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <AnimatePresence>
        {err.isvisible && <NotificationErro txtError={err.txt} />}
      </AnimatePresence>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.7,
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        className="bg-white p-4 rounded-lg w-[30%]"
      >
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
            <input
              ref={passwordInputRef}
              type="Password"
              className="border outline-[#A1A1AA] py-1 px-4 rounded-sm"
            />
          </div>
          <motion.button
            whileHover={{
              background: "#252329",
              scale: 1.01,
            }}
            whileTap={{ scale: 0.9 }}
            className="border bg-black shadow-custom-shadow rounded-md  py-3 mb-4 text-center text-white text-sm font-semibold "
          >
            Login
          </motion.button>
        </form>
      </motion.div>
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
      </motion.div>
    </div>
  );
};
