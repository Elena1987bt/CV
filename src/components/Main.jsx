import React from "react";
import Profile from "./Profile";
import Line from "./Line";
import Education from "./Education";
import Experience from "./Experience";
import References from "./References";

const Main = () => {
  return (
    <div className="flex flex-[75%] py-12 px-20 flex-col md:py-10 py-20">
      <Profile />
      <Line />
      <Experience />
      <Line />
      <Education />
      <Line />
      <References />
    </div>
  );
};

export default Main;
