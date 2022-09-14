import React, { useState } from "react";
import "./Homepage.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import "@fontsource/montserrat";
import Navbar from "../../components/Navbar/Navbar";
import gitHubLogo from "../../assets/pictures/github.png";
import headshot from "../../assets/pictures/Headshot.png";
import linkedInLogo from "../../assets/pictures/linkedin.png";
import gmailLogo from "../../assets/pictures/gmail.png";
import wordpressLogo from "../../assets/pictures/wordpress.png";
import Background from "../../assets/pictures/Background.png";
import Marathon from "../../assets/pictures/Marathon.png";
import Bungee from "../../assets/pictures/Bungee.png";
import Picture4 from "../../assets/pictures/Picture4.png";
import Hike from "../../assets/Hike.png";
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
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <img src={headshot} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Marathon} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Bungee} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Picture4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Hike} alt="" />
            </SwiperSlide>
          </Swiper>
          {/* <img src={headshot} alt="" /> */}
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
