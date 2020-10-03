import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function ProfileUpdateForm() {
  //variables
  const [profile, setProfile] = useState({
    fullname: "",
    bio: "",
    image: "",
    website: "",
    skills: "",
  });
  const history = useHistory();
  console.log(profile.website);

  //method
  const handleChange = (e) => {
    const { id, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [id]: value,
    }));
  };

  const postData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}users/${localStorage.username}`,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
      }
    );
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (profile.user.is_authenticated) {
      postData().then((response) => {
        history.push("/");
        window.location.reload();
      });
    }
  };

  //template

  return (
    <form>
      <div>
        <label htmlFor="fullname">Full Name:{profile.fullname}</label>
        <input
          type="text"
          id="fullname"
          //   placeholder="Enter username"
          default={profile.fullname}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="website">Website:{profile.website}</label>
        <input
          type="url"
          id="website"
          // placeholder="Password"
          default={profile.website}
          onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
    </form>
  );
}

export default ProfileUpdateForm;
