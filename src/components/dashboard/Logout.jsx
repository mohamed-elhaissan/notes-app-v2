import { CiSettings } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { motion } from "motion/react";
export default function LogOut() {
  const Navigate = useNavigate();
  const handleLogout = () => {
    window.localStorage.removeItem("authToken");
    Navigate("/");
  };

  return (
    <>

      <button onClick={handleLogout} className="flex items-center gap-2 cursor-pointer hover:opacity-50  justify-center ">
        <IoIosLogOut className="text-2xl"/>
        <p >LogOut</p>
      </button>
    </>
  );
}
