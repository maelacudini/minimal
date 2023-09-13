import React, { useState } from "react";
import style from "../css/app.module.css";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("work");

  const handleSetActiveLink = (to) => {
    setActiveLink(to);
  };

  return (
    <div>
      <div className={style.navsmall}>
        <nav>
          <h1 className={style.brandTitle}>Minimal</h1>
        </nav>
        <div className={style.scrollinks}>
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

      <nav className={`navbar fixed-top p-0 ${style.nav}`}>
        <div className={`container-fluid p-0`}>
          <h1 className={style.brandTitle}>Minimal</h1>
          <div className={`nav ms-auto ${style.navpills}`}>
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
      </nav>
    </div>
  );
};

export default Navbar;
