import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css"

function Navbar() {
  return (
    <div id="nav">
      <Link className="link">Twinkle S</Link>
      <div id="nav-child">
        <Link className="link" to={"/"}>About Me</Link>
        <Link className="link" to={"/skills"}>Skills</Link>
        <Link className="link" to={"/projects"}>Projects</Link>
        <Link className="link" to={"/Contacts"}>Contact</Link>
        
      </div>
    </div>
  );
}

export default Navbar;
