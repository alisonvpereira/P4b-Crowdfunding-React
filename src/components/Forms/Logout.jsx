import React from "react";
import { useHistory } from "react-router-dom";

function Logout() {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    history.push("/Login");
    window.location.reload();
  };

  return (
    <button id="nav-username" type="submit" onClick={handleLogout}>
      logout
    </button>
  );
}
export default Logout;
