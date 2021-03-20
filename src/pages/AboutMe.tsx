import React from "react";
import AboutMeCard from "../components/cards/AboutMeCard";

const Project: React.FC = () => {
  const borderStyle = {
    border: "1px",
    borderStyle: "solid",
    borderColor: "black",
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <h1
          style={{
            boxShadow: "0px 0px 90px rgba(34, 35, 58, 0.5)",
            ...borderStyle,
          }}
        >
          12312.
        </h1>
        <AboutMeCard
          backgroundImg="./image/banner.png"
          faceImg="./image/banner.png"
          name="Chang Joo Jeon"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, quo!"
        />
      </div>
    </>
  );
};

export default Project;
