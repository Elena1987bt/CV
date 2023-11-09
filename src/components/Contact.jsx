import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import L from "./L";

const Contact = () => {
  return (
    <div className="main__leftLinks">
      <h4 className="text-md uppercase  mb-4">Links</h4>
      <L />

      <a
        href="https://www.linkedin.com/in/elena-ackovska-348b39205/"
        target="_blank"
        rel="noopener noreferrer"
        className=""
      >
        <LinkedInIcon />
        <span className="text-sm ml-3">LinkedIn</span>
      </a>
      <a
        href="https://github.com/Elena1987bt"
        rel="noopener noreferrer"
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
/* https://www.sodapdf.com/html-to-pdf/file-ready-s/?r=ready&data=eyJsaW1pdGF0aW9uVHlwZSI6IkFkIiwiYWRUeXBlIjoiT2xkQWQiLCJjaGVja291dExpbmsiOm51bGwsInByaWNlcyI6e30sImRvd25sb2FkVXJsIjoiaHR0cHM6Ly9hcGkuc29kYXBkZi5jb20vYXBpL3BkZi9kb3dubG9hZEZpbGUvP2RsPXkxMHdCeiUyQkxTZEY4bDZPVkgydzJ3MzQwTnpBSXRkdEtDdEUlMkJCZVhhUTlDb01reTJjcE53ckVuWEMxZ2IzVDc1eUE1Rmc2THZtOWVySVAzTE1qdXVZRWp6SjFiQkZUaHU3am9XS1V2dlVqRlJGTVZIZ2R6MFh5QVpVczBscXJmTHBwOG05dCUyQk5kOUNQRlNveVhIQlo5UHA0RHpZTGVCeFFyc2Z1d0pmMGM0a2hEMEJvTkttOUVNR1RWYWtSTzV5UHh5alBUNzk1SVpZWm53MlZkeHlHOEJnSGlzJTJCcGxZSDZROXRqTjlQbDBiRDRXcVlyVlZoZVk5U3J5MFlWRVRZJTJGZyUyQiUyQmpzQjVoVDV5Q0QwNUZVNmpmMWxOUDVqcEEwOEklMkZ0ZGdVeUpDdHljbGtEWWxYenk1WXFKS3VUNW9NMVdOSWNyJTJCWnlROUtMdmFaUEtJN0dTQko0Ym1BdzV2Q2MlMkY4STUxQlBNcEIlMkJXc0hCdUtOOHROVzJCSFdwVVcycEp4TUdHdzBLazlFS3p3b1dRcENRJTJGczZ3eTJMaEFEY1RER01YbXBZNnN3QVNVS0UlM0QmZGlnZXN0PTA3MEIxRjM1QkM5NTk4QzM4NjgzMTVDMTdDMEMxMURCRjgxODI0QzlDNzJDMDVGNzhCRjg0N0IxOTUyQTAzNTEiLCJjdXJyZW5jeSI6bnVsbCwiZG9jdW1lbnRPd25lcnNoaXBLZXkiOiI3Y2E1OTNjNS00MjdiLTQ4MjItODJmZi1hMDkyZDEwYTQ0MWUiLCJmaWxlSWQiOiJkMjc3ZWRlMi01Nzc3LTQyNmMtODMxMy04MGVkYzBlYzYzZjMiLCJmaWxlU2l6ZSI6bnVsbCwic2VydmljZSI6Imh0bWwtdG8tcGRmIn0%3D&fileName=sodapdf-converted.pdf&lang=en&service=HtmlToPdf&currency=null&fileid=d277ede2-5777-426c-8313-80edc0ec63f3 */
