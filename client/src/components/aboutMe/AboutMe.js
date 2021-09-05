import React from "react";
import "./AboutMe.scss";
import profilePic from "../../assets/images/Profile.jpg";

export default function AboutMe() {
  return (
    <div id="aboutMe" className="aboutMeContainer">
      <div className="imageContainer">
        <img src={profilePic} alt="" className="profilePic" />
      </div>
      <div className="textContainer">
        <h1 className="aboutMe">About Me</h1>
        <p className="aboutMeMainText">
          Hey! My name is Brian Ward, I am a father of 4, and I come from a
          small town near Charleston, SC. I have been in the workforce for
          nearly 20 years, and when Covid hit I decided a change was necessary.
          Fast forward a little and I am so happy I made this decision. I have
          always excelled in any job I had, and now I have found something I
          love doing. <br></br>
          <br></br>
          Here are some technologies I've been working with recently{" "}
        </p>
        <ul className="skillsList">
          <li>JavaScript (ES6+)</li>
          <li>CSS</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>React</li>
          <li>BootStrap</li>
        </ul>
      </div>
    </div>
  );
}
