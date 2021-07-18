import React from "react";

import auth from "../../../api/auth/auth";
import Float from "../../elements/Float";

const VerifiedFloat = () => {
  return (
    <Float>
      { auth.verified ? (
        ''
      ) : (
        <span className="danger">
          Your email address is not verified
          <span className="default"> |</span>
          <button className="link">resend email</button>
        </span>
        )}
    </Float>
  );
};

export default VerifiedFloat;
