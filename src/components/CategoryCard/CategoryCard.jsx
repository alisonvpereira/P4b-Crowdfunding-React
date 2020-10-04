import React from "react";
import { Link } from "react-router-dom";

function CategoryCard(props) {
  //variables
  const { categoryData } = props;

  //template
  return (
    <div className="category-card">
      {localStorage.username ? (
        <Link to={`/category/${categoryData.name}`}>
          <img alt="" src={categoryData.image} />
          <h3>{categoryData.name}</h3>
        </Link>
      ) : (
        <Link to={`/login`}>
          <img alt="" src={categoryData.image} />
          <h3>{categoryData.name}</h3>
        </Link>
      )}
    </div>
  );
}

export default CategoryCard;
