/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";
import { motion } from "motion/react";
import { request } from "../../utils/axiosUtilis";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
const DeleteItems = ({ open, id, onCancel }) => {
  const handleDelete = async () => {
    request({
      url: `/notes/${id}`,
      method: "DELETE",
    })
      .then(({ data }) => {
        toast.success(data.message);
        onCancel(false)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <ToastContainer />
      {open && (
        <motion.div className="fixed z-20 flex items-center justify-center bg-slate-900/20 backdrop-blur w-full h-full left-0 top-0 ">
          <motion.div
            initial={{ y: -10, scale: 0, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: -10, scale: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
              duration: 0.1,
            }}
            className="flex flex-col items-center gap-2 justify-center bg-white shadow-custom-shadow rounded p-4"
          >
            <MdDelete className="text-4xl text-red-600" />
            <p className="opacity-50">
              Are you Sure You wanna Delete This Item
            </p>
            <div className="flex gap-2">
              <button
                className="border-2 py-2 px-4 rounded"
                onClick={() => {
                  onCancel(false);
                }}
              >
                No,cancel
              </button>
              <button
                className="border-2 bg-red-600 font-semibold text-white py-2 px-8 rounded"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
export default DeleteItems;
