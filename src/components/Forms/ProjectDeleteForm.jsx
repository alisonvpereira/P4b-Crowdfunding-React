import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

function ProjectDeleteForm() {
  //variables
  const [projectData, setProjectData] = useState({});
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectData(data);
      });
  }, [id]);

  const [credentials, setCredentials] = useState({
    id: id,
    title: "",
  });

  useEffect(() => {
    setCredentials({
      id: id,
      title: projectData.title,
    });
  }, [projectData]);

  const postData = async () => {
    let token = window.localStorage.getItem("token");

    const response = await fetch(
      `${process.env.REACT_APP_API_URL}projects/${id}`,
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
    if (credentials.id != null) {
      console.log(credentials);
      alert(`are you sure you want to delele ${credentials.title}`);

      postData().then((response) => {
        console.log(response);
        // window.location.reload();
        alert("project deleted");
        history.push(`/projects/`);
      });
    }
  };

  return (
    <div>
      <button className="button-danger" type="submit" onClick={handleSubmit}>
        Delete
      </button>
    </div>
  );
}

export default ProjectDeleteForm;
