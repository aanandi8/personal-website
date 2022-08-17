import React, { useState } from "react";
import "./Homepage.scss";

import "@fontsource/montserrat";
import Navbar from "../../components/Navbar/Navbar";
import gitHubLogo from "../../assets/pictures/github.png";
import headshot from "../../assets/pictures/Headshot.png";
import linkedInLogo from "../../assets/pictures/linkedin.png";
import gmailLogo from "../../assets/pictures/gmail.png";
import wordpressLogo from "../../assets/pictures/wordpress.png";
import Background from "../../assets/pictures/Background.png";
import Marathon from "../../assets/pictures/Marathon.png";
function Homepage() {
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/aanandi-sidharth");
  };

  const openGitHub = () => {
    window.open("https://www.github.com/aanandi8");
  };
  const openEmail = () => {
    window.open("mailto:aanandisidharth2@gmail.com");
  };
  const openBlog = () => {
    window.open("https://walkingonfeelings.wordpress.com");
  };

  return (
    <div className="homepage">
      <div className="personalInfo">
        <div className="picture">
          <img src={headshot} alt="" />
        </div>
        <div className="name">Aanandi Sidharth</div>
        <div className="tagline">
          Aspiring Software Developer | Nature Enthusiast | Runner
        </div>

        <div className="links">
          <a
            href="https://www.linkedin.com/in/aanandi-sidharth"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedInLogo} alt="" />
          </a>
          <a
            href="https://www.github.com/aanandi8"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gitHubLogo} alt="" />
          </a>
          <a
            href="mailto:aanandisidharth2@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gmailLogo} alt="" />
          </a>
          <a
            href="https://walkingonfeelings.wordpress.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={wordpressLogo} alt="" />
          </a>
          {/* <div className="linkedInLink">
            <button className="linkedIn" onClick={openLinkedIn}>
              <img src={linkedInLogo} alt="" />
            </button>
          </div>
          <div className="linkedInLink">
            <button className="github" onClick={openGitHub}>
              <img src={gitHubLogo} alt="" />
            </button>
          </div>
          <div className="linkedInLink">
            <button className="email" onClick={openEmail}>
              <img src={gmailLogo} alt="" />
            </button>
          </div>
          <div className="linkedInLink">
            <button className="blog" onClick={openBlog}>
              <img src={wordpressLogo} alt="" />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default Homepage;
