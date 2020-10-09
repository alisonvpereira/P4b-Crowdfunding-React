import React from "react";
import ProjectForm from "../components/Forms/ProjectForm";
import useModal from "../components/Modals/useModal";
import ProjectModal from "../components/Modals/ProjectModal";
import UserCreateForm from "../components/Forms/UserCreateForm";
import LoginForm from "../components/Forms/LoginForm";

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
    <div id="project-list">
      <div>
        <h2>create a profile</h2>
        <UserCreateForm />
      </div>
    </div>
  );
}

export default HomePage;
