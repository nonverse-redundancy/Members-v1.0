import React from "react";
import ScreenPopup from "../../elements/ScreenPopup";
import { ClipLoader } from "react-spinners";
import { useState } from "react";
import { useEffect } from "react";

const TwoFactorPopup = ( { close } ) => {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 500)
  }, [])

  return (
    <ScreenPopup close={close}>
      {loading ? (
          <div className="await">
              <div className="loader">
                 <ClipLoader size={50} color={"#4995FD"} />
              </div>
          </div>
      ) : (
        <div>
          <div className="content two-factor">
            <h1 className="head">Enable 2 Factor Authentication</h1>
            <div className="layout">
              <div className="qr"></div>
              <div className="out">
                <input type="text" placeholder="Code" />
                <ul>
                  <li><span className="default">Scan QR code using authenticator app of choice</span></li>
                  <div className="suggested">
                    <span className="splash">Suggested by Nonverse | <a href="https://steptwo.app/" target="_blank" rel="noreferrer">Step Two</a></span>
                  </div>
                  <li><span className="default">Enter 6 digit code provided by app</span></li>
                  <li><span className="default">Click Verify</span></li></ul>
              </div>
            </div>
          </div>
          <button>Verify</button>
        </div>
      )}
    </ScreenPopup>
  );
};

export default TwoFactorPopup;
