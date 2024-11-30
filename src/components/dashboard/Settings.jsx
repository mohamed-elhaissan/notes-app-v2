import avatar from "../../assets/avatar.svg";

const Settings = () => {
    const  UpdatingPasswrod =(e)=>{
        e.preventDefault();
    }



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
          <hr className="bg-black border my-2"/>
          <div className="flex items-center justify-evenly">
            <p className="font-semibold">User name </p>
            <span className="border  border-[#475569] rounded-full px-3 text-[#475569]">{window.localStorage.getItem('userInfo').toLocaleLowerCase()}</span>
          </div>
          <hr className="bg-black border my-2"/>
          <div className="flex items-start gap-2 justify-evenly">
            <p className="font-semibold">Password </p>
            <form className="flex flex-col w-1/2 gap-2" onSubmit={UpdatingPasswrod}>
            <input type="text" className="border  border-[#475569] rounded-full px-3  py-2 text-sm text-[#475569] bg-transparent outline-none" placeholder="Current Password"/>            
            <input type="text" className="border  border-[#475569] rounded-full px-3  py-2 text-sm text-[#475569] bg-transparent outline-none" placeholder="new  Password"/>            
            <input type="text" className="border  border-[#475569] rounded-full px-3  py-2 text-sm text-[#475569] bg-transparent outline-none" placeholder="Confirm Password"/>            
            <button className="bg-black rounded-full py-2 text-white">Upadte Password</button>
            </form>
            </div>
        </div>
      </div>
    </>
  );
};
export default Settings;
