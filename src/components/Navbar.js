import React from "react";
import "./NavbarStyle.css";
import { Link } from "react-scroll";

export default function Navbar() {

  //function for downloading file
  const downloadFile = () => {
    const resumePath = "/images/rudrika-raghav-drive-resume.pdf"; 
    const aTag = document.createElement("a"); 
    //anchor tag created dynamically
    aTag.href = resumePath;
    //set href attribute of anchor tag to path of resume
    aTag.setAttribute("download", "rudrika-raghav-drive-resume.pdf");
    //Sets the download attribute, which tells the browser to download the file rather than open it.
    document.body.appendChild(aTag);
    //add tag to DOM
    aTag.click();
    //simulate clik on that tag
    aTag.remove();
    //remove anchor tag from DOM
  };

  return (
    <nav className="header">
      <div className="logo">
        <Link
          activeClass="active"
          //This class will be added to the link when the section linked to is in view.
          to="home"
          // Specifies the target section to scroll to (with an ID of home).
          spy={true}
          smooth={true}
          //Enables smooth scrolling effect.
          duration={30}
          //Sets the duration of the scroll animation (in milliseconds).
        >
          <div className="logo-img">
            <span style={{ fontSize: "30px" }}>Rudrika :)</span>
          </div>
        </Link>
      </div>

      <ul className="nav-menu">
        <li>
          <Link
            className="navLink"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={30}
            offset={-60}
            //Adjusts the scroll position by 60px to prevent the content from being hidden behind the fixed navbar.
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="navLink"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={30}
            offset={-60}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="navLink"
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            duration={30}
            offset={-60}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            className="navLink"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={30}
            offset={-60}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="buttons-arrange">
        <button onClick={downloadFile} className="btn">
          {/* on click enable the function to be executed on clicking button */}
          Download Resume
        </button>
      </div>
    </nav>
  );
}
