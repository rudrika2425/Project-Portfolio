import React, { useState, useEffect } from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import '../CSS/HomeBannerStyle.css';

export default function HomeBanner({ id }) {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Developer", "Designer", "Creator", "Innovator"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home" id={id}>
      <div className="animated-bg">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
      
      <div className='content'>
        <div className="wrapper">
          <div className="name">Rudrika Raghav</div>
          
          <div className="staticTitle">
            Programmer
            <div className="hrLine"></div>
          </div>
          
          <ul className="dynamicTitle">
            <li>+<span>{roles[currentRole]}</span></li>
          </ul>
          
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/rudrika-raghav-b9804024a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="social-link"
            >
              <FaLinkedin className="social" size={25} />
            </a>
            <a
              href="https://github.com/rudrika2425"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="social-link"
            >
              <FaGithub className="social" size={25} />
            </a>
            <a
              href="https://www.instagram.com/rudrika_2425/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
              className="social-link"
            >
              <FaInstagram className="social" size={25} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="mask">
        <img src="/images/profile_image.png" alt="Rudrika Raghav" className="profile-image" />
      </div>
      </div>);
}