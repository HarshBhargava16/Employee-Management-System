import React from "react";
import AcceptTask from "./AcceptTask";
import Newtask from "./Newtask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

function TaskList({ data }) {
  return (
    <div
      id="taskList"
      className="h-[55%] overflow-x-auto w-full py-5 flex items-center justify-start gap-5 flex-nowrap  mt-10 "
    >
      {data.tasks.map((elem,id) => {
        if (elem.active) {
          return <AcceptTask key={id} data={elem} />
        }
        if(elem.newTask)
          {
         return  <Newtask key={id} data={elem}/>
          }
        if(elem.completed)
          {
          return  <CompleteTask key={id} data={elem}/>
          }
        if(elem.failed)
          {
          return  <FailedTask key={id} data={elem}/>
          }
      })}
    </div>
  );
}

export default TaskList;
