import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import { oneProject } from "../data";

function ProjectPage() {
  const [projectData, setProjectData] = useState({ pledges: [] });
  const { id } = useParams();
  const created_date = new Date(projectData.date_created);
  const closed_date = new Date(projectData.date_updated);
  console.log(closed_date);
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
    <div id="user-page">
      <img className="user-card" alt="" src={projectData.image} />
      <div id="user-page-text">
        <pre>
          <h2>{projectData.title}</h2>
          <div class="categories">
            {projectData.category != null
              ? projectData.category.map((cat, i) => (
                  <Link to={`/category/${cat}`}>
                    <h4>
                      {cat}
                      {i < projectData.category.length - 1 ? "," : ""}
                    </h4>
                  </Link>
                ))
              : "No categories"}
          </div>
          <p>
            {`${
              projectData.is_open === false
                ? `Closed ${closed_date.toDateString()}`
                : `Active since ${created_date.toDateString()}`
            }`}
          </p>

          <a href="">
            <p>add owner email</p>
          </a>
        </pre>
        <p>{projectData.description}</p>
      </div>
      <div id="pledge-list">
        <h3>Pledges:</h3>

        {projectData.pledges.map((pledgeData, key) => {
          return (
            <div id="pledge-list">
              {pledgeData.hours} hour{pledgeData.hours === 1 ? "" : "s"} from{" "}
              <Link id="" to={`/users/${pledgeData.volunteer}`}>
                {pledgeData.volunteer}
              </Link>
              {" ("}
              {pledgeData.skill != null
                ? pledgeData.skill.map((skill, i) => (
                    <Link to={`/skills/${skill}`}>
                      {skill}
                      {i < pledgeData.skill.length - 1 ? "," : ""}
                    </Link>
                  ))
                : ""}
              {")"}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectPage;
