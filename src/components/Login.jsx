import { useState } from "react";
import { motion } from "framer-motion";

export default function Login() {
  const [cin, setCin] = useState("");
  const [password, setPassword] = useState("");
  const handleFormSubmit = (e)=>{
    e.preventDefault();
    if (cin.length == 0 || password.length ==0) {
      console.error('something wrong');
      
    }
  }
  return (
    <div className="h-[100vh] flex  items-center justify-center">
      <div className="bg-white w-1/3 shadow-md p-4 rounded-lg">
        <h1 className="text-center text-3xl">Login</h1>
        <p className="text-center opacity-50 mt-2 mb-5">To get Started</p>
        <form className="flex flex-col" method="POST" onSubmit={handleFormSubmit}>
          <div className="flex flex-col">
            <label>cin</label>
            <input onChange={(event)=>{setCin(event.target.value)}}
              className="border py-2  pl-2 outline-[#A1A1AA] mb-2"
              name="email"
              type="text"
              
            />
          </div>
          <div className="flex flex-col">
            <label>password</label>
            <input onChange={(event)=>setPassword(event.target.password)}
              className="border py-2 pl-2 outline-[#A1A1AA] mb-2"
              name="password"
              type="password"
            />
          </div>
          <a href="#" className="text-[#A1A1AA] mt-3">
            Forget Password ?
          </a>
          <button className="bg-black text-white mt-3 py-2 h-11 rounded-md">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}


const NotficationError = ()=>{
  return (
    <div>
      <p>New notification from John Anderson</p>
    </div>
  )
}