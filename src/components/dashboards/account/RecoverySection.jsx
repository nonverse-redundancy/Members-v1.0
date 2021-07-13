import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";

import auth from "../../../api/auth/auth";
import user from "../../../api/user/user";
import validate from "../../../api/user/validate";

const RecoverySection = () => {
  const history = useHistory();

  return (
    <div className="a-sec sec-recovery">
      <h1>Recovery</h1>
      <div className="info">
        <div className="l">
          <h4 className="i">Recovery Email</h4>
          <h4 className="i">Recovery Phone</h4>
        </div>
        <div className="r">
          <form action="" className="out">
            <input type="text" className="i" value="Email" />
            <input type="text" className="i" value="Phone" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecoverySection;
