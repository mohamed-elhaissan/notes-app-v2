
import User from "./User.jsx";
import LinksItems from "./Links";
export default function LeftSideContent() {
  return (
    <div className="w-[15%] py-5 flex flex-col h-[100vh] sticky left-0 top-0 justify-between bg-white shadow-custom-shadow">
      <div>
        <h1 className="font-semibold first-letter:text-4xl text-3xl px-5 ">
          Brain<span className="text-[#6C68DF]">C</span>loud
        </h1>
        <hr />
        <LinksItems />
      </div>
    <User/>
      
    </div>
  );
}
