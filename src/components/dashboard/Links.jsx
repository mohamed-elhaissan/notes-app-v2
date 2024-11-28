import { NavLink } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "motion/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { GoPerson } from "react-icons/go";
import { loading } from "../../context/LoadingContext";

const LinksItems = () => {
  const [classMates, setClassMates] = useState();
  const {setIsLoading} = useContext(loading);

  const fetchRandomUsers = async () => {
    setIsLoading(true)
    axios
      .get("https://notes.devlop.tech/api/users", {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("authToken")}`,
        },
      })
      .then((response) => {
        setClassMates([response.data[0],response.data[1],response.data[2],response.data[3],response.data[4]])
      }).catch((err)=>{
        console.log(err);
        
      })
    };
    useEffect(() => {
      fetchRandomUsers();
      console.log(classMates);
      setIsLoading(false)
    
    
  }, []);
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
        whileTap={{ scale: 0.9 }}
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
        whileTap={{ scale: 0.9 }}
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
        whileTap={{ scale: 0.9 }}
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
      <div className="mt-10 flex flex-col gap-1 relative hoverred mb-5">
        {
          classMates?.map((item,index)=>(
            <span key={index} className="relative hover:text-white hover:before:h-[100%] rounded-md py-1 mb-1  gap-2 cursor-pointer  border px-2 flex items-center ">
              <GoPerson/>
             <p> { item.last_name.toLowerCase()}</p>
            </span>
          ))
        }
      </div>
      <motion.NavLink
        whileTap={{ scale: 0.99 }}
        to="tewst"
        className="px-2  rounded-md py-2  gap-2 cursor-pointer text-center border"
      >
        show more
      </motion.NavLink>
    </div>
  );
};
export default LinksItems;
