import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PledgeForm from "../components/Forms/PledgeForm";
import ProgressBar from "../components/ProjectCard/ProgressBar";
import useModal from "../components/Modals/useModal";
import PledgeModal from "../components/Modals/PledgeModal";
import ProjectEditModal from "../components/Modals/ProjectEditModal";
import ProjectDeleteModal from "../components/Modals/ProjectDeleteModal";
import ProjectDeleteForm from "../components/Forms/ProjectDeleteForm";
import PledgeDeleteForm from "../components/Forms/PledgeDeleteForm";
import PledgeEditForm from "../components/Forms/PledgeEditForm";
// import { oneProject } from "../data";

function ProjectPage() {
  const [projectData, setProjectData] = useState({ pledges: [] });
  const { id } = useParams();
  const progress = Math.round(
    (projectData.total_pledge_hours / projectData.goal_hours) * 100
  );
  const created_date = new Date(projectData.date_created);
  const closed_date = new Date(projectData.date_updated);
  const { isShowing, toggle } = useModal();

  // console.log(projectData.total_pledge_hours);
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
          <div className="categories">
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

          <a href={`/users/${projectData.owner}`}>
            <p>Listed by: {projectData.owner}</p>
          </a>
        </pre>
        {localStorage.username === projectData.owner ? (
          <div id="user-page-text-buttons">
            <div>
              <button className="button-default" onClick={toggle}>
                edit
              </button>
              <ProjectEditModal
                project_id={id}
                isShowing={isShowing}
                hide={toggle}
              />
            </div>
            <div>
              <ProjectDeleteForm project_id={id}></ProjectDeleteForm>
            </div>
          </div>
        ) : null}

        <p>{projectData.description}</p>
        <ProgressBar progress={progress} className="progress-bar" />
      </div>
      <div id="pledge-list">
        <h3>
          <span>
            Goal is {projectData.goal_hours} hours:{" "}
            {projectData.total_pledge_hours} hours pledged so far
          </span>
        </h3>
        {projectData.pledges.map((pledgeData, key) => {
          return (
            <div id="pledge-list">
              <p>
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
                {localStorage.username === pledgeData.volunteer ? (
                  <button className="button">
                    <Link id="" to={`/pledges/${pledgeData.id}`}>
                      edit
                    </Link>
                  </button>
                ) : null}
              </p>
            </div>
          );
        })}
      </div>

      <div id="category-page-body">
        {localStorage.username === projectData.owner ? null : (
          <div>
            <button className="button-default" onClick={toggle}>
              add a pledge
            </button>
            <PledgeModal project_id={id} isShowing={isShowing} hide={toggle} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectPage;
