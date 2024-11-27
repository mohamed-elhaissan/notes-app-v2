import { NavLink } from "react-router-dom";
import "../../App.scss"
import { FiPlus } from "react-icons/fi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "motion/react";
const LinksItems = () => {
  return (
    <div className="flex mt-5 flex-col px-1 ">
      <motion.span
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.02 }}
        className="bg-black text-sm px-2  rounded-md py-2 mb-5 text-white flex items-center gap-1 shadow-custom-shadow cursor-pointer"
      >
        <FiPlus />
        New Notes
      </motion.span>
      <motion.span
        className="rounded-md py-1 mb-1  gap-2 cursor-pointer  border px-2"
        whileHover={{ background: "black", color: "white" }}
        transition={{
          ease: "easeInOut",
        }}
      >
        <NavLink className="flex items-center justify-between" to="/dashboard">
          Notes <IoIosArrowRoundForward />
        </NavLink>
      </motion.span>
      <motion.span
        className="rounded-md py-1 mb-1  gap-2 cursor-pointer  border px-2"
        whileHover={{ background: "black", color: "white" }}
        transition={{
          ease: "easeInOut",
        }}
      >
        <NavLink className="flex items-center justify-between  " to="/class">
          People <IoIosArrowRoundForward />
        </NavLink>
      </motion.span>
      <motion.span
        className="rounded-md py-1 mb-1  gap-2 cursor-pointer  border px-2"
        whileHover={{ background: "black", color: "white" }}
        transition={{
          ease: "easeInOut",
        }}
      >
        <NavLink className="flex items-center justify-between" to="/class">
          Historique <IoIosArrowRoundForward />
        </NavLink>
      </motion.span>
      <p>afadjasfjasf</p>
      <NavLink
        to="tewst"
        className="px-2  rounded-md py-2  gap-2 cursor-pointer text-center border"
      >
        show more
      </NavLink>
    </div>
  );
};
export default LinksItems;