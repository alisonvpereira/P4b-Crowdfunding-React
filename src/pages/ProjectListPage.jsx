import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import "../components/ProjectCard/ProjectCard.css";

function ProjectListPage() {
  const [projectList, setProjectList] = useState([]);
  // console.log(projectList);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectList(data);
      });
  }, []);
  return (
    <div id="project-list">
      {projectList.map((projectData, key) => {
        return projectData.is_open ? (
          <ProjectCard key={key} projectData={projectData} />
        ) : null;
      })}
    </div>
  );
}

export default ProjectListPage;
