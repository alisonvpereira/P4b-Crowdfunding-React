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
            <h3 style={{margin:"0"}}>{projectData.title}</h3>
            <h4 style={{margin:"0"}}>by {projectData.owner}</h4>
            <p style={{margin:"5px"}}>{projectData.category.join(", ")}</p>
        </Link>
        </div>
    );
}

export default ProjectCard;