import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className="flex-shrink-0  w-[350px] bg-green-400 p-5  rounded-xl h-full">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-500 text-sm  px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-2 "> {data.description}</p>
      <div className="mt-2 flex  justify-center">
        <button className="w-1/2  bg-green-500">Complete</button>
      </div>
    </div>
  );
}

export default CompleteTask
