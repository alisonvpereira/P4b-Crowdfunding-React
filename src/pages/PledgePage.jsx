import React from "react";
import { useParams } from "react-router-dom";

import PledgeForm from "../components/Forms/PledgeForm";

function PledgePage(props) {
  const { id } = props;

  return <PledgeForm project_id={id} />;
}

export default PledgePage;
