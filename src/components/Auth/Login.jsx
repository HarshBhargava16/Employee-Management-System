import React, { useState } from "react";

function Login({handleLogin}) {

    const [email , setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = (e) =>
        {
            e.preventDefault();
            console.log("hello"+email+"hi"+password);
            handleLogin(email,password);
            setEmail("");
            setPassword("");
        }


  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="border-2 border-emerald-600 rounded-xl p-20 ">
        <form onSubmit={(e)=>{handleSubmit(e)}} className="flex flex-col items-center justify-center ">
          <input
          required
            className=" outline-none bg-transparent placeholder:text-grey-400 border border-emerald-600 text-xl py-3 px-3  rounded-full"
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e)=>(setEmail(e.target.value))}
          />
          <input
          required
            className=" outline-none bg-transparent placeholder:text-grey-400 border border-emerald-600 text-xl py-3 px-3 mt-3  rounded-full"
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e)=>(setPassword(e.target.value))}
          />
          <button type="submit" className="mt-5 w-full  text-white outline-none  placeholder:text-white border-none bg-emerald-600 text-xl py-3 px-3  rounded-full">
            Login{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
