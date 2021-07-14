import React from "react";

const SecuritySection = () => {
  return (
    <div className="a-sec sec-security">
      <h1>Security</h1>
      <div className="info">
          <div className="l">
              <div className="t">
                  <h4 className="i">2 Factor Authentication</h4>
                  <p>Two Factor Authentication helps protect your account againts unwanted logins and is recommended for all accounts</p>
              </div>
              <div className="b">
                  <h4 className="i">SecureAuth Guard</h4>
                  <p>Guard is a proprietary protection service enabled by default on all accounts</p>
              </div>
          </div>
          <div className="r">
              <div className="t">
                  <h4 className="i danger">Disabled</h4>
                  <button className="i splash">Enable 2FA</button>
              </div>
              <div className="b">
                <h4 className="i success">Enabled</h4>
              </div>
          </div>
      </div>
    </div>
  );
};

export default SecuritySection;
