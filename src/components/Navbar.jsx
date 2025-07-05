import React, { useState } from "react";
import "../CSS/NavbarStyle.css";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const downloadFile = () => {
    const resumePath = "/images/Rudrika_Raghav_CSE_GLAU_Resume.pdf";
    const aTag = document.createElement("a");
    aTag.href = resumePath;
    aTag.setAttribute("download", "Rudrika_Raghav_CSE_GLAU_Resume.pdf");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Projects", target: "projects" },
    { name: "About", target: "about" },
    { name: "Skills", target: "skills" },
    { name: "Contact", target: "contact" }
  ];

  return (
    <nav className="header">
      <div className="logo">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={30}
          onClick={closeMenu}
        >
          <div className="logo-img">
            <span>Rudrika</span>
            <span className="blink">:)</span>
          </div>
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bars ${isMenuOpen ? 'active' : ''}`}></div>
      </div>

      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        {navItems.map((item) => (
          <li key={item.target}>
            <Link
              className="navLink"
              to={item.target}
              spy={true}
              smooth={true}
              duration={30}
              offset={-60}
              onClick={closeMenu}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="buttons-arrange">
        <button onClick={downloadFile} className="btn">
          Download Resume
        </button>
      </div>
    </nav>
  );
}