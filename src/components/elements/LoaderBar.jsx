import React from "react";

const LoaderBar = ({ load, complete }) => {

  return (
    <div
      className="loader-bar-cont"
      style={{
        width: `${load}%`,
        display: `${complete ? 'none' : ''}`
      }}
    >
      <div className="loader-bar"></div>
    </div>
  );
};

export default LoaderBar;
