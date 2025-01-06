import React, { createContext, useEffect, useState } from "react";
import { GetLocalStorage, SetLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState();
//localStorage.clear();
  useEffect(() => {
    const { employees } = GetLocalStorage();
    setUserData( employees);
    SetLocalStorage();
  },[]);

  return (
    <div>
      <AuthContext.Provider value={[userData,setUserData]}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
