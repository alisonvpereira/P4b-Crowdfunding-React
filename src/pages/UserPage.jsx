import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function UserPage() {
  const [userData, setUserData] = useState({
    user: [{}],
  });
  const { username } = useParams();
  const date = new Date(userData.created_at);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}users/${username}`)
      .then((results) => {
        return results.json();
      })
      .then((data, user) => {
        setUserData(data, user);
      });
  }, [username]);
  console.log(userData.user.owner_projects);
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

          <a href="mailto:${userData.user.email}">
            <p>{userData.user.email}</p>
          </a>
        </pre>

        <p>{userData.bio}</p>
      </div>

      {userData.user.owner_projects ? (
        <div id="user-page-body">
          {userData.user.owner_projects.length > 0 ? (
            <h3>related projects</h3>
          ) : (
            <h3>no related projects</h3>
          )}
          {userData.user.owner_projects.map((projectData, i) => (
            <Link to={`/project/${projectData.id}`}>
              {projectData.title}
              {i < userData.user.owner_projects.length - 1 ? "," : ""}
            </Link>
          ))}
        </div>
      ) : null}

      {userData.user.pledges ? (
        <div id="user-page-body">
          {userData.user.pledges.length > 0 ? (
            <h3>related pledges</h3>
          ) : (
            <h3>no related pledges</h3>
          )}
          {userData.user.pledges.map((pledge, i) => (
            <Link to={`/project/${pledge.project_id}`}>
              {pledge.project_title}
              {i < userData.user.pledges.length - 1 ? "," : ""}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default UserPage;
