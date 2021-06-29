// React
import React from "react";
import { useHistory } from "react-router-dom";

// Components
import LogoutBtn from "../buttons/LogoutBtn";

const SidePanel = () => {
  //

  const history = useHistory()

  return (
    <div className="side-panel-cont">
      <div className="side-panel">
          <strong>nonverse</strong>
        <LogoutBtn />
      </div>
    </div>
  );
};

export default SidePanel;
