
import { useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
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
        <p className="sm:hidden md:block lg:block">LogOut</p>
      </button>
    </>
  );
}
