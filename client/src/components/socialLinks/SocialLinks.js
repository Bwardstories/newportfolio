import React from "react";
import "./SocialLinks.scss";
import githubLogo from "../../assets/icons/github.svg";
import linkedInLogo from "../../assets/icons/linkedin.svg";

export default function SocialLinks() {
  return (
    <div className="socialNavContainer">
      <a href="https://github.com/Bwardstories">
        <img
          className="githubIcon"
          alt=""
          src={githubLogo}
          width="30"
          height="30"
        />
      </a>
      <a href="https://www.linkedin.com/in/michael-brian-ward-6494951b2/">
        <img alt="" src={linkedInLogo} width="30" height="30" />
      </a>
    </div>
  );
}
