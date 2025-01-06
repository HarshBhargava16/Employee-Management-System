import React, { useEffect, useState } from "react";

function Header(props) {
  
  const [userName,setUserName] = useState();

  useEffect(()=>{
    if (!props.data) {
      setUserName("Admin");
    } else {
      setUserName(props.data.firstName);
    }
  },[])
  
const Logout = () =>
  {
    localStorage.setItem("loggedInUser","");
    props.changedUser('');
  }

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">{userName}</span>
      </h1>
      <button onClick={()=>(Logout())} className="bg-red-600 text-lg font-medium text-white px-3 py-3 rounded-sm">
        Logout
      </button>
    </div>
  );
}

export default Header;
