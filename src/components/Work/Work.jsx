import "./Work.scss";
import WorkInfo from "./WorkInfo.jsx";
import React, { useState } from "react";
import "@fontsource/montserrat";
import econommiLogo from "../../assets/econommi.png";
import hiveLogo from "../../assets/Hive.png";
import mclLogo from "../../assets/MCL.png";
import ubcLogo from "../../assets/ubc.jpg";
import cssLogo from "../../assets/css.png";

const Work = (props) => {
  // const { openPopUp, workPopUp, setWorkPopUp } = props;
  const [workPopUp, setWorkPopUp] = useState(false);
  const [workPopUp2, setWorkPopUp2] = useState(false);
  const [workPopUp3, setWorkPopUp3] = useState(false);
  const [workPopUp4, setWorkPopUp4] = useState(false);
  const [workPopUp5, setWorkPopUp5] = useState(false);
  const [workPopUp6, setWorkPopUp6] = useState(false);
  const [workPopUp7, setWorkPopUp7] = useState(false);
  const [workPopUp8, setWorkPopUp8] = useState(false);
  const [workPopUp9, setWorkPopUp9] = useState(false);

  function openPopUp() {
    setWorkPopUp((prev) => !prev);
    toggle();
  }
  function openPopUp2() {
    setWorkPopUp2((prev) => !prev);
    toggle();
  }
  function openPopUp3() {
    setWorkPopUp3((prev) => !prev);
  }
  function openPopUp4() {
    setWorkPopUp4((prev) => !prev);
    toggle();
  }
  function openPopUp5() {
    setWorkPopUp5((prev) => !prev);
    toggle();
  }
  function openPopUp6() {
    setWorkPopUp6((prev) => !prev);
  }
  function openPopUp7() {
    setWorkPopUp7((prev) => !prev);
    toggle();
  }
  function openPopUp8() {
    setWorkPopUp8((prev) => !prev);
    toggle();
  }
  function openPopUp9() {
    setWorkPopUp9((prev) => !prev);
    toggle();
  }

  function toggle() {
    var blur = document.getElementById("blur");
    blur.classList.toggle("active");
  }
  return (
    <div className="workPage">
      <div className="workPageSection" id="blur">
        <div className="title">
          <h1>Work Experience</h1>
        </div>
        <div className="workSection">
          <div>
            <button className="econommi" onClick={openPopUp}>
              <div className="work_image">
                <img src={econommiLogo} alt="" />
              </div>
              <div className="work_info">
                <div className="title">
                  <h2>Econommi</h2>
                </div>
                <div className="content">Software Developer Intern</div>
              </div>
            </button>
          </div>
          <button className="econommi" onClick={openPopUp2}>
            <div className="hive_image">
              <img src={hiveLogo} alt="" />
            </div>
            <div className="work_info">
              <div className="title">
                <h2>H.I.V.E</h2>
              </div>
              <div className="content">XR Software Developer</div>
            </div>
          </button>
          <button className="econommi" onClick={openPopUp4}>
            <div className="mcl_image">
              <img src={mclLogo} alt="" />
            </div>
            <div className="work_info">
              <div className="title">
                <h2>Motivated Cognition Lab</h2>
              </div>
              <div className="content">Research Assistant</div>
            </div>
          </button>

          <button className="econommi" onClick={openPopUp5}>
            <div className="work_image">
              <img src={ubcLogo} alt="" />
            </div>
            <div className="work_info">
              <div className="title">
                <h2>Visual Cognition Lab</h2>
              </div>
              <div className="content">Co-Pilot</div>
            </div>
          </button>

          <button className="econommi" onClick={openPopUp9}>
            <div className="mcl_image">
              <img src={cssLogo} alt="" />
            </div>
            <div className="work_info">
              <div className="title">
                <h2>CSSS</h2>
              </div>
              <div className="content">Student Mentor</div>
            </div>
          </button>

          <button className="econommi" onClick={openPopUp7}>
            <div className="work_image">
              <img src={ubcLogo} alt="" />
            </div>
            <div className="work_info">
              <div className="title">
                <h2>UBC</h2>
              </div>
              <div className="content">Residence Advisor</div>
            </div>
          </button>

          <button className="econommi" onClick={openPopUp8}>
            <div className="work_image">
              <img src={ubcLogo} alt="" />
            </div>
            <div className="work_info">
              <div className="title">
                <h2>UBC</h2>
              </div>
              <div className="content">Teaching Assistant</div>
            </div>
          </button>
        </div>
      </div>
      <div className="workPopUps">
        {workPopUp ? (
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
                    Implemented Changelog automation, CZ and CI/CD pipeline to
                    AWS and Netlify using GitHub Actions that decreased time
                    spent on deployment by 20%
                  </li>
                  <li>
                    Developed a responsive landing page and executed functions
                    like Mapbox API interaction and Zapier webhook API automated
                    messaging using ReactJS, HTML and CSS that improved customer
                    interaction by 50%
                  </li>
                  <li>
                    Built API query calls to insert and alter database using
                    parameters from front-end customer interaction
                  </li>
                  <a
                    href="https://econommi.io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://econommi.io
                  </a>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {workPopUp2 ? (
          <div className="workPopUp">
            <button onClick={openPopUp2}>x</button>
            <div className="popUp-content">
              <div className="popUp-firstRow">
                <div className="hive_image">
                  <img src={hiveLogo} alt=""></img>{" "}
                </div>
                <div className="introContent">
                  <h3>H.I.V.E</h3>
                  <h4>XR Software Developer Co-op</h4>
                  <h5>September 2021 - April 2022</h5>
                  <h5>Vancouver, British Columbia</h5>
                </div>
              </div>
              <div className="popUp-secondRow">
                <ul>
                  <li>
                    Led a development team of 2000+ users to build an
                    interactive webapp using C# and Unity
                  </li>
                  <li>
                    Collaborated with the design team to integrate UI/UX
                    elements such as radial menu pop-ups, animations and
                    object-tracking functionality in a VR environment
                  </li>
                  <li>
                    Implemented functions for accessing 3D assets from MongoDB
                    database and displayed their download progress
                  </li>
                  <a
                    href="https://hive.med.ubc.ca/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://hive.med.ubc.ca/
                  </a>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {workPopUp4 ? (
          <div className="workPopUp">
            <button onClick={openPopUp4}>x</button>
            <div className="popUp-content">
              <div className="popUp-firstRow">
                <div className="mcl_image">
                  <img src={mclLogo} alt=""></img>{" "}
                </div>
                <div className="introContent">
                  <h3>Motivated Cognition Lab</h3>
                  <h4>Reserach Assistantt</h4>
                  <h5>September 2020 - April 2022</h5>
                  <h5>Vancouver, British Columbia</h5>
                </div>
              </div>
              <div className="popUp-secondRow">
                <ul>
                  <li>
                    Devised and conducted an experiment for evaluating cognitive
                    effort deployment by analysing 50+ research papers,
                    conducting project gap analysis and using PsychoPy
                  </li>
                  <li>
                    Programmed calibration tasks, practice trials, randomization
                    of stimuli and outcome choice features using PsychoJS
                    (JavaScript library)
                  </li>
                  <li>
                    Analyzed 80+ participants’ performance by conducting
                    statistical test using R and found significant differences
                    between rewarding and punishing outcomes
                  </li>
                  <a
                    href="http://mclab.psych.ubc.ca/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    http://mclab.psych.ubc.ca/
                  </a>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {workPopUp5 ? (
          <div className="workPopUp">
            <button onClick={openPopUp5}>x</button>
            <div className="popUp-content">
              <div className="popUp-firstRow">
                <img src={ubcLogo} alt=""></img>{" "}
                <div className="introContent">
                  <h3>Visual Cognition Lab</h3>
                  <h4>Co-Pilot</h4>
                  <h5>March 2020 - February 2021</h5>
                  <h5>Vancouver, British Columbia</h5>
                </div>
              </div>
              <div className="popUp-secondRow">
                <ul>
                  <li>
                    Conducted a pilot experiment studying the influence of
                    unconscious knowledge on actions by performing literature
                    review, analysing 50+ survey responses and redesigning
                    methodology based on feedback
                  </li>
                  <li>
                    Performed statistical analysis on 40+ participants’ data
                    using pivot tables, t-tests and ANOVA in Excel to improve
                    method viability by 20%
                  </li>

                  <a
                    href="https://viscoglab.psych.ubc.ca/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://viscoglab.psych.ubc.ca/
                  </a>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {workPopUp9 ? (
          <div className="workPopUp">
            <button onClick={openPopUp9}>x</button>
            <div className="popUp-content">
              <div className="popUp-firstRow">
                <div className="mcl_image">
                  <img src={cssLogo} alt=""></img>{" "}
                </div>
                <div className="introContent">
                  <h3>Cognitive Systems Student Society</h3>
                  <h4>VP Academic</h4>
                  <h5>September 2020 - Present</h5>
                  <h5>Vanacouver, British Columbia</h5>
                </div>
              </div>
              <div className="popUp-secondRow">
                <ul>
                  <li>
                    Mentored 5+ students and helped build strategic, long-term
                    plans to support transition from arts-focused background to
                    technical roles
                  </li>
                  <li>
                    Resolved students’ technical challenges by providing
                    professional connections, external resources and study
                    strategies
                  </li>

                  <a
                    href="http://www.cogsubc.ca/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    http://www.cogsubc.ca/
                  </a>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {workPopUp7 ? (
          <div className="workPopUp">
            <button onClick={openPopUp7}>x</button>
            <div className="popUp-content">
              <div className="popUp-firstRow">
                <img src={ubcLogo} alt=""></img>{" "}
                <div className="introContent">
                  <h3>UBC</h3>
                  <h4>Residence Advisor</h4>
                  <h5>September 2020 - April 2021</h5>
                  <h5>Vancouver, British Columbia</h5>
                </div>
              </div>
              <div className="popUp-secondRow">
                <ul>
                  <li>
                    Led a development team of 2000+ users to build an
                    interactive webapp using C# and Unity
                  </li>
                  <li>
                    Collaborated with the design team to integrate UI/UX
                    elements such as radial menu pop-ups, animations and
                    object-tracking functionality in a VR environment
                  </li>
                  <li>
                    Implemented functions for accessing 3D assets from MongoDB
                    database and displayed their download progress
                  </li>
                  <a
                    href="https://econommi.io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://hive.com
                  </a>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {workPopUp8 ? (
          <div className="workPopUp">
            <button onClick={openPopUp8}>x</button>
            <div className="popUp-content">
              <div className="popUp-firstRow">
                <div className="mcl_image">
                  <img src={ubcLogo} alt=""></img>{" "}
                </div>
                <div className="introContent">
                  <h3>UBC Department of Psychology</h3>
                  <h4>Teaching Assistant</h4>
                  <h5>May 2021 - August 2021</h5>
                  <h5>Vancouver, British Columbia</h5>
                </div>
              </div>
              <div className="popUp-secondRow">
                <ul>
                  <li>
                    Led a development team of 2000+ users to build an
                    interactive webapp using C# and Unity
                  </li>
                  <li>
                    Collaborated with the design team to integrate UI/UX
                    elements such as radial menu pop-ups, animations and
                    object-tracking functionality in a VR environment
                  </li>
                  <li>
                    Implemented functions for accessing 3D assets from MongoDB
                    database and displayed their download progress
                  </li>
                  <a
                    href="https://econommi.io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://hive.com
                  </a>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Work;
