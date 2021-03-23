import React from "react";
import { IProject } from "../config/project";

import ProjectCard from "../components/cards/ProjectCard";

interface IProjects {
  projects: IProject[];
}

const Projects: React.FC<IProjects> = ({ projects }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {projects.map((project) => {
        return (
          <ProjectCard
            key={project.id}
            style={{ padding: "1rem" }}
            project={project}
          />
        );
      })}
    </div>
  );
};

export default Projects;
