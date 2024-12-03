import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { request } from "../../utils/axiosUtilis";
import { FiPlus } from "react-icons/fi";

import Select from "react-select/base";
const AddNote = () => {
  const [showAddNote, setShowAddNote] = useState(true);
  const [options, setOptions] = useState([]);
  const getAllUser = async () => {
    await request({
      url: "/users",
    }).then(({ data }) => {
      console.log(data);
      setOptions([...data]);
    });
  };
  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <>
      <div className="fixed opacity-50 left-0 top-0 w-full h-full bg-black z-10"></div>
      <motion.button
        onClick={() => setShowAddNote(!showAddNote)}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.02 }}
        className="bg-black text-sm px-2  rounded-md py-2 mb-5 text-white flex items-center gap-1 shadow-custom-shadow cursor-pointer"
      >
        <FiPlus />
        New Notes
      </motion.button>
      {showAddNote && (
        <motion.div
        className="bg-red-950 absolute p-4 w-96"
      initial={{ opacity: 0, x: "-50%", y: "-50%" }}
      animate={{ opacity: 1, x: "50%", y: "50%" }}
      transition={{ duration: 0.3 }}
        >
          <form>
            <input type="text" placeholder="note Title.." />
            <textarea rows={2} placeholder="contnent here "></textarea>
            <div>
              <Select />
            </div>
          </form>
        </motion.div>
      )}
    </>
  );
};
export default AddNote;
