import LogOut from "./Logout.jsx";
import LinksItems from "./Links";
export default function LeftSideContent() {
  return (
    <div className="w-[15%] py-5 flex flex-col h-[100vh] sticky left-0 top-0 justify-between bg-white dark:bg-[#1a1a1a] dark:text-[#fbfbfb] shadow-custom-shadow">
      <div>
        <h1 className="font-semibold first-letter:text-4xl text-3xl px-5 ">
          Brain<span className="text-[#6C68DF] dark:text-[#d9d9d9]">C</span>loud
        </h1>
        <hr />
        <LinksItems />
      </div>
      <LogOut />
    </div>
  );
}
