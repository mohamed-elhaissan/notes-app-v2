import user from "../../assets/avatar.svg";
import { CiSettings } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
export default function User() {
  const [showOptios, setShowOptions] = useState(false);
  return (
    <div className="px-4  relative flex justify-between  text-sm items-center gap-4">
      <img src={user} className="w-10 h-10 " alt="user profille here " />
      <AnimatePresence>{showOptios && <UserOption />}</AnimatePresence>
      {showOptios ? (
        <motion.button
          key="close"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.1,
          }}
          onClick={() => {
            setShowOptions(!showOptios);
          }}
          className="text-2xl hover:bg-[#f3f3f3] rounded-full p-1 cursor-pointer"
        >
          <IoCloseOutline />
        </motion.button>
      ) : (
        <motion.button
          key="dots"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.1,
          }}
          onClick={() => {
            setShowOptions(!showOptios);
          }}
          className="text-2xl hover:bg-[#f3f3f3] rounded-full p-1 cursor-pointer"
        >
          <HiOutlineDotsVertical />
        </motion.button>
      )}
    </div>
  );
}

const UserOption = () => {
  const Navigate = useNavigate();
  const logOut = () => {
    window.localStorage.removeItem("authToken");
    Navigate("/");
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="absolute -right-20 w-[120%] flex flex-col p-4 rounded-lg items-start justify-center gap-2  bg-white shadow-xl shadow-neutral-900/30 -top-32"
      >
        <motion.button
          whileTap={{ scale: 0.8 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            ease: "easeInOut",
          }}
          className="w-full flex items-center justify-start gap-2 hover:bg-[#dedde2] cursor-pointer py-2 px-1 rounded-lg"
        >
          <CiSettings className="text-2xl" />
          <NavLink to={"/settings"}>Settings</NavLink>
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.8 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            ease: "easeInOut",
          }}
          onClick={logOut}
          className="w-full flex items-center gap-2 justify-start hover:bg-[#dedde2] cursor-pointer py-2 px-1 rounded-lg"
        >
          <IoIosLogOut className="text-2xl" />
          <p>LogOut</p>
        </motion.button>
      </motion.div>
    </>
  );
};
