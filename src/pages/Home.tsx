import React from "react";
import LatestProjectCard from "../components/cards/LatestProjectCard";
import AboutMeCard from "../components/cards/AboutMeCard";

const Home: React.FC = () => {
  return (
    <>
      <div className="banner" style={{ width: "100%" }}>
        <img src="./images/banner.png" style={{ width: "100%" }} alt="banner" />
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
          img="./images/banner.png"
          title="Building a blogging website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum
          quam vel massa convallis pharetra. Suspendisse lobortis lorem ac enim
          convallis porttitor. Donec et felis nec eros varius rutrum mattis vel
          tortor. Vivamus euismod ex ac risus facilisis, quis accumsan ligula
          tincidunt."
          comments={100}
          likes={1000}
        />
        <AboutMeCard
          style={{ flexGrow: 1, padding: "1rem" }}
          backgroundImg="./images/banner.png"
          faceImg="./images/lion.jpeg"
          name="Chang Joo Jeon"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquid aperiam consequuntur dolorem doloremque dolorum eaque eius ex fuga illo incidunt, libero magnam nobis non nulla sed. Iusto, molestias!"
        />
      </div>
    </>
  );
};

export default Home;
