import React from 'react'

function AcceptTask({data}) {
  console.log(data)
  return (
    
      <div className="flex-shrink-0  w-[350px] bg-yellow-400 p-5  rounded-xl h-full">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-500 text-sm  px-3 py-1 rounded">
            {data.category}
          </h3>
          <h4 className="text-sm">{data.date}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
        <p className="text-sm mt-2 "> {data.description}</p>
        <div className="flex justify-between mt-4 ">
          <button className="bg-green-500 py-1 px-2 text-sm ">
            Mark As Completed
          </button>
          <button className="bg-red-500 py-1 px-2 text-sm ">
            Mark As Failed
          </button>
        </div>
      </div>
    
  );
}

export default AcceptTask
