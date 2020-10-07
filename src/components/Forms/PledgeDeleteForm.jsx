import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "../Forms/Forms.css";

function PledgDeleteForm(props) {
  //variables

  const [pledgeData, setPledgeData] = useState({});
  const { id } = useParams();
  const history = useHistory();

  console.log(id);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}pledges/${id}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setPledgeData(data);
      });
  }, [id]);

  // methods
  const handleSubmit = (e) => {
    let token = localStorage.getItem("token");
    fetch(`${process.env.REACT_APP_API_URL}pledges/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });
    history.push("/");
    window.location.reload();
  };

  return (
    <div>
      <h2>pledge id: {pledgeData.id}</h2>
      <h2>project: {pledgeData.project_name}</h2>

      <button onClick={handleSubmit}>
        are you sure you want to delete your pledge
      </button>
    </div>
  );
}

export default PledgDeleteForm;
