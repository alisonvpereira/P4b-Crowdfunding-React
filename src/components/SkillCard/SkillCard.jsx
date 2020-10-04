import React from "react";
import { Link } from "react-router-dom";

function SkillCard(props) {
  //variables
  const { skillData } = props;
  //template
  return (
    <div className="category-card">
      {localStorage.username ? (
        <Link to={`/skills/${skillData.name}`}>
          <img alt="" src={skillData.image} />
          <h3>{skillData.name}</h3>
        </Link>
      ) : (
        <Link to={`/login`}>
          <img alt="" src={skillData.image} />
          <h3>{skillData.name}</h3>
        </Link>
      )}
    </div>
  );
}

export default SkillCard;
