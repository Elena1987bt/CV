import React from "react";
import Img from "../img/4.jpg";
import Contact from "./Contact";
import Skills from "./Skills";
import L from "./L";

const Sidebar = () => {
  return (
    <div className="flex flex-col flex-[30%] h-auto min-h-screen bg-[#380238] text-[#fff] md:py-10 py-20 px-8 rounded-tl-lg rounded-bl-lg">
      <div className="rounded-lg mx-auto ">
        <img src={Img} alt="" className="h-[200px] w-[200px] rounded-full  " />
        <h3 className="text-2xl font-semibold text-center py-6">
          Elena Ackovska
        </h3>
        <div className="underline "></div>
        <p className="text-center pb-10 text-xl">Software engineer</p>
      </div>
      <Contact />

      <div className="">
        <h4 className="text-md uppercase mt-6 mb-4">Details</h4>
        <L />
        <div className="text-sm">
          <p>Arlöv, 23233</p>
          <p>Sweden</p>
          <p>076 052 5506</p>
          <p>
            <a href="mailto:elena.ackovska24@gmail.com">
              elena.ackovska24@gmail.com
            </a>
          </p>
        </div>
        <div>
          <p className="subtitle"></p>
          <p className="my-10 text-sm">
            {" "}
            Swedish perma­nent resi­dence permit{" "}
          </p>
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default Sidebar;
