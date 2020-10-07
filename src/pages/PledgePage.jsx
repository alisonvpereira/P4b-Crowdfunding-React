import React from "react";
import { useParams } from "react-router-dom";
import PledgeForm from "../components/Forms/PledgeForm";
import PledgeEditForm from "../components/Forms/PledgeEditForm";
import PledgDeleteForm from "../components/Forms/PledgeDeleteForm";

function PledgePage(props) {
  const { id } = props;

  return <PledgDeleteForm id={id} />;
  // <PledgeEditForm id={id} />;
  // <PledgeForm project_id={id} />;
}

export default PledgePage;
