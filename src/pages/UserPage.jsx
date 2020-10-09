import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PledgeForm from "../components/Forms/PledgeForm";
import ProjectForm from "../components/Forms/ProjectForm";
import useModal from "../components/Modals/useModal";
import UserEditProfileForm from "../components/Forms/UserProfileEditForm";
import UserProfileEditModal from "../components/Modals/UserProfileEditModal";
import UserDeleteForm from "../components/Forms/UserDeleteForm";

function UserPage() {
  const [userData, setUserData] = useState({
    user: [{}],
  });
  const { username } = useParams();
  const date = new Date(userData.created_at);
  const { isShowing, toggle } = useModal();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}users/${username}`)
      .then((results) => {
        return results.json();
      })
      .then((data, user) => {
        setUserData(data, user);
      });
  }, [username]);
  // console.log(userData.user.owner_projects);
  return (
    <div id="user-page">
      <img className="user-card" alt="" src={userData.image} />
      <div id="user-page-text">
        <pre>
          <h2>{userData.fullname ? userData.fullname : userData.username}</h2>

          <div className="categories">
            {userData.skills != null
              ? userData.skills.map((skill, i) => (
                  <Link to={`/skills/${skill}`}>
                    <h4>
                      {skill}
                      {i < userData.skills.length - 1 ? "," : ""}
                    </h4>
                  </Link>
                ))
              : "No skills added"}
          </div>

          <p>Member Since: {date.toDateString()} </p>

          <a href={`mailto:${userData.user.email}`}>
            <p>{userData.user.email}</p>
          </a>
        </pre>

        {localStorage.username === userData.username ? (
          <div id="user-page-text-buttons">
            <div>
              <button className="button-default" onClick={toggle}>
                edit
              </button>
              {/* <UserEditProfileForm
                username={userData.username}
              ></UserEditProfileForm> */}
              <UserProfileEditModal
                username={userData.username}
                isShowing={isShowing}
                hide={toggle}
              />
            </div>
            <div>
              <UserDeleteForm username={userData.username}></UserDeleteForm>
            </div>
          </div>
        ) : null}

        <p>{userData.bio}</p>
      </div>

      <div id="user-page-section">
        {userData.user.owner_projects ? (
          <div id="user-page-body">
            {userData.user.owner_projects.length > 0 ? (
              <h3>related projects</h3>
            ) : (
              <div>
                <h3>no related projects</h3>
              </div>
            )}
            <div id="user-page-text">
              {userData.user.owner_projects.map((projectData, i) => (
                <Link to={`/projects/${projectData.id}`}>
                  {projectData.title}
                  {i < userData.user.owner_projects.length - 1 ? "," : ""}
                </Link>
              ))}
            </div>
          </div>
        ) : null}

        {userData.user.pledges ? (
          <div id="user-page-body">
            {userData.user.pledges.length > 0 ? (
              <h3>related pledges</h3>
            ) : (
              <h3>no related pledges</h3>
            )}
            <div id="user-page-text">
              {userData.user.pledges.map((pledge, i) => (
                <Link to={`/projects/${pledge.project_id}`}>
                  {pledge.project_title}
                  {i < userData.user.pledges.length - 1 ? "," : ""}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
      <div id="user-page-section">
        {userData.username === localStorage.username ? (
          <div id="user-page-body">
            <h3>add a project</h3>
            <ProjectForm />
          </div>
        ) : null}

        {userData.username === localStorage.username ? (
          <div id="user-page-body">
            <h3>add a pledge</h3>
            <PledgeForm />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default UserPage;
