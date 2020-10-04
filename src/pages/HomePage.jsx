import React from "react";
import ProjectForm from "../components/Forms/ProjectForm";

function HomePage() {
  return localStorage.username ? (
    <div>
      <h6>this is the homepage</h6>
      <ProjectForm />
    </div>
  ) : (
    <h6>must be logged in</h6>
  );
}

export default HomePage;
