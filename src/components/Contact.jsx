import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinkIcon from "@mui/icons-material/Link";

const Contact = () => {
  return (
    <div className="main__leftLinks">
      <h4 className="text-lg font-semibold mb-4">Links</h4>

      <a
        href="https://www.linkedin.com/in/elena-ackovska-348b39205/"
        target="_blank"
      >
        <LinkedInIcon />
        <span className="text-sm ml-3">LinkedIn</span>
      </a>
      <a
        href="https://github.com/Elena1987bt"
        target="_blank"
        className="flex my-2"
      >
        <GitHubIcon />
        <span className="ml-3">Github</span>
      </a>
      {/*       <a
        href="https://my-portfolio-website-react.netlify.app/"
        target="_blank"
        className="flex"
      >
        <LinkIcon />
        <span className="text-sm ml-3">Personal Website</span>
      </a> */}
    </div>
  );
};

export default Contact;
