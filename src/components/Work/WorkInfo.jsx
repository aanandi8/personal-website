import React, { useState } from "react";
import econommiLogo from "../../assets/econommi.png";

function WorkInfo(img, title, company, date, location, description, website) {
  const [workPopUp, setWorkPopUp] = useState(false);
  function openPopUp() {
    setWorkPopUp((prev) => !prev);
  }
  return (
    <div className="workPopUp">
      <button onClick={openPopUp}>x </button>
      <div className="popUp-content">
        <div className="popUp-firstRow">
          <img src={econommiLogo} alt=""></img>
          <div className="introContent">
            <h3>econommi</h3>
            <h4>Software Developer Intern</h4>
            <h5>May 2022 - August 2022</h5>
            <h5>Vancouver, British Columbia</h5>
          </div>
        </div>
        <div className="popUp-secondRow">
          <ul>
            <li>
              Implemented Changelog automation, CZ and CI/CD pipeline to AWS and
              Netlify using GitHub Actions that decreased time spent on
              deployment by 20%
            </li>
            <li>
              Developed a responsive landing page and executed functions like
              Mapbox API interaction and Zapier webhook API automated messaging
              using ReactJS, HTML and CSS that improved customer interaction by
              50%
            </li>
            <li>
              Built API query calls to insert and alter database using
              parameters from front-end customer interaction
            </li>
            <a href="https://econommi.io" target="_blank" rel="noreferrer">
              https://econommi.io
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WorkInfo;
