import React from "react";

const ScreenPopup = ({ children, heading}) => {
  return (
    <div className="popup-cont">
      <div className="popup screen-popup">
          {children}
      </div>
    </div>
  );
};

export default ScreenPopup;
