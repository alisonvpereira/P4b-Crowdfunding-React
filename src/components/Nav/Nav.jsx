import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "./skillender-logo-blk.png";
import Logout from "../Forms/Logout";
import useModal from "../Modals/useModal";
import LoginModal from "../Modals/LoginModal";
import ProjectModal from "../Modals/ProjectModal";
import CreateUserForm from "../Forms/CreateUserForm";
import CreateUserModal from "../Modals/CreateUserModal";

function Nav() {
  const { isShowing, toggle } = useModal();
  return (
    <nav>
      <div>
        <Link to="/">
          <img alt="" src={logo} className="Logo" />
        </Link>
        {localStorage.username ? (
          <div>
            <div>
              <Link id="nav-username" to={`/users/${localStorage.username}`}>
                welcome back, {localStorage.username}!
              </Link>
            </div>
            <div id="nav-username">
              <button
                id="nav-username"
                className="button-default"
                onClick={toggle}
              >
                add a project
              </button>
              <ProjectModal isShowing={isShowing} hide={toggle} />
            </div>
          </div>
        ) : (
          <div>
            <div id="nav-username">
              <button className="button-default" onClick={toggle}>
                Login
              </button>
              <LoginModal isShowing={isShowing} hide={toggle} />
            </div>
          </div>
        )}
        {localStorage.username ? <Logout /> : ""}
      </div>

      <div id="navbar">
        <Link to="/projects">Projects</Link>
        <Link to="/category">Categories</Link>
        {localStorage.username ? <Link to="/users">Profiles</Link> : ""}
        <Link to="/skills">Skills</Link>
      </div>
    </nav>
  );
}

export default Nav;
