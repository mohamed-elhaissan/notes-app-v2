import { useEffect, useState } from "react";
import { request } from "../../utils/axiosUtilis";
import { motion } from "motion/react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineEditNote } from "react-icons/md";
import DeleteItems from "./DeleteItems";

export default function AllNotes() {
  const [notes, setNotes] = useState([]);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const fetchAllNotes = async () => {
    await request({ url: "/notes" })
      .then(({ data }) => {
        setNotes([...data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchAllNotes();
  });
  return (
    <>
      <DeleteItems
        id={confirmDelete.id}
        open={confirmDelete.isVisible}
        onCancel={setConfirmDelete}
      />
      <div className="p-5 w-[80%] mx-auto">
        <h1 className="text-2xl mb-8">
          <span className="text-xl text-indigo-300">Hey</span>,{" "}
          {localStorage.getItem("userInfo").toLowerCase()}
        </h1>
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
                Note
              </th>
              <th className="w-48 p-3 text-sm font-semibold tracking-wide text-left">
                Title
              </th>
              <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                Rank
              </th>
              <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                Owner
              </th>
              <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                Actions
              </th>
            </motion.tr>
          </thead>
          <tbody>
            {notes?.map((item, index) => (
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
                className={index % 2 == 0 ? "bg-white" : "bg-slate-100"}
              >
                <td className="p-3 text-sm text-gray-700 first-letter:uppercase">
                  {item.content}
                </td>
                <td className="p-3 text-sm text-gray-700 first-letter:uppercase">
                  {item.title}
                </td>
                <td className="p-3 text-sm font-bold  text-blue-500 ">
                  {index + 1}Th
                </td>
                <td className="p-3 text-sm text-gray-700">
                  <span
                    className="px-2 py-1 text-xs font-medium rounded  text-green-800"
                    style={{
                      background: item.is_owner ? "#FEF08A" : "#BBF7D0",
                    }}
                  >
                    {item.is_owner
                      ? "you"
                      : item.shared_with[0]?.last_name.toLowerCase()}
                    <sup>({item.shared_with[0]?.last_name})</sup>
                  </span>
                </td>
                <td className="p-3 text-sm font-bold  text-blue-500 ">
                  <span className=" cursor-pointer flex text-xl gap-2">
                    <RiDeleteBin6Line
                      className=" text-red-500"
                      onClick={() => {
                        confirmDelete
                          ? setConfirmDelete(false)
                          : setConfirmDelete({ isVisible: true, id: item.id });
                      }}
                    />
                    <MdOutlineEditNote />
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
