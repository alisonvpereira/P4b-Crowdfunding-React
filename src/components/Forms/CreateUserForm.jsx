import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

function CreateUserForm(props) {
  //variables

  const { id } = props;

  console.log(id);

  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  // methods
  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const history = useHistory();

  const postData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}users/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username != null) {
      console.log(credentials);

      postData().then((response) => {
        console.log(response);
        window.location.reload();
      });
    }
  };

  return (
    <div>
      <form>
        <div className="forms">
          <label htmlFor="username">username:</label>
          <input
            type="text"
            id="username"
            placeholder="username"
            onChange={handleChange}
          />
        </div>

        <div className="forms">
          <label htmlFor="email">email:</label>
          <input
            type="email"
            id="email"
            placeholder="email"
            onChange={handleChange}
          />
        </div>

        <div className="forms">
          <label htmlFor="password">password:</label>
          <input type="password" id="password" onChange={handleChange} />
        </div>

        <button className="button-default" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateUserForm;
