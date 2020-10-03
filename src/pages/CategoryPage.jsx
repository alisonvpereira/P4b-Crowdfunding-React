import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function CategoryPage() {
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
  // console.log(categoryData.projects);
  return (
    <div id="category-page">
      <img className="category-card" alt="" src={categoryData.image} />
      <div id="category-page-text">
        <h2>{categoryData.name}</h2>
        <h6>Created: {date.toDateString()} </h6>
        <h6>Last Updated: {date_updated.toDateString()} </h6>
        <p>{categoryData.description}</p>
      </div>

      <div id="category-page-body">
        <h3>
          {categoryData.projects.length > 0
            ? "related projects"
            : "no related projects"}
        </h3>

        {categoryData.projects.map((projectData, i) => (
          <Link to={`/project/${projectData.id}`}>
            {projectData.title}
            {i < categoryData.projects.length - 1 ? "," : ""}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
