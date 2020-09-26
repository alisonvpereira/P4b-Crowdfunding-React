import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function CategoryPage() {
    const [categoryData, setCategoryData] = useState([])
        ;
    const { id } = useParams();
    const date = new Date(categoryData.created_at);
    const date_updated = new Date(categoryData.updated_at);

    console.log(categoryData)
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}category/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setCategoryData(data);
        });
    }, [id]);
    return (
        <div id="category-page">
           <img class="category-card" alt="" src={categoryData.image} />
           <div id="category-page-text" >
                <h2>{categoryData.name}</h2> 
                <h6>Created: {date.toDateString()} </h6>
                <h6>Last Updated: {date_updated.toDateString()} </h6>
                {/* <h6>{`Status: ${projectData.is_open === false ? "Closed" : "Active"}`} </h6> */}
                <p>{categoryData.description}</p>
                {/* <h3>Pledges:</h3> */}
                {/* <ul>
                    {projectData.pledges.map((pledgeData, key) => {
                        return (
                            <li>
                                {pledgeData.hours} hour{pledgeData.hours === 1 ? "" : "s"} from {pledgeData.volunteer} ({pledgeData.skill.join(", ")})
                            </li>
                        );
                    })}
                </ul> */}
            </div>
        </div>
    );
}

export default CategoryPage;