import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "../Forms/Forms.css";

function PledgeEditForm(props) {
  //variables
  const [pledgeData, setPledgeData] = useState({});
  const { id } = props;
  const [skilllist, setSkillList] = useState([]);
  const [projectlist, setProjectList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}skills/`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setSkillList(data);
      });
  }, []);
  // console.log(skilllist);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects/`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectList(data);
      });
  }, []);
  // console.log(projectlist);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}pledges/${id}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setPledgeData(data);
      });
  }, [id]);
  console.log(pledgeData);

  const [credentials, setCredentials] = useState({
    id: id,
    hours: "",
    comment: "",
    anonymous: "",
    project_id: "",
    skill: [],
  });

  useEffect(() => {
    setCredentials({
      hours: pledgeData.hours,
      comment: pledgeData.comment,
      anonymous: pledgeData.anonymous,
      project_id: pledgeData.project_id,
      skill: pledgeData.skill,
    });
  }, [pledgeData]);

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

  const postData = async () => {
    let token = window.localStorage.getItem("token");

    //function you can call but carry on as well
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}pledges/${id}`,
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
  console.log(credentials);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.id != null) {
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
        <div className="forms">
          <label htmlFor="comment">comment:</label>
          <input
            type="text"
            id="comment"
            value={credentials.comment}
            onChange={handleChange}
          />
        </div>

        <div className="forms">
          <label htmlFor="hours">hours:</label>
          <input
            type="number"
            id="hours"
            onChange={handleChange}
            value={credentials.hours}
          />
        </div>

        <div className="forms">
          <label htmlFor="anonymous">pledge anonymously:</label>

          <div className="forms-radio">
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
        </div>

        <div className="forms">
          <label htmlFor="project_id">project:</label>
          <select
            type="dropdown"
            value={credentials.project_id}
            id="project_id"
            placeholder="project_id"
            onChange={handleChange}
          >
            {projectlist.map((s) => (
              <option key={s.title} value={s.id}>
                {s.title}
              </option>
            ))}
          </select>
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

        <button className="button-default" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default PledgeEditForm;
