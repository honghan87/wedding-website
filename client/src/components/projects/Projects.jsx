import React from "react";
import "./projects.scss";
import Project from "../project/Project";
import { projects } from "../../data/menuLink";

function Projects() {
  return (
    <div className="mainProject">
      <section className="projectsText">
        <div className="projectsTextContainer">
          <h1>Our Projects</h1>
          <p>
            The spread of eye candy below encapsulates among some of our
            favourite moments we love basking and reliving over and over again.
            Though we particularly love weddings, we love to be part of all
            kinds of creative dreams, whether it’s children, old folks or
            whether it’s a business or a family affair.
          </p>
        </div>
      </section>
      <section className="projectsContainer">
        <div className="projectsPhotoContainer">
          {projects.map((project) => (
            <Project key={project.id} client={project.client} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
