/* eslint-disable react/prop-types */
import {  useState } from "react";
import avatar from "../../assets/avatar.svg";
import { request } from "../../utils/axiosUtilis";
import { ToastContainer, toast } from "react-toastify"; // Import Toast components
import "react-toastify/dist/ReactToastify.css";

const Settings = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const UpdatingPasswrod = async (e) => {
    e.preventDefault();
    const response = await request({
      url: "/update-password",
      method: "PUT",
      data: {
        current_password: password,
        new_password: newPassword,
        new_password_confirmation: confirmPassword,
      },
    });
    if (response.status == 200) {
      toast.success(response.data.message);
    } else if (response.status == 400) {
      toast.error(response.response.data.message);
    }
  };

  return (
    <>
      <div className="flex flex-col  w-full">
        <div className="h-40 bg-black w-full bg-gradient-to-r from-[#f3f3f3] to-slate-700 relative">
          <img
            src={avatar}
            className="w-40 h-40 absolute -bottom-[30%] left-10"
            alt=""
          />
        </div>
        <div className="mt-20 p-5">
          <h2 className="text-3xl">Settings</h2>
          <hr className="bg-black border my-2" />
          <div className="flex items-center justify-evenly">
            <p className="font-semibold">User name </p>
            <span className="border  border-[#475569] rounded-full px-3 text-[#475569]">
              {window.localStorage.getItem("userInfo").toLocaleLowerCase()}
            </span>
          </div>
          <hr className="bg-black border my-2" />
          <div className="flex items-start gap-2 justify-evenly">
            <p className="font-semibold">Password </p>
            <form
              className="flex flex-col w-1/2 gap-2"
              onSubmit={UpdatingPasswrod}
            >
              <input
                type="text"
                onChange={(e) => setPassword(e.target.value)}
                className="border  border-[#475569] rounded-full px-3  py-2 text-sm text-[#475569] bg-transparent outline-none"
                placeholder="Current Password"
              />
              <input
                type="text"
                onChange={(e) => setNewPassword(e.target.value)}
                className="border  border-[#475569] rounded-full px-3  py-2 text-sm text-[#475569] bg-transparent outline-none"
                placeholder="new  Password"
              />
              <input
                type="text"
                onChange={(e) => {
                  setconfirmPassword(e.target.value);
                }}
                className="border  border-[#475569] rounded-full px-3  py-2 text-sm text-[#475569] bg-transparent outline-none"
                placeholder="Confirm Password"
              />
              <button className="bg-black rounded-full py-2 text-white">
                Upadte Password
              </button>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};
export default Settings;
