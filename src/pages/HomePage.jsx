import React from "react";
import { allProjects } from "../data.js";


function HomePage() {
    return (
        <div>
            {allProjects.map((projectData, key) => {
                return <div key={key}>{projectData.title}</div>
            })}
        </div>
    );
}

export default HomePage;
