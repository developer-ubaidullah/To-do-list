import React, { useEffect } from 'react';
import '../styles/About.css';
import gsap from 'gsap';
import aboutImage from '../assets/aboutus-img.jpg'; // apni image ka path sahi daalna

const About = () => {

  useEffect(() => {
    const cursor = document.getElementById("cursor");

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "slow(0.7,0.7,false)",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className="about-section">
      <div className="cursor-circle" id="cursor"></div>
      <div className="about-content">
        <div className="about-text">

        <h1 className="about-heading">About Us</h1>
          <p>
            Our To-Do app helps you stay organized and focused. Whether it's daily chores, work tasks, or future goals, we've got you covered with a beautiful and simple interface.
          </p>
          <p>
            Built with React, Express, and MongoDB, this app is secure, fast, and reliable. Manage your life one task at a time.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="About Us Illustration" />
        </div>
      </div>
    </div>
  );
};

export default About;
