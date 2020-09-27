import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function SkillPage() {
    const [skillData, setSkillData] = useState([]);
    const { id } = useParams();
    const date = new Date(skillData.created_at);
    const date_updated = new Date(skillData.updated_at);
    
    // console.log(projectData)
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}skills/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setSkillData(data);
        });
    }, [id]);
    return (
        <div id="category-page">
            <img className="category-card" alt="" src={skillData.image} />
            <div id="category-page-text" >
                <h2>{skillData.name}</h2> 
                <h6>Created: {date.toDateString()} </h6>
                <h6>Last Updated: {date_updated.toDateString()} </h6>               
                <p>{skillData.description}</p>
                
            </div>
        </div>
    );
}

export default SkillPage;