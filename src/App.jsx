import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashBoard from "./components/Dashboard/EmployeeDashBoard";
import AdminDashBoard from "./components/Dashboard/AdminDashBoard";
import { GetLocalStorage, SetLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";
function App() {
  const [user, setUser] = useState();
  const [loggedInUserData, setLoggedInUserData] = useState();

  const [userData,setUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUsers = localStorage.getItem("loggedInUser");

    if (loggedInUsers) {
      const userData = JSON.parse(loggedInUsers);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  },[]);
  
  const handleLogin = (email, password) => {
    if (email == "admin@example.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin"}));
    } else if (userData) {
      const Employee = userData.find(
        (user) => user.email == email && user.password == password
      );

      if (Employee) {
        setUser("Employee");
        setLoggedInUserData(Employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "Employee", data: Employee })
        );
      } else {
        alert("Invalid credentials");
      }
      
    } else {
      alert("Invalied credentials");
    }
  };

   

  return (
    <div>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "Employee" ? (
        <EmployeeDashBoard changedUser={setUser} data={loggedInUserData} />
      ) : user == "admin" ? (
        <AdminDashBoard changedUser={setUser} />
      ) : (
        ""
      )}

      {/* <EmployeeDashBoard/> */}
      {/* <AdminDashBoard/> */}
    </div>
  );
}

export default App;
