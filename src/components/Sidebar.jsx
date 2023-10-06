import React from "react";
import Img from "../img/4.jpg";
import Contact from "./Contact";
import Skills from "./Skills";
import L from "./L";

const Sidebar = () => {
  return (
    <div className="flex flex-col flex-[25%] h-auto min-h-screen bg-[#380238] text-[#fff] p-10 rounded-tl-lg rounded-bl-lg">
      <div className="rounded-lg  ">
        <img src={Img} alt="" className="h-[200px] w-[200px] rounded-full  " />
        <h3 className="text-2xl font-semibold text-center py-6">
          Elena Ackovska
        </h3>
        <div className="underline "></div>
        <p className="text-center pb-10 text-xl">Software engineer</p>
      </div>
      <Contact />
      <L />
      <div className="main__leftDetails">
        <h4 className="text-xl mt-6 mb-4">Details</h4>

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
