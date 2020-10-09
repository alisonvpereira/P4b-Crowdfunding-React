import React from "react";
import { Link } from "react-router-dom";
import useModal from "../Modals/useModal";
import LoginModal from "../Modals/LoginModal";

function SkillCard(props) {
  //variables
  const { skillData } = props;
  const { isShowing, toggle } = useModal();
  //template
  return (
    <div className="category-card">
      {localStorage.username ? (
        <Link to={`/skills/${skillData.name}`}>
          <img alt="" src={skillData.image} />
          <h3>{skillData.name}</h3>
        </Link>
      ) : (
        <div className="category-card">
          <img alt="" src={skillData.image} />
          <button className="button-default" onClick={toggle}>
            <h3>{skillData.name}</h3>
          </button>
          <LoginModal isShowing={isShowing} hide={toggle} />
        </div>
      )}
    </div>
  );
}

export default SkillCard;
