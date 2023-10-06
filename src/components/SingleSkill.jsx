import React from "react";

const SingleSkill = ({ name, percent }) => {
  return (
    <div className="my-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-200 dark:text-white">
          {name}
        </span>
        {/*  <span className="text-sm font-medium text-gray-200 dark:text-white">
          {percent}%
        </span> */}
      </div>
      {/*     <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
         <div
          className={`bg-gray-400 h-2.5 rounded-full w-[${`${percent}%`}]`}
        ></div> 
      </div> */}
    </div>
  );
};

export default SingleSkill;
