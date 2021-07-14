import React from "react";

import user from "../../api/user/user";

const AccountButton = () => {

  function viewAccount() {
    window.location.replace("/account");
  }

  return (
    <div className="gra-btn account-btn" onClick={viewAccount}>
      <i className="fas fa-user"></i>
      {user.alias}
    </div>
  );
};

export default AccountButton;
