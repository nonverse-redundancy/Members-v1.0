import React from "react";
import { useState } from "react";

const SecureAuth = () => {

    const [isActive, setIsActive] = useState(false);

    function toggle() {
        setIsActive(!isActive)
    }

  return (
    <div className="widget secure-widget" onMouseEnter={toggle} onMouseLeave={toggle}>
      <div className={`secure info ${isActive ? 'info-open' : ''}`}>
          <span>Protected by SecureAuth</span>
      </div>
      <div className="secure icon">
        <i className="fas fa-lock"></i>
      </div>
    </div>
  );
};

export default SecureAuth;
