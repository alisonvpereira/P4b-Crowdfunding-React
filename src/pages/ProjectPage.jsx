import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import { oneProject } from "../data";

function ProjectPage() {
  const [projectData, setProjectData] = useState({ pledges: [] });
  const { id } = useParams();
  const date = new Date(projectData.date_created);
  console.log(projectData);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectData(data);
      });
  }, [id]);
  return (
    <div id="project-page">
      <h2>{projectData.title}</h2>
      <h6>Created on: {date.toLocaleDateString()}</h6>
      <h6>
        {`Status: ${projectData.is_open === false ? "Closed" : "Active"}`}{" "}
      </h6>

      <div class="categories">
        {projectData.category != null
          ? projectData.category.map((cat, i) => (
              <Link to={`/category/${cat}`}>
                <h5>
                  {cat}
                  {i < projectData.category.length - 1 ? ", " : ""}
                </h5>
              </Link>
            ))
          : "No categories"}
      </div>
      <h2>{projectData.description}</h2>
      <h3>Pledges:</h3>
      <ul>
        {projectData.pledges.map((pledgeData, key) => {
          return (
            <li>
              {pledgeData.hours} hour{pledgeData.hours === 1 ? "" : "s"} from{" "}
              <Link id="" to={`/users/${pledgeData.volunteer}`}>
                {pledgeData.volunteer}
              </Link>{" "}
              <Link id="" to={`/skills/${pledgeData.skill}`}>
                ({pledgeData.skill.join(", ")})
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProjectPage;
