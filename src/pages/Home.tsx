import React from "react";
import LatestProjectCard from "../components/cards/LatestProjectCard";
import AboutMeCard from "../components/cards/AboutMeCard";
import { projects } from "../config/project";
import { aboutMeDetails } from "../config/aboutme";

const Home: React.FC = () => {
  return (
    <>
      <div style={{ width: "100%", borderRadius: "25px" }}>
        <img
          src="./images/welcome-banner.png"
          style={{ width: "100%" }}
          alt="welcome-banner"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <LatestProjectCard
          style={{ flexGrow: 4, padding: "1rem" }}
          project={projects[0]}
        />
        <AboutMeCard
          style={{ flexGrow: 1, padding: "1rem" }}
          aboutMeDetails={aboutMeDetails}
        />
      </div>
    </>
  );
};

export default Home;
