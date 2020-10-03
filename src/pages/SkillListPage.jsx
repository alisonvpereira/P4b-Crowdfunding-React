import React, { useState, useEffect } from "react";
import SkillCard from "../components/SkillCard/SkillCard";
import "../components/CategoryCard/CategoryCard.css";

function SkillListPage() {
  const [skillList, setSkillList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}skills`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setSkillList(data);
      });
  }, []);
  // console.log(SkillListPage);
  return (
    <div id="category-list">
      {skillList.map((skillData, key) => {
        return <SkillCard key={key} skillData={skillData} />;
      })}
    </div>
  );
}

export default SkillListPage;
