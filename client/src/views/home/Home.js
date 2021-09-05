import React from "react";
import Introduction from "../../components/introduction/Introduction";
import AboutMe from "../../components/aboutMe/AboutMe";
import "./Home.scss";
import ProjectSection from "../../components/projectSection/ProjectSection";

export default function Home() {
  return (
    <div className="mainContainer">
      <Introduction />
      <AboutMe />
      <ProjectSection />
    </div>
  );
}
