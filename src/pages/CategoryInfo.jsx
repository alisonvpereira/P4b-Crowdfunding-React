import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

function CategoryInfo(props) {
  const { categoryData } = props;

  console.log(categoryData);
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
