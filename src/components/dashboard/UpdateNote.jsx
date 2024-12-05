/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import { ToastContainer, toast } from "react-toastify";
import Select from "react-select";
import { useEffect, useState } from "react";
import makeAnimated from "react-select/animated";

import { request } from "../../utils/axiosUtilis";

const UpdateNote = ({ id, Oncancel }) => {

  const [newContent, setNewContent] = useState();
  const [newTitle, setnewTitle] = useState();
  const [options, setOptions] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);

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
  const handleUpdate = (e) => {
    event.preventDefault();
    if (newTitle === "" || newContent === "" || selectedUser.length === 0) {
      toast.error("Please complete all fields.");
    } else {
      request({
        url: `notes/${id}`,
        method: "PUT",
        data: {
          title: newTitle,
          content: newContent,
          shared_with: selectedUser,
        },
      }).then(() => {
        toast.success("data Changed successfuly")
        Oncancel(false)
      }).catch(()=>{toast.error("sorry we have An error ")})
    }
  };
  const fetchInputData = () => {
    request({ url: `notes/${id}` }).then(({ data }) => {
      setNewContent(data.content)
      setnewTitle(data.title)
    });
  };
  useEffect(() => {
    getAllUser();
    fetchInputData();
  }, []);

  return (
    <>
      <ToastContainer />

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.7,
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        className="fixed z-20 flex flex-col  items-center justify-center bg-slate-900/20 backdrop-blur w-full h-full left-0 top-0 "
      >
        <div className="bg-white p-5 rounded w-1/3">
          <p className="text-center opacity-50 text-sm mb-5">
            Upadte Your Note
          </p>
          <form
            method="POST"
            className="flex flex-col gap-5"
            onSubmit={handleUpdate}
          >
            <div className="flex flex-col">
              <label htmlFor="cin">title</label>
              <input
                value={newTitle}
                onChange={(e) => setnewTitle(e.target.value)}
                type="text"
                className="border outline-[#A1A1AA] py-1 px-4 rounded-sm"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">content</label>
              <textarea
                className="border outline-[#A1A1AA] py-1 px-4 rounded-sm"
                onChange={(e) => setNewContent(e.target.value)}
                value={newContent}
              ></textarea>
            </div>
            <Select
              options={options}
              closeMenuOnSelect={false}
              components={makeAnimated()}
              onChange={handleChanges}
              isMulti
            />
            <motion.button
              whileHover={{
                background: "#252329",
                scale: 1.01,
              }}
              whileTap={{ scale: 0.9 }}
              className="border bg-black shadow-custom-shadow rounded-md  py-3  text-center text-white text-sm font-semibold "
            >
              Submit
            </motion.button>
            <motion.button
              onClick={() => {
                Oncancel(false);
              }}
              type="button"
              whileTap={{ scale: 0.9 }}
              className="border   rounded-md  py-3 mb-4 text-center  text-sm font-semibold "
            >
              Cancel
            </motion.button>
          </form>
        </div>
      </motion.div>
    </>
  );
};
export default UpdateNote;
