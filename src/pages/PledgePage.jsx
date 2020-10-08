import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PledgeForm from "../components/Forms/PledgeForm";
import PledgeEditForm from "../components/Forms/PledgeEditForm";
import PledgDeleteForm from "../components/Forms/PledgeDeleteForm";

function PledgePage(props) {
  const [pledgeData, setPledgeData] = useState({});
  const { id } = useParams();

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

  return (
    <PledgeEditForm id={pledgeData.id} />
    // <PledgeEditForm id={id} />;
    // <PledgeForm project_id={id} />;
  );
}

export default PledgePage;
