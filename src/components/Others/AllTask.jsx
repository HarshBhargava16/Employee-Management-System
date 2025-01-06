import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

function AllTask() {

  const [userData,setUserData] =  useContext(AuthContext);
  //console.log(authData.employees);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5   ">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5">New Task</h3>
        <h5 className="text-lg font-medium w-1/5">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5">Completed</h5>
        <h5 className="text-lg font-medium w-1/5">Failed</h5>
      </div>
      <div className=" rounded ">
        {userData.map((item,id) => (
          <div key={id} className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded">
            <h2  className="text-lg font-medium w-1/5 ">{item.firstName}</h2>
            <h3 className="text-lg font-medium w-1/5 text-blue-600">{item.taskSummary.newTask}</h3>
            <h5  className="text-lg font-medium w-1/5 text-yellow-600">{item.taskSummary.active}</h5>
            <h5  className="text-lg font-medium w-1/5 text-green-600">
              {item.taskSummary.completed}
            </h5>
            <h5 key={id} className="w-1/5 text-red-600">{item.taskSummary.failed}</h5>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default AllTask
