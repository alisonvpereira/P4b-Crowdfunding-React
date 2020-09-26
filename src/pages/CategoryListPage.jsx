import React, {useState, useEffect } from "react";
import { allProjects } from "../data.js";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import "../components/CategoryCard/CategoryCard.css";


function CategoryListPage() {
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}category`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setCategoryList(data);
        });
        // setProjectList(allProjects);
    }, []);
    return (
        <div id="category-list">
            {categoryList.map((categoryData, key) => {
                return <CategoryCard key={key} categoryData={categoryData} />;
            })}
        </div>
    );
}

export default CategoryListPage;
