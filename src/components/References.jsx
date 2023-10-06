import React from "react";

const References = () => {
  return (
    <div className="text-gray-500">
      <h1 className="text-lg my-2 font-semibold text-gray-900 ">Reference</h1>
      <div className="flex justify-betweens">
        <div className="mr-20">
          <h2 class="mb-1 text-xl font-semibold leading-none text-gray-900 dark:text-gray-500">
            Niclas Bjuväng
          </h2>
          <p className="pb-3 text-justify text-gray-900 ">
            Vice president of engineering at StepStone
          </p>
          <p>
            {" "}
            <span className="font-semibold text-gray-900">phone: </span>
            01213123123
          </p>
          <p>
            {" "}
            <span className="font-semibold text-gray-900">linkedIn: </span>
            some link
          </p>
        </div>
        <div>
          <h2 class="mb-1 text-xl font-semibold leading-none text-gray-900 dark:text-gray-500">
            Matthew Lawson
          </h2>
          <p className="pb-3 text-justify text-gray-900 ">
            Principal developer at Google
          </p>
          <p>
            {" "}
            <span className="font-semibold text-gray-900">phone: </span>
            01213123123
          </p>
          <p>
            {" "}
            <span className="font-semibold text-gray-900">linkedIn: </span>
            some link
          </p>
        </div>
      </div>
    </div>
  );
};

export default References;
