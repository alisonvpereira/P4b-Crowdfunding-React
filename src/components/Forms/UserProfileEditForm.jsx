import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "../Forms/Forms.css";
import UserDeleteForm from "./PledgeDeleteForm";

function UserProfileEditForm() {
  //variables
  const [userData, setUserData] = useState({});
  const { username } = useParams();
  const [skilllist, setSkillList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}skills/`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setSkillList(data);
      });
  }, []);
  // console.log(skilllist);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}users/${username}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setUserData(data);
      });
  }, [username]);
  console.log(userData);

  const [credentials, setCredentials] = useState({
    username: username,
    fullname: "",
    website: "",
    image: "",
    bio: "",
    skills: [],
  });

  useEffect(() => {
    setCredentials({
      username: username,
      fullname: userData.fullname,
      website: userData.website,
      image: userData.image,
      bio: userData.bio,
      skills: userData.skill,
    });
  }, [userData]);

  // methods
  const handleChange = (e) => {
    const { id, value } = e.target;
    if (credentials.fullname === null) credentials.fullname = username;
    id === "skills"
      ? setCredentials((prevCredentials) => ({
          ...prevCredentials,
          [id]: [value],
        }))
      : setCredentials((prevCredentials) => ({
          ...prevCredentials,
          [id]: value,
        }));
  };

  const postData = async () => {
    let token = window.localStorage.getItem("token");

    //function you can call but carry on as well
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}users/${username}`,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(credentials),
      }
    );
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username != null) {
      console.log(credentials);

      postData().then((response) => {
        console.log(response);
        // history.goBack();
        window.location.reload();
      });
    }
  };
  console.log(credentials);

  return (
    <div>
      <form>
        <div className="forms">
          <label htmlFor="fullname">full name:</label>
          <input
            type="text"
            id="fullname"
            value={credentials.fullname}
            onChange={handleChange}
          />
        </div>

        <div className="forms">
          <label htmlFor="image">profile pic:</label>
          <input
            type="text"
            id="image"
            value={credentials.image}
            onChange={handleChange}
          />
        </div>

        <div className="forms">
          <label htmlFor="website">website:</label>
          <input
            type="text"
            id="website"
            value={credentials.website}
            onChange={handleChange}
          />
        </div>

        <div className="forms">
          <label htmlFor="bio">bio:</label>
          <input
            type="text"
            id="bio"
            value={credentials.bio}
            onChange={handleChange}
          />
        </div>
        <button className="button-default" type="submit" onClick={handleSubmit}>
          save
        </button>
      </form>
    </div>
  );
}
export default UserProfileEditForm;
