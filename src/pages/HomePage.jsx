import React from "react";

function HomePage() {
  return localStorage.username ? (
    <h6>this is the homepage</h6>
  ) : (
    <h6>must be logged in</h6>
  );
}

export default HomePage;
