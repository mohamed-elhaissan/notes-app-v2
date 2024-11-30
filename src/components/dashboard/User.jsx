import user from "../../assets/avatar.svg";
import { CiSettings } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useState } from "react";
export default function User() {
  const [showOptios, setShowOptions] = useState(true);
  return (
    <div className="px-4  relative flex justify-between  text-sm items-center gap-4">
      <img src={user} className="w-10 h-10 " alt="user profille here " />
      {showOptios && <UserOption />}
      <HiOutlineDotsVertical
        onClick={() => {
          setShowOptions(!showOptios);
        }}
        className="text-3xl hover:bg-[#f3f3f3] rounded-full p-1 cursor-pointer"
      />
    </div>
  );
}

const UserOption = () => {
  return (
    <>
      <div className="absolute -right-20 w-[120%] flex flex-col p-4 rounded-lg items-start justify-center gap-2   bg-white shadow-xl shadow-neutral-900/30 -top-50">
        <div className="w-full flex items-center justify-start hover:bg-[#8a8495] py-2 px-1 rounded-lg">
            <CiSettings className="text-2xl"/>
            <NavLink to={"/settings"}>
            Settings
            </NavLink>
        </div>
        <div className="w-full flex items-center justify-start hover:bg-[#8a8495] py-2 px-1 rounded-lg">
            <IoIosLogOut className="text-2xl"/>
            <NavLink to={"/settings"}>
            Log out
            </NavLink>
        </div>
      </div>
    </>
  );
};
