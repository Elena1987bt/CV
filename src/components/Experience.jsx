import React from "react";

const Experience = () => {
  return (
    <ol class="relative border-l border-gray-200 dark:border-gray-700">
      <h1 className="text-lg my-2 font-semibold text-gray-90 text-[#380238] ">
        Experience
      </h1>
      {/* End of 2 */}
      <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          January 2022 - Present
        </time>
        <h3 class="text-lg my-2 font-semibold text-gray-900 dark:text-white">
          Software engineer in StepStone
        </h3>
        <div class="mb-6 text-justify font-normal text-gray-500 dark:text-gray-400">
          Working in an innovative labs, exploring new concept and technologies,
          as well as researching and prototyping with code to develop software
          applications. This has involved building the frontend, backend, and
          cloud for various projects.
          <ul className="list-disc list-inside text-base mb-6">
            <li className="text-justify mb-3 mt-3">
              <span className="font-semibold">
                Developed a full-stack application for using Large Language
                Models (LLM).
              </span>{" "}
              The purpose of this application was the company employees to use
              OpenAI, save their chats and share them between each other in a
              secure way by creating a proxy that will save the data and have
              more control on the input and output data.
              <p className="py-2">
                {" "}
                The frontend was developed in React, the API was developed by
                creating lambdas functions and the data were stored in DynamoDb.
              </p>
            </li>
            <li className="text-justify mb-3">
              <span className="font-semibold ">
                Created a serverless solution for scraping a job board
              </span>{" "}
              and saving the data in DynamoDB. We used AWS services, AWS
              Lambdas, SQS, S3, DynamoDB and Step functions. We also created a
              machine learning model in Python which purpose was to define
              whether a website was a job or not.
            </li>
            <li className="text-justify mb-3">
              <span className="font-semibold mr-1">
                Created the frontend and involved in the backend for internal
                app for recognition program.
              </span>
              We used GCP services, Firebase to store data, Cloud functions for
              the backend and deployed the application on GCP. We also used Git
              for collaboration.
            </li>
            <li className="text-justify mb-3 ">
              <span className="font-semibold">
                Designed and develop the frontend for the QR-code app using
                React.js.{" "}
              </span>
              The purpose of this app was to create QR codes for internal
              company needs.{" "}
            </li>
            <li className="text-justify mb-3">
              <span className="font-semibold">
                Developed and designed a full-stack application for learning
                prompt engineering.
              </span>{" "}
              The application was developed in React, it had a chat interface
              where the user can directly interact with openAI. The data was
              stored in DynamoDb.
            </li>
          </ul>
        </div>
      </li>
      {/* End of 1 */}
      {/*  2 */}
      <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          October 2020 2022 - July 2021
        </time>
        <h3 class="text-lg my-2 font-semibold text-gray-900 dark:text-white">
          Student at Foo coding
        </h3>
        <div class="mb-6 text-justify font-normal text-gray-500 dark:text-gray-400">
          <ul className="list-disc list-inside text-base mb-6">
            <li className="text-justify mb-3 mt-3">
              <span className="font-semibold">
                Designed and developed the frontend and the backend of an online
                store during learning React module.
              </span>{" "}
              The purpose of this application was the company employees to use
              OpenAI, save their chats and share them between each other in a
              secure way by creating a proxy that will save the data and have
              more control on the input and output data.
              <p className="py-2">
                {" "}
                The frontend was developed in React, the API was developed in
                Node and the data were stored in MongoDB.
              </p>{" "}
              You can see the app here &#x2192;{" "}
              <a
                href="https://online-store-react-node-mongodb.netlify.app/"
                target="_blank"
                className="text-gray-800 hover:underline"
              >
                React-Online-Store
              </a>
            </li>
          </ul>
        </div>
      </li>
      {/* End of 2 */}
      {/*  2 */}
      <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          May 2016 - April 2017
        </time>
        <h3 class="text-lg my-2 font-semibold text-gray-900 dark:text-white">
          Content writter and SEO, web development
        </h3>
        <div class="mb-6 text-justify font-normal text-gray-500 dark:text-gray-400">
          <ul className="list-disc list-inside text-base mb-6">
            <li className="text-justify mb-3 mt-3">
              <span className="font-semibold">
                Writing content for a health blog. SEO for gaming and building
                the frontend for a health blog web app.
              </span>{" "}
              <p className="py-2">
                {" "}
                Technologies used Html, Css, JavaScript and React.
              </p>
            </li>
          </ul>
        </div>
      </li>
      {/* End of 3 */}
    </ol>
  );
};

export default Experience;
