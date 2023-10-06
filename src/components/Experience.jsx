import React from "react";

const Experience = () => {
  return (
    <ol class="relative border-l border-gray-200 dark:border-gray-700">
      <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          January 2022 - Present
        </time>
        <h3 class="text-lg my-2 font-semibold text-gray-900 dark:text-white">
          Software engineer in StepStone
        </h3>
        <div class="mb-6 text-justify font-normal text-gray-500 dark:text-gray-400">
          During this period I was involved in building full-stack applications,
          exploring emerging technologies in an innovation lab. Frontend build
          in React, backend using cloud services.
          <ul className="list-disc list-inside text-base mb-6">
            <li className="text-justify mb-3 mt-2">
              <span className="font-semibold">
                Design and develop the frontend for the QR-code app using
                React.js.{" "}
              </span>
              The purpose of this app was to create QR codes for internal
              company needs.{" "}
            </li>
            <li className="text-justify mb-3">
              <span className="font-semibold mr-1">
                Creating the frontend and involved in the backend for internal
                app for recognition program.
              </span>
              We used GCP services, firebase to store data, cloud function for
              backend and deployed the application on GCP. We also used Git for
              collaboration.
            </li>
            <li className="text-justify mb-3">
              <span className="font-semibold ">
                Creating a serverless solution for scraping a job board
              </span>{" "}
              and saving the data in DynamoDB. We used AWS services, AWS
              Lambdas, SQS, S3, DynamoDB and Step functions. We also created a
              machine learning model in Python which purpose was to define
              whether a website was a job or not.
            </li>
            <li className="text-justify mb-3">
              <span className="font-semibold">
                Design and developed a full-stack application for learning
                prompt engineering.
              </span>{" "}
              The application was developed in React, it had a chat interface
              where the user can directly interact with openAI. The data were
              stored in DynamoDb.
            </li>
            <li className="text-justify mb-3">
              <span className="font-semibold">
                Designed and developed a full-stack application for using Large
                Language Models (LLM).
              </span>{" "}
              The purpose of this application was the company employees to use
              OpenAI, save their chats and share them between each other in a
              secure way by creating a proxy that will save the data and have
              more control on the input and output data.
              <p className="py-2">
                {" "}
                The frontend was developed in React, the api was developed by
                creating lambdas functions and the data were stored in DynamoDb.
              </p>
            </li>
          </ul>
        </div>
      </li>
    </ol>
  );
};

export default Experience;
