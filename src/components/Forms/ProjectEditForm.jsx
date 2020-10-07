import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

function ProjectEditForm() {
  //variables
  const [projectData, setProjectData] = useState({});
  const { id } = useParams();
  const [categorylist, setCategoryList] = useState([]);
  const history = useHistory();

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

        <div className="forms">
          <label htmlFor="is_open">status:</label>

          <div className="forms-radio">
            <input
              type="radio"
              id="is_open"
              name="is_open"
              value="true"
              onChange={handleChange}
            />

            <label htmlFor="is_open">active</label>
            <input
              type="radio"
              id="is_open"
              name="is_open"
              value="false"
              onChange={handleChange}
            />
            <label htmlFor="false">closed</label>
          </div>
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

        <div className="forms">
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

        <button className="button-default" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ProjectEditForm;
