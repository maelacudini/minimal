import React, { useEffect, useState } from "react";
import style from "../css/app.module.css";
import { Link as ScrollLink } from "react-scroll";

const Nav = () => {
  const [activeLink, setActiveLink] = useState("work");

  const handleSetActiveLink = (to) => {
    setActiveLink(to);
  };

  return (
    <nav className={`navbar navbar-expand-md ${style.navbar}`}>
      <div className="container-fluid p-0">
        <h1 className={style.brandTitle}>Minimal</h1>
        <button
          className="navbar-toggler p-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse`} id="navbarNavAltMarkup">
          <div className={`nav nav-pills ms-auto ${style.collapse}`}>
            <ScrollLink
              className={`nav-link ${
                activeLink === "work" ? "active-link" : "nonactive-link"
              }`}
              to="work"
              smooth={true}
              duration={300}
              spy={true}
              onSetActive={() => handleSetActiveLink("work")}
            >
              Work
            </ScrollLink>
            <ScrollLink
              className={`nav-link ${
                activeLink === "about" ? "active-link" : "nonactive-link"
              }`}
              to="about"
              smooth={true}
              duration={300}
              spy={true}
              onSetActive={() => handleSetActiveLink("about")}
            >
              About
            </ScrollLink>
            <ScrollLink
              className={`nav-link ${
                activeLink === "contact" ? "active-link" : "nonactive-link"
              }`}
              to="contact"
              smooth={true}
              duration={300}
              spy={true}
              onSetActive={() => handleSetActiveLink("contact")}
            >
              Contact
            </ScrollLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
