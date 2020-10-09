import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

function UserDeleteForm() {
  //variables
  const [userData, setUserData] = useState({});
  const { username } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}users/${username}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setUserData(data);
      });
  }, [username]);

  const [credentials, setCredentials] = useState({
    id: "",
    username: username,
    // title: "",
  });

  useEffect(() => {
    setCredentials({
      id: userData.id,
      username: username,
      // title: userData.title,
    });
  }, [userData]);

  const postData = async () => {
    let token = window.localStorage.getItem("token");

    const response = await fetch(
      `${process.env.REACT_APP_API_URL}users/${username}`,
      {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(credentials),
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username != null) {
      console.log(credentials);
      alert(`are you sure you want to delele ${credentials.username}`);

      postData().then((response) => {
        console.log(response);

        localStorage.clear();
        alert("user deleted");
        history.push(`/`);
        window.location.reload();
      });
    }
  };

  return (
    <div>
      <button className="button-danger" type="submit" onClick={handleSubmit}>
        delete profile
      </button>
    </div>
  );
}

export default UserDeleteForm;
