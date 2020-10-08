import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

function ProjectDeleteForm() {
  //variables
  const [projectData, setProjectData] = useState({});
  const { id } = useParams();
  const { title } = useParams;
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

  // methods
  const handleChange = (e) => {
    const { id, value } = e.target;
    id === "category"
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
      <form>
        <button className="button-danger" type="submit" onClick={handleSubmit}>
          Delete
        </button>
      </form>
    </div>
  );
}

export default ProjectDeleteForm;
