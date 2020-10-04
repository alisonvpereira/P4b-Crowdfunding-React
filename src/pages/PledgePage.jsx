import React from "react";
import { useParams } from "react-router-dom";

import PledgeForm from "../components/Forms/PledgeForm";

function PledgePage() {
  const { id } = useParams();

  return <PledgeForm id={id} />;
}

export default PledgePage;
