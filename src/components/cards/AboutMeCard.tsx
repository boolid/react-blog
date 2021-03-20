import React, { CSSProperties } from "react";

import "./AboutMeCard.css";
import "./default.css";

interface IAboutMeCard {
  style?: CSSProperties;
  backgroundImg: string;
  faceImg: string;
  name: string;
  description: string;
}

const AboutMeCard: React.FC<IAboutMeCard> = ({
  style,
  backgroundImg,
  faceImg,
  name,
  description,
}) => {
  return (
    <div style={style}>
      <div className="card about-me-card">
        <div
          className="about-me-background-picture"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        />
        <div
          className="about-me-profile-picture"
          style={{ backgroundImage: `url(${faceImg})` }}
        />
        <div className="about-me-details">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeCard;
