import React from "react";
import { useParams } from "react-router-dom";

import { projects } from "../config/project";

interface IParams {
  id: string;
}

const Project: React.FC = () => {
  const { id } = useParams<IParams>();

  // Finding the project
  const project = projects.find((project) => project.id === parseInt(id));

  return (
    <div>
      {project ? (
        <div>
          <div
            style={{
              width: "100%",
              height: "20rem",
              backgroundImage: `url(.${project.backgroundImg})`,
            }}
          />
          <h1>{project.title}</h1>
          <p>{project.content}</p>
        </div>
      ) : (
        "Unable to find the project. Are you sure you are in the right page?"
      )}
    </div>
  );
};

export default Project;
