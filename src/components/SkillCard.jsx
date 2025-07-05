import React from 'react';
import "../CSS/SkillCardStyle.css";
import { FaCss3, FaHtml5, FaJs, FaReact, FaJava, FaPython, FaNodeJs } from "react-icons/fa";
import { DiGit, DiMongodb } from "react-icons/di";
import { SiVisualstudiocode, SiBootstrap, SiFigma, SiReactrouter, SiExpress, SiPostman, SiTailwindcss, SiMysql } from "react-icons/si";
import { FaCode } from 'react-icons/fa';
import { IoLogoWindows, IoLogoNpm } from "react-icons/io";

export default function SkillCard({ id }) {
  return (
    <>
      <div className="skill-container">
        <div className="skill-header">My Skills</div>
        <div className="skill-box">
          <div>
            <h2>Languages</h2>
            <div className="skillset">
              <abbr title="C Programming">
                <FaCode className="techLogo" />
                <p className="skill-name">C</p>
              </abbr>
              <abbr title="HTML5">
                <FaHtml5 className="techLogo" />
                <p className="skill-name">HTML5</p>
              </abbr>
              <abbr title="CSS3">
                <FaCss3 className="techLogo" />
                <p className="skill-name">CSS3</p>
              </abbr>
              <abbr title="JavaScript">
                <FaJs className="techLogo" />
                <p className="skill-name">JavaScript</p>
              </abbr>
              <abbr title="Java">
                <FaJava className="techLogo" />
                <p className="skill-name">Java</p>
              </abbr>
              <abbr title="Python">
                <FaPython className="techLogo" />
                <p className="skill-name">Python</p>
              </abbr>
              <abbr title="SQL">
                <SiMysql className="techLogo" />
                <p className="skill-name">SQL</p>
              </abbr>
            </div>
          </div>
          
          <div>
            <h2>Libraries and Frameworks</h2>
            <div className="skillset">
              <abbr title="React">
                <FaReact className="techLogo" />
                <p className="skill-name">React</p>
              </abbr>
              <abbr title="Node.js">
                <FaNodeJs className="techLogo" />
                <p className="skill-name">Node.js</p>
              </abbr>
              <abbr title="Express.js">
                <SiExpress className="techLogo" />
                <p className="skill-name">Express.js</p>
              </abbr>
              <abbr title="Bootstrap">
                <SiBootstrap className="techLogo" />
                <p className="skill-name">Bootstrap</p>
              </abbr>
              <abbr title="Tailwind CSS">
                <SiTailwindcss className="techLogo" />
                <p className="skill-name">Tailwind CSS</p>
              </abbr>
              <abbr title="React Router">
                <SiReactrouter className="techLogo" />
                <p className="skill-name">React Router</p>
              </abbr>
            </div>
          </div>
          
          <div>
            <h2>Tools & Systems</h2>
            <div className="skillset">
              <abbr title="Git">
                <DiGit className="techLogo" />
                <p className="skill-name">Git</p>
              </abbr>
              <abbr title="MongoDB">
                <DiMongodb className="techLogo" />
                <p className="skill-name">MongoDB</p>
              </abbr>
              <abbr title="Visual Studio Code">
                <SiVisualstudiocode className="techLogo" />
                <p className="skill-name">VS Code</p>
              </abbr>
              
              <abbr title="Postman">
                <SiPostman className="techLogo" />
                <p className="skill-name">Postman</p>
              </abbr>
              <abbr title="Windows">
                <IoLogoWindows className="techLogo" />
                <p className="skill-name">Windows</p>
              </abbr>
              <abbr title="NPM">
                <IoLogoNpm className="techLogo" />
                <p className="skill-name">NPM</p>
              </abbr>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}