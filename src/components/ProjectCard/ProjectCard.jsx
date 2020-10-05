import React from "react";
import { Link } from "react-router-dom";
import useModal from "../Modals/useModal";
import LoginModal from "../Modals/LoginModal";
import ProgressBar from "./ProgressBar";

function ProjectCard(props) {
  //variables
  const { projectData } = props;
  const progress = Math.round(
    (projectData.total_pledge_hours / projectData.goal_hours) * 100
  );
  const { isShowing, toggle } = useModal();
  //template

  return (
    <div className="project-card">
      {localStorage.username ? (
        <Link to={`/projects/${projectData.id}`}>
          <img alt="" src={projectData.image} />
          <ProgressBar progress={progress} className="progress-bar" />
          <h3 style={{ margin: "0" }}>{projectData.title}</h3>
          {/* <h4 style={{ margin: "0" }}>by {projectData.owner}</h4> */}
          <p style={{ margin: "5px" }}>{projectData.category.join(", ")}</p>
        </Link>
      ) : (
        // <Link to={`/login`}>
        //   <img alt="" src={projectData.image} />
        //   <h3 style={{ margin: "0" }}>{projectData.title}</h3>
        // </Link>
        <div>
          <img alt="" src={projectData.image} />
          <button className="button-default" onClick={toggle}>
            <h3 style={{ margin: "0" }}>{projectData.title}</h3>
          </button>
          <LoginModal isShowing={isShowing} hide={toggle} />
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
