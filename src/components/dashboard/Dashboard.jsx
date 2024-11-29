
import { Routes,Route } from "react-router-dom";
import LeftSideContent from "./LeftSideContent";
import AllUsers from "./AllUsers";
const Dashboard = ()=>{
    return (
        <div className="flex">
            <LeftSideContent/>
            <Routes>
                <Route path="/users" element={<AllUsers/>}/>
            </Routes>
            
        </div>
    )
}
export default Dashboard;   