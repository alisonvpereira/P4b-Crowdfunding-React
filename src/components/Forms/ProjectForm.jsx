import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

function ProjectForm(props) {
  //variables

  const { id } = props;
  const [categorylist, setCategoryList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}category/`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setCategoryList(data);
      });
  }, []);
  console.log(id);

  const [credentials, setCredentials] = useState({
    goal_hours: "",
    title: "",
    description: "add a brief description",
    image: "https://picsum.photos/301",
    category: [],
    is_open: "true",
  });

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

  const history = useHistory();

  const postData = async () => {
    let token = window.localStorage.getItem("token");

    //function you can call but carry on as well
    const response = await fetch(`${process.env.REACT_APP_API_URL}projects/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(credentials),
    });
    return response.json();
  };
  console.log(credentials);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.goal_hours != null) {
      console.log(credentials);

      postData().then((response) => {
        console.log(response);
        if (response.id != null) {
          alert(`${response.title} successfully created`);
          history.push(`/projects/${response.id}`);
        } else alert(`not created`);
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
            placeholder="name your project"
            onChange={handleChange}
          />
        </div>

        <div className="forms">
          <label htmlFor="description">description:</label>
          <input
            type="text"
            id="description"
            placeholder="add a brief description"
            onChange={handleChange}
          />
        </div>

        <div className="forms">
          <label htmlFor="goal_hours">goal hours:</label>
          <input type="number" id="goal_hours" onChange={handleChange} />
        </div>

        <div className="forms">
          <label htmlFor="image">add an image url:</label>
          <input
            type="text"
            id="image"
            placeholder="https://wwww.addyourimage.com"
            onChange={handleChange}
          />
        </div>

        <div className="forms">
          <label htmlFor="category">category:</label>
          <select
            type="dropdown"
            id="category"
            placeholder="category"
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

export default ProjectForm;
