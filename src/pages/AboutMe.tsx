import React from "react";
import { aboutMeDetails } from "../config/aboutme";

const AboutMe: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <h1>About Me</h1>
      <div>
        I don't know why you are reading this page... But if you are reading
        this page, welcome! I guess you are here to learn a bit more about me.
      </div>
      <div>
        <h3>Little bit about me</h3>
        <p>{aboutMeDetails.shortDescription}</p>
      </div>
      <div>
        <h3>What is this blog about?</h3>
        <p>{aboutMeDetails.blogDescription}</p>
      </div>
      <div>
        <h3>Ask Me Any Questions!</h3>
        <p>
          Shoot me something and I'll response to you! You can contact me in
          almost any social media.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
