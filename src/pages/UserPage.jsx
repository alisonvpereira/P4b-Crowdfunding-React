import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function UserPage() {
  const [userData, setUserData] = useState([]);
  const { username } = useParams();
  const date = new Date(userData.created_at);

  console.log(userData);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}users/${username}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setUserData(data);
      });
  }, [username]);
  return (
    <div id="user-page">
      <img className="user-card" alt="" src={userData.image} />
      <div id="user-page-text">
        <pre>
          <h2>{userData.fullname ? userData.fullname : userData.username}</h2>
          {userData.skills != null && userData.skills.length > 0 && (
            <h3>
              <span>{userData.skills.join(", ")}</span>
            </h3>
          )}

          <p>Member Since: {date.toDateString()} </p>

          <a href="mailto:${userData.email}">
            <p>{userData.email}</p>
          </a>
        </pre>

        <p>{userData.bio}</p>
      </div>
      <div id="user-page-text">
        {/* <ul>
        {userData.projects.map((projectData, key) => {
          return (
            <li>
              {pledgeData.hours} hour{pledgeData.hours === 1 ? "" : "s"} from{" "}
              {pledgeData.volunteer} ({pledgeData.skill.join(", ")})
            </li>
          );
        })}
      </ul> */}
      </div>
    </div>
  );
}

export default UserPage;
