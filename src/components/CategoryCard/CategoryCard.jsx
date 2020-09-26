import React from "react";
import { Link } from "react-router-dom";

function CategoryCard(props) {
    //variables
    const { categoryData } = props;

    //template
    return (
        <div className="category-card">
        <Link to={`/category/${categoryData.id}`}>
            <img alt="" src="https://picsum.photos/301" />
            <h3>{categoryData.name}</h3>
            {/* <h4>{categoryData.description}</h4> */}
            {/* <p>{projectData.category.join(", ")}</p> */}
        </Link>
        </div>
    );
}

export default CategoryCard;