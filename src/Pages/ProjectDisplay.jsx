import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../Helpers/ProjectList";
import GithubIcon from "@mui/icons-material/GitHub";
import "../Styles/ProjectDisplay.css";

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt="img" />
      <p>Skills : {project.skills}</p>
      <a href="https://github.com/taufanaziesamudra">
        <GithubIcon />
      </a>
    </div>
  );
};

export default ProjectDisplay;
