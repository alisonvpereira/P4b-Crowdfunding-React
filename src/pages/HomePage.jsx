import React from "react";
import ProjectForm from "../components/Forms/ProjectForm";
import useModal from "../components/Modals/useModal";
import ProjectModal from "../components/Modals/ProjectModal";
import PledgeModal from "../components/Modals/PledgeModal";
import UserCreateForm from "../components/Forms/UserCreateForm";
import LoginForm from "../components/Forms/LoginForm";
import logo from "../../src/components/Nav/skillender-logo-wht.png";
import { Link } from "react-router-dom";

function HomePage() {
  const { isShowing, toggle } = useModal();

  return localStorage.username ? (
    <div id="project-list">
      {/* <button className="button-default" onClick={toggle}>
        add a project
      </button>
      <ProjectModal isShowing={isShowing} hide={toggle} /> */}
      <div className="homepage">
        <h2>welcome to </h2>
        <img src={logo}></img>
        <div style={{ color: "grey", textAlign: "justify" }}>
          ... a crowdsourcing site where not for profit organisations can access
          a technical resource pool to address technological deficits in their
          systems and processes by posting projects and accepting pledges of
          skills and hours from volunteers.
        </div>
        <h3>who will you lend your skills to today?</h3>
        <div>
          <a
            className="button-default"
            style={{ padding: "5px", borderRadius: "5px" }}
            href="/projects"
          >
            browse projects
          </a>
        </div>
      </div>
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
