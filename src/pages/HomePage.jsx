import React from "react";
import ProjectForm from "../components/Forms/ProjectForm";
import useModal from "../components/Modals/useModal";
import ProjectModal from "../components/Modals/ProjectModal";

function HomePage() {
  const { isShowing, toggle } = useModal();

  return localStorage.username ? (
    <div id="user-page">
      <button className="button-default" onClick={toggle}>
        add a project
      </button>
      <ProjectModal isShowing={isShowing} hide={toggle} />
    </div>
  ) : (
    <h6>must be logged in</h6>
  );
}

export default HomePage;
