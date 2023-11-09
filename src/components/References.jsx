import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const References = () => {
  return (
    <div className="text-gray-500">
      <h1 className="text-lg my-2 font-semibold text-gray-90 text-[#380238] ">
        Reference
      </h1>
      <div className="flex justify-betweens">
        <div className="mr-10">
          <h2 class="mb-1 text-xl font-semibold leading-none text-gray-900 dark:text-gray-500">
            Niclas Bjuväng
          </h2>
          <p className="pb-3 text-gray-900 ">
            VP of engineering | The StepStone Group
          </p>
          <p>
            {" "}
            <span className="font-semibold text-gray-900">phone: </span>
            073 518 6442
          </p>
          <span className="  font-semibold text-gray-900">email:</span>{" "}
          bjuvang@gmail.com
        </div>
        <div>
          <h2 class="mb-1 text-xl font-semibold leading-none text-gray-900 dark:text-gray-500">
            Matthew Lawson
          </h2>
          <p className="pb-3 text-gray-900 ">Principal architect | Google</p>
          <p>
            {" "}
            <span className="font-semibold text-gray-900">phone: </span>
            076 107 5882
          </p>
          {/*       <a
            href="https://www.linkedin.com/in/elena-ackovska-348b39205/"
            className=""
          > */}
          <span className=" font-semibold text-gray-900">email:</span>{" "}
          kanthrian@gmail.com
          {/*             <LinkedInIcon /> */}
          {/*  </a> */}
        </div>
      </div>
    </div>
  );
};

export default References;
