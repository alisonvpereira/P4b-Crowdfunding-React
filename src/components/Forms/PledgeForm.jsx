import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

function PledgeForm() {
  //variables

  const { id } = useParams();
  const [skilllist, setSkillList] = useState([]);
  const [projectlist, setProjectList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}skills/`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setSkillList(data);
      });
  }, []);
  console.log(skilllist);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects/`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectList(data);
      });
  }, []);
  console.log(projectlist);

  const [credentials, setCredentials] = useState({
    hours: "",
    comment: "",
    anonymous: "",
    // project_id: `${localStorage.project_id ? localStorage.project_id : ""}`,
    project_id: id,
    skill: [],
  });

  // methods
  const handleChange = (e) => {
    const { id, value } = e.target;
    id === "skill"
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
    const response = await fetch(`${process.env.REACT_APP_API_URL}pledges/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(credentials),
    });
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.hours != null) {
      console.log(credentials);

      postData().then((response) => {
        console.log(response);
        history.push(`/projects/${credentials.project_id}`);

        window.location.reload();
      });
    }
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="comment">comment:</label>
          <input
            type="text"
            id="comment"
            placeholder="add a comment"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="hours">hours:</label>
          <input type="number" id="hours" onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="anonymous">pledge anonymously:</label>
          <input
            type="radio"
            id="anonymous"
            name="anonymous"
            value="true"
            onChange={handleChange}
          />
          <label htmlFor="anonymous">Yes</label>
          <input
            type="radio"
            id="anonymous"
            name="anonymous"
            value="false"
            onChange={handleChange}
          />
          <label htmlFor="false">No</label>
        </div>

        <div>
          {/* <label htmlFor="project_id">project:</label> */}
          {/* <select
            type="dropdown"
            defaultValue={id}
            id="project_id"
            placeholder="project_id"
            onChange={handleChange}
          >
            {projectlist.map((s) => (
              <option key={s.title} value={s.id}>
                {s.title}
              </option>
            ))}
          </select> */}
          <label htmlFor="skill">skill:</label>
          <select
            type="dropdown"
            id="skill"
            placeholder="skill"
            onChange={handleChange}
          >
            {skilllist.map((s) => (
              <option key={s.name} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>

        <button className="button" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default PledgeForm;
