import React, { CSSProperties } from "react";
import moment from "moment";

import { IProject } from "../../config/project";

import "./ProjectCard.css";
import "./default.css";
import { Link } from "react-router-dom";

interface IProjectCard {
  project: IProject;
  style?: CSSProperties;
}

const ProjectCard: React.FC<IProjectCard> = ({ style, project }) => {
  const date = moment(project.date);
  return (
    <div style={style}>
      <Link className="card project-card" to={"/project/" + project.id}>
        <div
          className="project-card-background"
          style={{
            backgroundImage: `url(${project.backgroundImg})`,
          }}
        />
        <div className="project-card-date">
          <h4>{date.format("MMM")}</h4>
          <h4>{date.format("D")}</h4>
          <h4>{date.format("YYYY")}</h4>
        </div>
        <div className="project-card-detail">
          <h2>{project.title}</h2>
          <p>{project.shortDescription}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
