const LoginForm = () => {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="bg-white p-4 rounded-lg w-[30%]" >
        <h1 className="text-center font-semibold text-2xl my-2">Welcome back!</h1>
        <p className="text-center opacity-50 text-sm mb-5">Enter your Credentials to access your account</p>
        <form method="POST" className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label htmlFor="cin">cin</label>
            <input type="text"  className="border outline-[#A1A1AA] py-1 px-4 rounded-sm"/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input type="Password" className="border outline-[#A1A1AA] py-1 px-4 rounded-sm"/>
          </div>
          <button className="bg-black  py-2 mb-4 text-center text-white">LOGIN</button>
        </form>
      </div>
    </div>
  );
};  
export default LoginForm;
