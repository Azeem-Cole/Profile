import React from "react";
import { Link } from "react-router-dom";
import styles from "./navigation.module.css";

export const Navigation = () => {
  return (
    <nav id={styles["nav-option"]}>
      <ul id="birds">
        <li id="nav-pro">
          <Link to="/profile">Profile</Link>
        </li>

        <li id="nav-ski">
          <Link to="/tools">Languages and Tools</Link>
        </li>
        <li id="nav-pro">
          <Link to="/Portfolio">Portfolio</Link>
        </li>
        <li id="nav-abo">
          <Link to="/contact">Let's Talk</Link>
        </li>
        {/* <li id="nav-exp">
          <a href="experience.html" target="_top">
            Experience
          </a>
        </li> */}
        {/* <li id="nav-ser">
          <a href="services.html" target="_top">
            Services
          </a>
        </li> */}
        {/* <li id="nav-edu">
          <a href="education.html" target="_top">
            Education
          </a>
        </li> */}
      </ul>
    </nav>
  );
};
