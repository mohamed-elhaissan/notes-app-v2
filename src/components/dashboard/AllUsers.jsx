import { useEffect, useState } from "react";
import { request } from "../../utils/axiosUtilis";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
const AllUsers = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    request({ url: "/users" })
      .then(({ data }) => {
        setUsers([...data]);
      })
      .catch((er) => {
        if (err.status == 401) {
          navigate("/");
        }
      });
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="px-10 py-20 w-full">
      <table border={1} className="w-full  ">
        <thead className="bg-gray-50 border-b-2 border-gray-200  text-[#95A4B9] first-letter:uppercase rounded-lg">
          <motion.tr
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              duration: 0.1,
            }}
          >
            <th className=" p-3 text-sm font-semibold tracking-wide text-left">
              first Name
            </th>
            <th className="w-48 p-3 text-sm font-semibold tracking-wide text-left">
              Last Name
            </th>
            <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
              Rank
            </th>
          </motion.tr>
        </thead>
        <tbody>
          {users?.map((item, index) => (
            <motion.tr
              initial={{ y: -10, scale: 0.9, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              transition={{
                delay: 0.1 * index,
                type: "spring",
                stiffness: 200,
                damping: 15,
                duration: 0.1,
              }}
              key={index}
              className={index % 2 == 0 ? "bg-white dark:bg-[#d9d8da] border mb-1" : "bg-slate-100 dark:bg-[#d9d8da] "}
            >
              <td className="p-3 text-sm text-gray-700 first-letter:uppercase">
                {item.first_name.toLowerCase()}
              </td>
              <td className="p-3 text-sm text-gray-700 first-letter:uppercase">
                {item.last_name.toLowerCase()}
              </td>
              <td className="p-3 text-sm font-bold  text-blue-500 ">
                {index + 1}Th
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AllUsers;
