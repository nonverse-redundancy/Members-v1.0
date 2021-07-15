import React from "react";

const ScreenPopup = ({ children, close }) => {
  return (
    <div className="popup-cont">
      <div className="popup screen-popup">
        <i
          className="fas fa-times close danger"
          onClick={() => close(false)}
        ></i>
        {children}
      </div>
    </div>
  );
};

export default ScreenPopup;
