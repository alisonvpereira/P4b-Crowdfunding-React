import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../Forms/Forms.css";

function LoginForm() {
  //variables
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();

  //method
  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const postData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}api-token-auth/`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      postData().then((response) => {
        console.log(response);
        if (response.token) {
          window.localStorage.setItem("username", credentials.username);
          window.localStorage.setItem("token", response.token);
          window.localStorage.setItem("isAuthenticated", "True");
          // history.push("/");
          window.location.reload();
        } else alert("incorrect username or password");
      });
    }
  };

  //template
  if (localStorage.username) {
    return <div>{localStorage.username} is logged in</div>;
  }

  return (
    <form>
      <div className="forms">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          onChange={handleChange}
        />
      </div>
      <div className="forms">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </div>
      <button className="button-default" type="submit" onClick={handleSubmit}>
        Login
      </button>
    </form>
  );
}

export default LoginForm;
