import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { request } from "../../utils/axiosUtilis";
import { FiPlus } from "react-icons/fi";
import makeAnimated from "react-select/animated";
import Select from "react-select";
const AddNote = () => {
  const [showAddNote, setShowAddNote] = useState(true);
  const [options, setOptions] = useState([]);
  const titleInputRef = useRef();
  const contentInputRef = useRef();

  const getAllUser = async () => {
    await request({
      url: "/users",
    }).then(({ data }) => {
      data.forEach((item) => {
        setOptions((prev) => [
          ...prev,
          {
            value: item.id,
            label: `${item.first_name.toLowerCase()} ${item.last_name.toLowerCase()}`,
          },
        ]);
      });
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (condition) {
      
    }
  };
  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <>
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
        <motion.div className="fixed z-20 flex items-center justify-center bg-slate-900/20 backdrop-blur w-full h-full left-0 top-0 ">
          <form
            className="bg-white flex flex-col p-4 w-[30%] rounded"
            onSubmit={handleSubmit}
          >
            <label htmlFor="title" className="font-semibold tracking-tighter">
              Title
            </label>
            <input
            ref={}
              type="text"
              placeholder="note Title.."
              className="outline-none border-2 px-2 py-2 rounded mb-2 text-sm "
            />
            <label htmlFor="title" className="font-semibold tracking-tighter">
              Content
            </label>
            <textarea
              ref={contentInputRef}
              rows={2}
              placeholder="contnent here "
              className="outline-none border-2 px-2 py-2 rounded mb-2 text-sm "
            ></textarea>
            <div>
              <p className="font-semibold">Shared With</p>
              <Select
                options={options}
                closeMenuOnSelect={false}
                components={makeAnimated()}
                isMulti
              />
            </div>
            <button className="bg-black text-white text-sm rounded py-3 px-2 mt-2">
              Add Note
            </button>
            <button
              className="border-2 text-sm rounded py-2 px-2 mt-2"
              onClick={() => setShowAddNote(false)}
            >
              Cancel
            </button>
          </form>
        </motion.div>
      )}
    </>
  );
};
export default AddNote;
