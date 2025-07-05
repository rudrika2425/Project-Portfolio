import React, { useEffect } from 'react';
import projects from "./Data"; 
import ProjectCard from './ProjectCard'; 

const Projects = ({id}) => {

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
    <div className="project-list" id={id}>
      {projects.map((item) => (
        <ProjectCard key={item.id} project={item} />
      ))}
    </div>
  );
}

export default Projects;
