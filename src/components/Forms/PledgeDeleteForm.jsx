import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

function PledgeDeleteForm() {
  //variables
  const [pledgeData, setPledgeData] = useState({});
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}pledges/${id}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setPledgeData(data);
      });
  }, [id]);

  const [credentials, setCredentials] = useState({
    id: id,
    hours: "",
  });

  useEffect(() => {
    setCredentials({
      id: id,
      hours: pledgeData.hours,
    });
  }, [pledgeData]);
  console.log(pledgeData);
  const postData = async () => {
    let token = window.localStorage.getItem("token");

    const response = await fetch(
      `${process.env.REACT_APP_API_URL}pledges/${id}`,
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
      alert(
        `are you sure you want to delele this pledge for ${credentials.hours} hours?`
      );

      postData().then((response) => {
        console.log(response);
        // window.location.reload();
        alert("pledge deleted");
        window.location.reload();
        history.goBack();
      });
    }
  };

  return (
    <button className="button-danger" type="submit" onClick={handleSubmit}>
      delete
    </button>
  );
}

export default PledgeDeleteForm;
