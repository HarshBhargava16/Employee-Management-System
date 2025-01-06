import React, { useContext, useState } from 'react'
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle,setTaskTitle] = useState('');
  const [taskDescription,setTaskDescription] = useState('');
  const [taskDate,setTaskDate] = useState('');
  const [assignTo,setAssignTo] = useState('');
  const [category,setCategory] = useState('');

  const [task,setTask]=useState({});

  const submitHandler = (e) =>
    {
      e.preventDefault();
      setTask({taskTitle,taskDate,taskDescription,category,active:false,newTask:true,failed:false,completed:false})
      console.log(
        task
      );
     
      const data = userData;
      console.log(data,"data");
      

      data.forEach((elem)=>
      {
        if(elem.firstName == assignTo)
          {
            elem.tasks.push(task);
            elem.taskSummary.newTask = elem.taskSummary.newTask + 1; 
          }
      })

      setUserData(data);
      console.log(userData);
      //localStorage.setItem("employees", JSON.stringify(data));
      setTaskTitle('');
      setCategory("");
      setTaskDate('');
      setAssignTo('');
      setTaskDescription();
    }

  return (
    <div>
      <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex-wrap flex item-start justify-between"
        >
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5 ">Task Title</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="Enter "
                value={taskTitle}
                onChange={(e) => (setTaskTitle(e.target.value))}
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5 ">Date</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 "
                type="date"
                value={taskDate}
                onChange={(e) => (setTaskDate(e.target.value))}
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5 ">Asign To</h3>
              <input
                type="text"
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 "
                placeholder="employee name"
                value={assignTo}
                onChange={(e) => (setAssignTo(e.target.value))}
              />
            </div>
            <div>
              {" "}
              <h3 className="text-sm text-gray-300 mb-0.5 ">Category</h3>
              <input
                type="text"
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 "
                placeholder="design , dev , etc "
                value={category}
                onChange={(e) =>( setCategory(e.target.value))}
              />
            </div>
          </div>
          <div className="w-2/5 flex flex-col items-start ">
            {" "}
            <h3 className="text-sm text-gray-300 mb-0.5"> Description</h3>
            <textarea
              className=" w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 "
              name=""
              id=""
              cols="30"
              rows="10"
              value={taskDescription}
              onChange={(e) => (setTaskDescription(e.target.value))}
            />
            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full ">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateTask
