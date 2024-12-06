import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { FiPlus } from "react-icons/fi";
import makeAnimated from "react-select/animated";
import Select from "react-select";
import { request } from "../../utils/axiosUtilis";
import { AnimatePresence } from "motion/react";
import { toast, ToastContainer } from "react-toastify";
const AddNote = () => {
  const [showAddNote, setShowAddNote] = useState(false);
  const [selectedUser, setSelectedUser] = useState([]);
  
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
  const handleChanges = (selected) => {
    selected.forEach((item) => {
      setSelectedUser([...selectedUser, item.value]);
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      titleInputRef.current.value === "" ||
      contentInputRef.current.value === "" ||
      selectedUser.length === 0
    ) {
      toast.error("Please complete all fields.");
    } else {
      try {
        const response = await request({
          url: "/notes",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            title: titleInputRef.current.value,
            content: contentInputRef.current.value,
            shared_with: selectedUser,
          },
        });
        if (response.status === 201) {
          setShowAddNote(false);
          toast.success("Note added successfully!");
        }
      } catch (error) {
        toast.error("Failed to add note. Please try again.");
        console.error("Error:", error);
      }
    }
  };

  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <>
      <ToastContainer />
      <motion.button
        onClick={() => setShowAddNote(!showAddNote)}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.02 }}
        className="bg-black text-sm px-2  rounded-md py-2 mb-5 text-white flex items-center justify-center gap-1 shadow-custom-shadow cursor-pointer"
      >
        <FiPlus className="self-center" />
        <p className="sm:hidden  md:block lg:block">New Notes</p>
      </motion.button>
      {showAddNote && (
        <motion.div className="fixed z-50 flex items-center justify-center bg-slate-900/20 backdrop-blur w-full h-full left-0 top-0   "
        style={{
          zIndex : 99
        }}
        >
          <AnimatePresence>
            <motion.form
              initial={{ y: -10, scale: 0, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: -10, scale: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
                duration: 0.1,
              }}
              className="bg-white sm:w-[80%] md:w-[60%]  lg:w-[30%]  flex flex-col p-4 w-[30%] rounded"
              onSubmit={handleSubmit}
            >
              <label htmlFor="title" className="font-semibold tracking-tighter">
                Title
              </label>
              <input
                ref={titleInputRef}
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
                  onChange={handleChanges}
                  isMulti
                />
              </div>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="bg-black text-white text-sm rounded py-3 px-2 mt-2"
              >
                Add Note
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="border-2 text-sm rounded py-2 px-2 mt-2 dark:text-black text-black"
                onClick={() => setShowAddNote(false)}
              >
                Cancel
              </motion.button>
            </motion.form>
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
};
export default AddNote;
