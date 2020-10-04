import React from "react";

const ProgressBar = (props) => {
  const { progress } = props;
  var backCol;

  if (progress > 50) {
    backCol = "#5729ce"; /*micrococcal blue purple*/
  } else {
    backCol = "#ED0DD9"; /*tendinous fuchsia*/
  }

  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 5,
  };

  const fillerStyles = {
    height: "100%",
    width: `${progress}%`,
    maxWidth: "100%",
    backgroundColor: backCol,
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
