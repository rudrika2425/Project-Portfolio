import React, { useEffect } from "react";
import "../CSS/AboutMeStyle.css";

export default function AboutMe({ id }) {
  useEffect(() => {
    const isInViewport = (element) => {
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
        <div className="intro-section">
          Hi, I'm Rudrika Raghav, a dedicated B.Tech Computer Science student at GLA University, Mathura, currently maintaining a CGPA of 8.71. I belong to a town in the Sambhal district and bring with me a passion for learning and adaptability. I have a strong foundation in Java and JavaScript, and I work confidently with the MERN stack. My experience also includes working with MySQL. I'm a keen learner, collaborative by nature, and thrive in team-oriented environments with effective communication and problem-solving skills.</div>
        
        <div className="education-section">
          <span className="section-heading">Academic Journey</span>
          <div className="tab-contents">
            <ul>
              <li>B.Tech in Computer Science – 8.71 CPI, GLA University, Mathura</li>
              <li>Intermediate (94.4%) – Jaypee Vidya Mandir, Bulandshahr</li>
              <li>High School (95%) – Seth Anandram Jaipuria School, Ghaziabad</li>
            </ul>
          </div>s
        </div>

        <div className="achievements-section">
          <span className="section-heading">Achievements & Recognition</span>
          <div className="tab-contents">
            <ul>
              <li>
                 Solved 500+ questions,on platforms like LeetCode & GeeksforGeeks, building a solid foundation in algorithms and data structures
                <a href="https://leetcode.com/u/rudrika_2425/" className="certificate-link">View Profile</a>
              </li>
              <li>
                 Participated in Innovate x Hackathon conducted by Shyam Lal College (University of Delhi)
                <a href="https://drive.google.com/file/d/1wUcQ9e_56klb0HoCWLdBL0Qz63hhKIVv/view" className="certificate-link">View Certificate</a>
              </li>
              <li>
                 Second Rank in Advitiya x JPD Hub Hackathon conducted by IIT Ropar
                <a href="https://drive.google.com/file/d/1lgvcG70YCRImrJ69YdApjMhaXRbYEmiW/view" className="certificate-link">View Certificate</a>
              </li>
              
              <li>
                 Reached to the Finale of Hackofiesta 6.0 conducted by IIIT Lucknow
                <a href="https://drive.google.com/file/d/1E4gfCxH_mhNa2KGg7ruQPmzAdoJpvAoh/view?usp=sharing" className="certificate-link">View Certificate</a>
              </li>
              
             
            </ul>
          </div>
        </div>

        <div className="resume-section">
          Curious to learn more about my journey? Feel free to{" "}
          <a
            className="resume"
            href="https://drive.google.com/file/d/1x-VGcDa1EC5dBrqfCxS9FZQ8fN_jSBZk/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            explore my resume.
          </a>
        </div>
      </div>
    </div>
  );
}