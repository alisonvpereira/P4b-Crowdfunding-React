import React from "react";
import { Link } from "react-router-dom";

function ProjectCard(props) {
    //variables
    const { projectData } = props;

    //template
    return (
        <div className="project-card">
        <Link to={`/project/${projectData.id}`}>
            <img alt="" src={projectData.image} />
            <h3>{projectData.title}</h3>
            <h4>{projectData.owner}</h4>
            <p>{projectData.category.join(", ")}</p>
        </Link>
        </div>
    );
}

export default ProjectCard;