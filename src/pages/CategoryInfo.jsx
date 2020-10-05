import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function CategoryInfo(props) {
  const [categoryData, setCategoryData] = useState({
    projects: [{}],
  });
  const { name } = useParams();
  // const { projects } = useState();
  const date = new Date(categoryData.created_at);
  const date_updated = new Date(categoryData.updated_at);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}category/${name}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setCategoryData(data);
      });
  }, [name]);
  console.log(name);
  return (
    <div id="category-page">
      <img className="category-card" alt="" src={categoryData.image} />
      <div id="category-page-text">
        <h2>{categoryData.name}</h2>

        <p>{categoryData.description}</p>
      </div>
    </div>
  );
}

export default CategoryInfo;
