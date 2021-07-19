import React from "react";

const ScreenBlock = ({ children, code }) => {
  let error = "";
  let description = "";

  switch (code) {
    case 404:
      error = "Not Found";
      description = "The requested resource was not found on the server";
      break;
    case 401:
      error = "Unauthorized";
      description = "You are not authorized to view this resource";
      break;
    case 403:
      error = "Forbidden";
      description = "You do not have permission to view this resource";
      break;
  }

  return (
    <div className="screen-block-cont">
      <div className="screen-block">
        <h1>
          {code} <span className="splash divider">|</span> {error}
        </h1>
        <span className="default description">{description}</span>
      </div>
    </div>
  );
};

export default ScreenBlock;
