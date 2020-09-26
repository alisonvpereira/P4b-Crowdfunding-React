import React from "react";
import { Link } from "react-router-dom";

function CategoryCard(props) {
    //variables
    const { categoryData } = props;

    //template
    return (
        <div className="category-card">
        <Link to={`/category/${categoryData.id}`}>
            <img alt="" src={categoryData.image} />  
            <h3>{categoryData.name}</h3>    
        </Link>
        </div>
    );
}

export default CategoryCard;