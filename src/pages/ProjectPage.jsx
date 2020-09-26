import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { oneProject } from "../data";


function ProjectPage() {
    const [projectData, setProjectData] = useState({ pledges: [] });
    const { id } = useParams();
    const date = new Date(projectData.date_created);
    const readableDate = date.toString();
    // console.log(projectData)
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProjectData(data);
        });
    }, [id]);
    return (
        <div>
           <h2>{projectData.title}</h2> 
           <h3>Created at: { readableDate } {date.toLocaleDateString()}</h3>
           <h3>{`Status: ${projectData.is_open === false ? "Closed" : "Active"}`} </h3>
           <h3>Pledges:</h3>
           <ul>
               {projectData.pledges.map((pledgeData, key) => {
                   return (
                       <li>
                           {pledgeData.hours} hour{pledgeData.hours === 1 ? "" : "s"} from {pledgeData.volunteer} ({pledgeData.skill.join(", ")})
                       </li>
                   );
               })}
           </ul>
        </div>
    );
}

export default ProjectPage;