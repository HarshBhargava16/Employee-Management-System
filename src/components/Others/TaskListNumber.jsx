import React from 'react'

function TaskListNumber({data}) {
  
  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      <div className="rounded-xl w-[45%] px-9 py-5  bg-red-400">
        <h2 className="text-3xl font-semibold">{data.taskSummary.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="rounded-xl w-[45%] px-9 py-5  bg-blue-400">
        <h2 className="text-3xl font-semibold">{data.taskSummary.completed}</h2>
        <h3 className="text-xl font-medium">Completed</h3>
      </div>
      <div className="rounded-xl w-[45%] px-9 py-5  bg-green-400">
        <h2 className="text-3xl font-semibold">{data.taskSummary.active}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
      <div className="rounded-xl w-[45%] px-9 py-5  bg-yellow-400">
        <h2 className="text-3xl font-semibold">{data.taskSummary.failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
}

export default TaskListNumber
