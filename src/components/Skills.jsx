import React from "react";
import SingleSkill from "./SingleSkill";
import L from "./L";

const Skills = () => {
  return (
    <div>
      <h4 className="text-md mt-6 mb-4 uppercase"> Skills</h4>
      <L />
      <div>
        <div>
          <h1 className=" mb-1 text-gray-200">Frontend</h1>
          <p className="text-sm leading-6">
            Html <span className="mx-1">· </span> Css{" "}
            <span className="mx-1">· </span> JavaScript{" "}
            <span className="mx-1">· </span> React{" "}
            <span className="mx-1">· </span> Tailwind{" "}
            <span className="mx-1">· </span> Chakra UI
          </p>
        </div>
        <div className="mt-5">
          <h1 className=" mb-1 text-gray-200">Backend</h1>
          <p className="text-sm leading-6">
            Node.js <span className="mx-1">· </span> Express.js{" "}
            <span className="mx-1">· </span> Python{" "}
            <span className="mx-1">· </span> Firebase{" "}
            <span className="mx-1">· </span> DynamoDB{" "}
            <span className="mx-1">· </span> MongoDB
          </p>
        </div>
        <div className="mt-5">
          <h1 className=" mb-1 text-gray-200">Other</h1>
          <p className="text-sm leading-6">
            AWS<span className="mx-1">· </span> GCP{" "}
            <span className="mx-1">· </span> OpenAI
            <span className="mx-1">· </span>Git <span className="mx-1">· </span>{" "}
            Figma
            <span className="mx-1">· </span> Responsive web design{" "}
          </p>
        </div>
        {/*    <div className="mt-4">
          <h1 className=" mb-2 text-gray-200">UX/UI</h1>
          <p className="text-sm leading-6">
            Figma<span className="mx-1">· </span> Responsive web design{" "}
          </p>
        </div> */}
        {/*     <div className="mt-4">
          <h1 className=" mb-2 text-gray-200">Other</h1>
          <p className="text-sm leading-6">
            OpenAI<span className="mx-1">· </span>Git{" "}
          </p>
        </div> */}
        {/*       <SingleSkill name={"HTML"} percent={"100"} />
        <SingleSkill name={"CSS"} percent={"100"} />
        <SingleSkill name={"JavaScript"} percent={"100"} />
        <SingleSkill name={"React"} percent={"100"} />
        <SingleSkill name={"Tailwind.css"} percent={"100"} />
        <SingleSkill name={"Chakra UI"} /> */}
      </div>
    </div>
  );
};

export default Skills;
