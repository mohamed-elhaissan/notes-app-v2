import { Routes, Route } from "react-router-dom";
import LeftSideContent from "./LeftSideContent";
import AllUsers from "./AllUsers";
import Settings from "./Settings";
import AllNotes from "./AllNotes";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";

const Dashboard = () => {
  const [leftSide,setLeftSide] = useState(false);
  return (
    <div className="flex ">
      <LeftSideContent  />
      <Routes>
        <Route path="/dashboard" element={<AllNotes />} />
        <Route path="/users" element={<AllUsers />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
};
export default Dashboard;
