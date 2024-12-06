import { NavLink, useNavigate } from "react-router-dom";

import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "motion/react";
import { request } from "../../utils/axiosUtilis";
import { useContext, useEffect, useState } from "react";
import { GoPerson } from "react-icons/go";
import { loading } from "../../context/LoadingContext";
import AddNote from "./AdddNotes";

const LinksItems = () => {
  const navigate = useNavigate();
  const [classMates, setClassMates] = useState([]);
  const { setIsLoading } = useContext(loading);

  const fetchRandomUsers = async () => {
    setIsLoading(true);
    await request({ url: "/users" })
      .then((response) => {
        setClassMates([...response.data]);
      })
      .catch((err) => {
        err.status == 401 ? navigate("/") : err;
      });
  };
  useEffect(() => {
    fetchRandomUsers();
    setIsLoading(false);
  }, []);
  return (
    <div className="flex mt-5 flex-col px-1 ">
      <AddNote />
      <motion.span
        whileTap={{ scale: 0.9 }}
        className="rounded-md py-1 mb-1  gap-2 cursor-pointer  border px-2"
        whileHover={{ background: "black", color: "white" }}
        transition={{
          ease: "easeInOut",
        }}
      >
        <NavLink className="flex items-center justify-between dark:text-[#404040]" to="/dashboard">
          Notes <IoIosArrowRoundForward />
        </NavLink>
      </motion.span>
      <motion.span
        whileTap={{ scale: 0.9 }}
        className="rounded-md py-1 mb-1  gap-2 cursor-pointer  border px-2"
        whileHover={{ background: "black", color: "white" }}
        transition={{
          ease: "easeInOut",
        }}
      >
        <NavLink className="flex items-center justify-between   " to="/users">
          People <IoIosArrowRoundForward />
        </NavLink>
      </motion.span>
      <motion.span
        whileTap={{ scale: 0.9 }}
        className="rounded-md py-1 mb-1  gap-2 cursor-pointer  border px-2"
        whileHover={{ background: "black", color: "white" }}
        transition={{
          ease: "easeInOut",
        }}
      >
        <NavLink className="flex items-center justify-between   " to="/settings">
          Setting <IoIosArrowRoundForward />
        </NavLink>
      </motion.span>

      <div className="mt-10 flex flex-col gap-1 relative hoveredElement mb-5">
        {classMates?.slice(0, 5).map((item, index) => (
          <motion.span
            initial={{ y: -10, opacity: 0, scale: 0 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{
              delay: 0.1 * index,
              type: "spring",
              stiffness: 200,
              damping: 15,
              duration: 0.1,
            }}
            key={index}
            className="relative text-sm hover:text-white overflow-hidden dark:border-[#404040] hover:before:h-[100%] rounded-md py-1 mb-1  gap-2 cursor-pointer  border px-2 flex items-center "
          >
            <GoPerson />
            <p> {item.last_name.toLowerCase()}</p>
          </motion.span>
        ))}
      </div>
      <NavLink
        to="/users"
        className="px-2 hover:font-bold transition-all duration-100 ease-in-out  rounded-md py-2  gap-2 cursor-pointer text-center border"
      >
        show more
      </NavLink>
    </div>
  );
};
export default LinksItems;
