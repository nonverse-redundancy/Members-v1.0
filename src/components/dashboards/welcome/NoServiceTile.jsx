import React from "react";

import DashboardTileSplash from "../../elements/DashboardTileSplash";

const NoServiceTile = () => {
    //TODO Add check to see if user is registered to any services
  return (
    <DashboardTileSplash title="You're not connected to any of our services" width="30" bg="linear-gradient(135deg, #2FEBE0 0%, #9685FF 100%)">
        <p className="tile-info-sub">Your account isn't linked with any Nonverse services so we can't show you much</p>
        <div className="cta-explore">
          <span>Explore The Network</span>
        </div>
    </DashboardTileSplash>
  );
};

export default NoServiceTile;
