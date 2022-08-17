import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Navbar.scss";
import Resume from "../../assets/pdf/Technical_Resume.pdf";
function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Home
      </Link>
      <ul>
        <CustomLink to="/projects">Projects</CustomLink>
        <CustomLink to="/work">Work Experience</CustomLink>
        <a href={Resume} target="_blank" rel="noreferrer">
          Resume
        </a>
      </ul>
    </nav>
  );
}
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true }); //true - entire path must match
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
export default Navbar;
