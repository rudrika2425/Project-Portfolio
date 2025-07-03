
import React from 'react'
import "./ProjectCardStyle.css";
import {FaArrowRight} from "react-icons/fa";
import {FiGithub} from "react-icons/fi";
import Tilt from 'react-parallax-tilt';

const ProjectCard = ({project}) => {

  const handleOnClick=()=>{
    window.open(`${project.link}`);
    //open new window with this link
  }

  return (
    <div className="project-window" id={project.id}>
      <div className={`project-wrapper ${project.className}`}>
        <div className="about-project">
          <div className="project-title">{project.title}</div>
          <div className="desc">{project.Description}</div>
          <button className='btn' onClick={handleOnClick}><span>View on<FiGithub className="social-git" size={20} style={{ marginLeft: "8px", position: "relative", top: "2px", strokeWidth: "3" }}/></span><FaArrowRight className='btn-arrow' size={22} style={{marginLeft: "1rem"}}/></button>
        </div>
        <Tilt className="project-img" gyroscope= {true} >
        <a href={project.deployedProjectLink} target= "_blank" rel="noopener noreferrer"><img src={project.image} alt="Displaying Project" /></a>
        </Tilt>
      </div>
    </div>
  )
}

export default ProjectCard
