import React from 'react'

const Newtask = ({data}) => {
  console.log(data,"dataU");
  return (
    <div className="flex-shrink-0  w-[350px] bg-blue-400 p-5  rounded-xl h-full">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-500 text-sm  px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm ">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2 "> {data.taskDescription}</p>
      <div className="mt-4 w-full flex justify-center">
        <button className="bg-green-500 w-3/5  ">
          Accept Task
        </button>
      </div>
    </div>
  );
}

export default Newtask
