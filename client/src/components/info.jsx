import React from "react";
import { AiOutlineLinkedin, AiFillGithub, AiOutlineInstagram } from "react-icons/ai"
import "../style/Info.scss"

export default function Info() {
  return (
    <div className="social--media">
      <a href="https://www.linkedin.com/in/rui-dantas-043078248/" target="#" className="links"><AiOutlineLinkedin />LinkedIn</a> 
      <a href="https://github.com/Ruheee" target="#" className="links"><AiFillGithub />Github</a> 
      <a href="https://instagram.com/Ruixalexandxr" target="#" className="links"><AiOutlineInstagram />Instagram</a> 
    </div>
  );
}
