import axios from "axios";
import React from "react";

import auth from "../../../api/auth/auth";
import Float from "../../elements/Float";

const VerifiedFloat = () => {

  async function sendVerification() {
    await auth._csrf()
    await axios
    .post(`${auth.authurl}email/send-verification`)
    .then((response) => {
      console.log(response)
    })
    .catch((e) => {
      console.log(e)
    })
  }

  return (
    <Float>
      { auth.verified ? (
        ''
      ) : (
        <span className="danger">
          Your email address is not verified
          <span className="default"> |</span>
          <button className="link" onClick={() => {sendVerification()}}>resend email</button>
        </span>
        )}
    </Float>
  );
};

export default VerifiedFloat;
