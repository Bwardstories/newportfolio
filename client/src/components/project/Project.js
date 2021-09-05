import React from "react";
import "./Project.scss";
import { useMediaQuery } from "react-responsive";

//  this component renders each project section dynamically, passed down through props from the ProjectSection component

export default function Project(props) {
  const { project, id } = props;

  const isDesktop = useMediaQuery({ query: "(min-width: 1400px)" });

  //   switch out rendering dynamically for each project so the layout reverses every other one
  return id % !2 === 0 ? (
    <div
      id={id}
      className={
        isDesktop ? "projectContainer" : "projectContainer flex-md-column"
      }>
      <a href={project.url}>
        <div
          className="projectImageContainer"
          style={{ backgroundImage: `url(${project.image})` }}></div>
      </a>
      <div className="projectInfoContainer">
        <div className="infoContainer">
          <div className="descriptionContainer">
            <h2 className="projectTitle">{project.title}</h2>
            {project.description}
            <br></br>
            Click <a href={project.github}>Here </a>
            for the github repository
          </div>
          <ul className="evenSkillList">
            {project.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <div id={id} className={"projectContainer"}>
      <div className="projectInfoContainer">
        <div className="infoContainer">
          <div className="descriptionContainer">
            <h2 className="projectTitle">{project.title}</h2>
            {project.description}
            <br></br>
            {/* checks if the project is a full stack app or not, and then renders the github links accordingly */}
            {project.fullStack === true ? (
              <>
                {/* links to github projects passed down through props */}
                Click <a href={project.github}>Here </a>
                for the Client repository And
                <a href={project.githubBackend}>Here</a>
                for the server repository
              </>
            ) : (
              <>
                Click <a href={project.github}>Here </a>
                for the github repository
              </>
            )}
          </div>
          <ul className="skillList">
            {project.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
      <a href={project.url}>
        <div
          className="projectImageContainer"
          style={{ backgroundImage: `url(${project.image})` }}></div>
      </a>
    </div>
  );
}
