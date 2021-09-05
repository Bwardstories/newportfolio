import React from "react";
import "./Introduction.scss";

export default function Introduction() {
  return (
    <div id="intro" className="introContainer">
      <span className="introPreName">Hello, my name is</span>
      <h1 className="myName">Brian Ward</h1>
      <h1 className="briefIntro">
        I am a certified front-end software engineer
      </h1>
      <div className="introText">
        If you're looking for a highly motivated, fast learning team player who
        loves helping others learn new concepts, then look no further. Well,
        look as far as the end of this portfolio, then, look no further. Or,
        even if you're not an employer but love coding with a partner, then
        reach out VIA email or linkedin. Let's build things. Together.
      </div>
    </div>
  );
}
