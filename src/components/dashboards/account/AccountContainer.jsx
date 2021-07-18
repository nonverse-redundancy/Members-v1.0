import React from "react";

import user from "../../../api/user/user";

import PersonalSection from "./PersonalSection";
import RecoverySection from "./RecoverySection";
import SecuritySection from "./SecuritySection";
import VerifiedFloat from "./VerifiedFloat";

const AccountContainer = () => {
  return (
    <div className="dashboard dash-account">
      <div className="head">
        <h1>Your Account</h1>
        <VerifiedFloat />
      </div>
      <h2>{user.fullname}</h2>
      <div className="account">
        <PersonalSection />
        <SecuritySection />
        <RecoverySection />
      </div>
    </div>
  );
};

export default AccountContainer;
