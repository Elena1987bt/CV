import React from "react";
import SingleSkill from "./SingleSkill";
import L from "./L";

const Skills = () => {
  return (
    <div>
      <h4 className="text-xl mt-6 mb-4">Technical Skills</h4>
      <L />
      <div>
        <h1 className="p-2 bg-[#520352] rounded">Frontend</h1>
        <SingleSkill name={"HTML"} percent={"100"} />
        <SingleSkill name={"CSS"} percent={"100"} />
        <SingleSkill name={"JavaScript"} percent={"100"} />
        <SingleSkill name={"React"} percent={"100"} />
        <SingleSkill name={"Tailwind.css"} percent={"100"} />
        <SingleSkill name={"Chakra UI"} />
      </div>
      <L />
      <div>
        <h1 className="p-2 bg-[#520352] rounded">Backend</h1>
        <SingleSkill name={"Node.js"} percent={"100"} />
        <SingleSkill name={"Express.js"} percent={"100"} />
        <SingleSkill name={"Firebase"} percent={"100"} />
        <SingleSkill name={"DynamoDb"} percent={"80"} />
        <SingleSkill name={"MongoDb"} percent={"80"} />
        <SingleSkill name={"Python"} percent={"80"} />
      </div>
      <L />
      <div>
        {" "}
        <h1 className="p-2 bg-[#520352] rounded">Cloud </h1>
        <SingleSkill name={"AWS"} percent={"80"} />
        <SingleSkill name={"GCP"} percent={"80"} />
      </div>
      <L />
      <div>
        <h1 className="p-2 bg-[#520352] rounded">UX/UI design</h1>
        <SingleSkill name={"Figma"} percent={"80"} />
        <SingleSkill name={"Responsive web design"} percent={"100"} />
      </div>
      <div>
        <h1 className="p-2 bg-[#520352] rounded">Other</h1>
        <SingleSkill name={"Git"} percent={"80"} />
        <SingleSkill name={"Generative AI"} percent={"80"} />
        <SingleSkill name={"OpenAI"} percent={"80"} />
        <SingleSkill name={"Multimedia"} percent={"80"} />
      </div>
    </div>
  );
};

export default Skills;
