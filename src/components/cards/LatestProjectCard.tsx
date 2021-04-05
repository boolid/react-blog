import React, { CSSProperties } from "react";
import { Comment, Heart } from "../icons";

import "./LatestProjectCard.css";
import "./default.css";
import { IProject } from "../../config/project";
import { Link } from "react-router-dom";

interface ILatestProjectCard {
  style?: CSSProperties;
  project: IProject;
}

const LatestProjectCard: React.FC<ILatestProjectCard> = ({
  style,
  project,
}) => {
  return (
    <div style={style}>
      <Link className="card latest-project-card" to={"/project/" + project.id}>
        <div
          className="latest-project-image"
          style={{
            backgroundImage: `url(${project.backgroundImg})`,
          }}
        />
        <div className="latest-project-detail">
          <h4>Check Out the Latest Project!</h4>
          <h2>{project.title}</h2>
          <p>{project.shortDescription}</p>
          {/*<div className="latest-project-action">*/}
          {/*  <div>*/}
          {/*    <Comment /> {project.comments.length}*/}
          {/*  </div>*/}
          {/*  <div>*/}
          {/*    <Heart /> {project.likes}*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </Link>
    </div>
  );
};

export default LatestProjectCard;
