import React from 'react'
import "../CSS/ProjectCardStyle.css";
import {FaArrowRight} from "react-icons/fa";
import {FiGithub} from "react-icons/fi";
import Tilt from 'react-parallax-tilt';

const ProjectCard = ({project}) => {

  const handleOnClickGit=()=>{
    window.open(`${project.gitlink}`);
    
  }
  const handleOnClickDeployed=()=>{
    window.open(`${project.deployedlink}`);
    
  }

  return (
    <div className="project-window" id={project.id}>
      <div className={`project-wrapper ${project.className}`}>
        <div className="about-project">
          <div className="project-title">{project.title}</div>
          <div className="desc">{project.Description}</div>
          <div className="collection">
          <button className='btn' onClick={handleOnClickGit}><span>View on<FiGithub className="social-git" size={20} style={{ marginLeft: "8px", position: "relative", top: "2px", strokeWidth: "3" }}/></span><FaArrowRight className='btn-arrow' size={22} style={{marginLeft: "1rem"}}/></button>
        <button className='btn' onClick={handleOnClickDeployed}><span>Deployed Link</span><FaArrowRight className='btn-arrow' size={22} style={{marginLeft: "1rem"}}/></button>
        </div>
        </div>
        <Tilt className="project-img" gyroscope= {true} >
        <a href={project.deployedProjectLink} target= "_blank" rel="noopener noreferrer"><img src={project.image} alt="Displaying Project" /></a>
        </Tilt>
      </div>
    </div>
  )
}

export default ProjectCard
