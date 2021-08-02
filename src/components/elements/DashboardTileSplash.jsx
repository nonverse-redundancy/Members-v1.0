import React from "react";

const DashboardTileSplash = ({ title, width, bg, children }) => {
  return (
    <div
      className="dash-tile-splash"
      style={{
        width: `${width}%`,
        background: bg,
      }}
    >
      <h3>{title}</h3>
      <div className="content">{children}</div>
    </div>
  );
};

export default DashboardTileSplash;
