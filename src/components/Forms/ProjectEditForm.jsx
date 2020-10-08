import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

function ProjectEditForm() {
  //variables
  const [projectData, setProjectData] = useState({});
  const { id } = useParams();
  const [categorylist, setCategoryList] = useState([]);
  const history = useHistory();
  const options = [
    { key: 1, text: "Active", value: "true" },
    { key: 2, text: "Closed", value: "false" },
  ];

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}category/`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setCategoryList(data);
      });
  }, []);

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
    goal_hours: "",
    title: "",
    description: "",
    image: "",
    category: [],
    is_open: "",
  });

  useEffect(() => {
    setCredentials({
      id: id,
      title: projectData.title,
      goal_hours: projectData.goal_hours,
      description: projectData.description,
      image: projectData.image,
      category: projectData.category,
      is_open: projectData.is_open,
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

    //function you can call but carry on as well
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}projects/${id}`,
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
    if (credentials.goal_hours != null) {
      console.log(credentials);

      postData().then((response) => {
        console.log(response);
        window.location.reload();
      });
    }
  };
  console.log(credentials, credentials.is_open);
  return (
    <div>
      <form>
        <div className="forms">
          <label htmlFor="title">title:</label>
          <input
            type="text"
            id="title"
            value={credentials.title}
            onChange={handleChange}
          />
        </div>

        <div className="forms">
          <label htmlFor="description">description:</label>
          <input
            type="text"
            id="description"
            value={credentials.description}
            onChange={handleChange}
          />
        </div>

        <div className="forms forms-dropdown">
          <label htmlFor="is_open">status:</label>
          <select
            type="dropdown"
            id="is_open"
            value={credentials.is_open ? "true" : "false"}
            onChange={handleChange}
          >
            {options.map((s) => (
              <option key={s.text} value={s.value}>
                {s.text}
              </option>
            ))}
          </select>
        </div>

        <div className=" forms forms-dropdown">
          <label htmlFor="category">category:</label>
          <select
            type="dropdown"
            id="category"
            value={credentials.category}
            onChange={handleChange}
          >
            {categorylist.map((s) => (
              <option key={s.name} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>

        <div className="forms">
          <label htmlFor="goal_hours">goal hours:</label>
          <input
            type="number"
            id="goal_hours"
            value={credentials.goal_hours}
            onChange={handleChange}
          />
        </div>

        <div className="forms">
          <label htmlFor="image">add an image url:</label>
          <input
            type="text"
            id="image"
            value={credentials.image}
            onChange={handleChange}
          />
        </div>

        <button className="button-default" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ProjectEditForm;
