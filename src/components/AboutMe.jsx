import React, { useEffect } from "react";
import "../CSS/AboutMeStyle.css";

export default function AboutMe({ id }) {
  
  useEffect(() => {
    const isInViewport = (element) => {
      // view point is visible part of browser 
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const handleScroll = () => {
      document.querySelectorAll("section").forEach((section) => {
        if (isInViewport(section)) {
          section.classList.add("padded");
        } else {
          section.classList.remove("padded");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="about-container" id={id}>
      <div className="aboutMe-text">
        <h3>About Me</h3>
        Hello, I’m Rudrika Raghav, a passionate B.Tech student in Computer Science at GLA University (2022-2026). With a love for technology and problem-solving, I’ve built a strong foundation in the MERN stack and languages like C, Python, and Java. Whether it’s developing dynamic e-commerce platforms or user-friendly job portals, I enjoy creating solutions that make a difference. When I'm not coding, I’m enhancing my skills on Leetcode and Hackerrank. Let’s connect and collaborate on exciting tech projects!
        <br />
        <br />
        <span>Here’s a snapshot of my academic journey:</span>
        <div className="tab-contents">
          <ul>
            <li>B.Tech in Computer Science – 8.70 CPI, GLA University, Mathura</li>
            <li>
            Intermediate (94.4%) – Jaypee Vidya Mandir, Bulandshahr</li>
            <li>High School (95%) – Seth Anandram Jaipuria School, Ghaziabad</li>
          </ul>
        </div>

        Curious to learn more about my journey? Feel free to explore my {" "}
        <a
          className="resume"
          href="https://drive.google.com/file/d/1dKwdA9ZFZEpZTpehbh98zK-f2MLIbCkF/view"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundImage: "linear-gradient(to right, #DF8908, #B415FF, #F94892)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          explore my resume.
        </a>
      </div>

      <div className="profile-photo">
        
      </div>
    </div>
  );
}
