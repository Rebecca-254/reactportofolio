import React from "react";
import "./Hero.css";
import profileImg from '../../assets/profile.jpg'; // adjust path as needed

const Hero = ({ scrollToSection }) => {
  return (
    <section className="hero" id="home">
      <img src={profileImg} alt="Profile" className="hero-img" />
      <h1>Welcome to My Portfolio</h1>
      <p>I’m a developer passionate about building beautiful experiences.</p>

      <div className="hero-buttons">
        <a href="/cv.pdf" download className="download-btn">
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Hero;
