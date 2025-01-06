import React from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTask from "../Others/AllTask";

function AdminDashBoard(props) {
  //console.log(props);
  return (
    <div className="p-7  h-screen w-full">
      <Header changedUser={props.changedUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
}

export default AdminDashBoard;
