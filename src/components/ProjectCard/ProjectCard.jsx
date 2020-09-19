import React from "react";
import { Link } from "react-router-dom";

function ProjectCard(props) {
    //variables
    const { projectData } = props;

    //template
    return (
        <div className="project-card">
        <Link to="/project">
            <img src={projectData.image} />
            <h3>{projectData.title}</h3>
            <p>{projectData.category.join(", ")}</p>
        </Link>
        </div>
    );
}

export default ProjectCard;