import { NavLink } from "react-router-dom"

export default function LeftSideContent(){
    return(
        <div className="w-[15%] py-5 flex flex-col h-[100vh] sticky left-0 top-0 justify-between bg-white">
            <div>
            <h1 className="font-semibold first-letter:text-4xl text-3xl px-5 ">Brain<span className="text-[#6C68DF]">C</span>loud</h1>
            <hr />
            <div className="flex mt-5 flex-col px-5">
                <span>New Notes</span>
                <NavLink to="/">Notes</NavLink>
                <NavLink to="/class">ClassMates</NavLink>
                <NavLink to="/class">Historique</NavLink>
                <p>afadjasfjasf</p>
                <NavLink to={'asdasd'}>show more</NavLink>
            </div>
            </div>

            <div>
                user here
            </div>
        </div>
    )
}