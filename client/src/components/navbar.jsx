import React from "react";
import "../style/Navbar.scss";

export default function NavBar(props) {
  return (
    <div className="container">
      
        <div className="info">
          <h1>Rui Dantas </h1>
          <p> Full-Stack Developer</p>
        </div>

        <div className="nav--list">
          <li onClick={() => props.setHomeTrue()}>Home</li>
          <li onClick={() => props.setProjects()}>Projects</li>
          <li onClick={() => props.setInfo()}>Info</li>
          <li onClick={() => props.setContact()}>Contact</li>
        </div>
     
    </div>
  );
}
