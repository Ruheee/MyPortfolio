import React from "react";
import "../style/Projects.scss";
import projectData from "../data/projects.json";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import { useState } from "react";

export default function Projects(props) {
  const [currProj, setCurrProj] = useState(0);
  const length = projectData.length;

  const nextSlide = () => {
    setCurrProj(currProj === length - 1 ? 0 : currProj + 1);
  };

  const prevSlide = () => {
    setCurrProj(currProj === 0 ? length - 1 : currProj - 1);
  };

  if (!Array.isArray(projectData) || projectData.length <= 0) {
    return null;
  }
  return (
    <section className="project--container">
      <BsArrowLeftSquareFill
        onClick={() => {
          prevSlide();
        }}
        className="arr"
      />
      {projectData.map((proj, index) => {
        return (
          <>
            {index === currProj && (
              <div className="video--proj--info" key={index}>
                <img src={proj.video} alt="" />
                <div className="proj--info">
                  <span>{proj.title}</span>
                  <div className="desc">
                    <p>{proj.description}</p>
                    <a
                      href={`https://github.com/Ruheee/${proj.link}`}
                      target="#"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            )}
          </>
        );
      })}
      <BsArrowRightSquareFill
        onClick={() => {
          nextSlide();
        }}
        className="arr"
      />
    </section>
  );
}
