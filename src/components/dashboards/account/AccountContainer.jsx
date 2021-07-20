import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import user from "../../../api/user/user";
import LoaderBar from "../../elements/LoaderBar";

import PersonalSection from "./PersonalSection";
import RecoverySection from "./RecoverySection";
import SecuritySection from "./SecuritySection";
import VerifiedFloat from "./VerifiedFloat";

const AccountContainer = () => {
  const [load, setLoad] = useState(Math.floor(Math.random() * 100 + 5));
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(100);
      setTimeout(() => {
        setComplete(true);
      }, 1000);
    }, 1);
  });

  return (
    <div className="dashboard dash-account">
      <LoaderBar load={load} complete={complete} />
      <div className="head">
        <h1>Your Account</h1>
        <VerifiedFloat />
      </div>
      <h2>{user.fullname}</h2>
      <div className="account">
        <PersonalSection setLoad={setLoad} setComplete={setComplete} />
        <SecuritySection />
        <RecoverySection setLoad={setLoad} setComplete={setComplete} />
      </div>
    </div>
  );
};

export default AccountContainer;
