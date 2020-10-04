import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function SkillPage() {
  const [skillData, setSkillData] = useState({
    pledges: [{}],
  });
  const { name } = useParams();
  const date = new Date(skillData.created_at);
  const date_updated = new Date(skillData.updated_at);

  // console.log(projectData)
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}skills/${name}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setSkillData(data);
      });
  }, [name]);
  console.log(skillData.pledges);
  return (
    <div id="category-page">
      <img className="category-card" alt="" src={skillData.image} />
      <div id="category-page-text">
        <h2>{skillData.name}</h2>
        <h6>Created: {date.toDateString()} </h6>
        <h6>Last Updated: {date_updated.toDateString()} </h6>
        <p>{skillData.description}</p>
      </div>

      <div id="user-page-body">
        <h3>
          {skillData.pledges.length > 0
            ? "related projects"
            : "no related projects"}
        </h3>

        {skillData.pledges.map((pledge, i) => (
          <Link to={`/projects/${pledge.project_id}`}>
            {pledge.project_title}
            {i < skillData.pledges.length - 1 ? "," : ""}
          </Link>
        ))}
      </div>

      <div id="user-page-body">
        <h3>
          {skillData.pledges.length > 0
            ? "related volunteers"
            : "no related volunteers"}
        </h3>

        {skillData.pledges.map((pledge, i) => (
          <Link to={`/users/${pledge.volunteer}`}>
            {pledge.volunteer}
            {i < skillData.pledges.length - 1 ? "," : ""}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SkillPage;
