import React, { CSSProperties } from "react";
import { IAboutMe } from "../../config/aboutme";

import "./AboutMeCard.css";
import "./default.css";

interface IAboutMeCard {
  style?: CSSProperties;
  aboutMeDetails: IAboutMe;
}

const AboutMeCard: React.FC<IAboutMeCard> = ({ style, aboutMeDetails }) => {
  return (
    <div style={style}>
      <div className="card about-me-card">
        <div
          className="about-me-background-picture"
          style={{ backgroundImage: `url(${aboutMeDetails.backgroundImg})` }}
        />
        <div
          className="about-me-profile-picture"
          style={{ backgroundImage: `url(${aboutMeDetails.faceImg})` }}
        />
        <div className="about-me-details">
          <h3>{aboutMeDetails.name}</h3>
          <p>{aboutMeDetails.shortDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeCard;
