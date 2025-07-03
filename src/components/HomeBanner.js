import React from 'react';
import "./HomeBannerStyle.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function HomeBanner({ id }) {
  return (
    <div className="home" id={id}> 
        <div className='content'>
            <div className="wrapper">
              <div className="name">Rudrika Raghav</div>
              <div className="staticTitle">
                Programmer
              </div>
              <ul className="dynamicTitle">
                <li>+<span>Developer</span></li>
              </ul>
              <div className="social-links">
                <a 
                  href="https://www.linkedin.com/in/rudrika-raghav-b9804024a/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                >
                  <FaLinkedin className="social" size={25} style={{ marginRight: "2rem" }} />
                </a>
                <a 
                  href="https://github.com/rudrika2425" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                >
                  <FaGithub className="social" size={25} style={{ marginRight: "2rem" }} />
                </a>
                <a 
                  href="https://www.instagram.com/rudrika_2425/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram profile"
                >
                  <FaInstagram className="social" size={25} style={{ marginRight: "2rem" }} />
                </a>
              </div>
            </div>
        </div>
        <div className="mask">
        
        </div>
    </div>
  );
}
