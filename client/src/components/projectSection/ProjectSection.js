import React from "react";
import Project from "../project/Project";
import pokemonImage from "../../assets/images/pokemon.png";
import moodifyImage from "../../assets/images/moodify.png";
import "./ProjectSection.scss";

// project list to pass down through props to render project sections dynamically
const projectList = [
  {
    "id": 1,
    "title": "Moodify",
    "skills": ["React", "MongoDB", "Express", "Node.js", "Bootstrap"],
    "miniDesc": "App for creating and sharing song lists for different moods",
    "description":
      "Uses the spotify API and allows users to create a user profile which then allows you to create, share, and rate custom playlists.",
    "url": "https://sarahedwards715.github.io/capstonegroup7/",
    "image": moodifyImage,
    "github": "https://github.com/sarahedwards715/capstonegroup7",
    "githubBackend":
      "https://github.com/sarahedwards715/kapstone-group7-backend",
    "fullStack": true,
  },
  {
    "id": 2,
    "title": "Pokemon Search Engine",
    "skills": ["Javascript", "CSS", "HTML", "API"],
    "minDesc": "Pokemon search engine",
    "description":
      "A pokemon search engine which uses the Pokemon API, and then takes all of the stats for each pokemon and displays them on a card",
    "url": "https://bwardstories.github.io/Pokemon-Search-Engine/",
    "image": pokemonImage,
    "github": "https://github.com/Bwardstories/Pokemon-Search-Engine",
    "fullStack": false,
  },
];

export default function ProjectSection() {
  return (
    <div id="projectSection" className={"projectSectionContainer"}>
      <h1 className="projectSectionHeader">Notable Projects</h1>
      {/* maps through the ProjectList and renders each Project component, and passes down the data for each project through props */}
      {projectList.map((project, index) => (
        <Project project={project} key={index} id={project.id} />
      ))}
    </div>
  );
}
