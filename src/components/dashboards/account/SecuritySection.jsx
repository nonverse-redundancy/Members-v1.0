import React, { useEffect } from "react";
import { useState } from "react";
import TwoFactorEnableModal from "../../modals/TwoFactorEnableModal";

import auth from "../../../api/auth/auth";
import TwoFactorDisableModal from "../../modals/TwoFactorDisableModal";

const SecuritySection = () => {

  const [isViewTFA, setIsViewTFA] = useState(false);
  const [TFA, setTFA] = useState(auth.tfa);
  
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
                  <h4 className={`i ${TFA ? 'success' : 'danger'}`}>{TFA ? 'Enabled' : 'Disabled'}</h4>
                  <button className="i splash tfa" onClick={() => {setIsViewTFA(true)}}>{TFA ? 'Disable 2FA' : 'Enable 2FA'}</button>
              </div>
              <div className="b">
                <h4 className="i success">Enabled</h4>
              </div>
          </div>
      </div>
      <div className="tfa">
        {isViewTFA ? 
        <div>
          {auth.tfa 
          ? <TwoFactorDisableModal setTFA={setTFA} close={setIsViewTFA}/> 
          : <TwoFactorEnableModal setTFA={setTFA} close={setIsViewTFA}/>
          }
        </div> 
        : ''}
      </div>
    </div>
  );
};

export default SecuritySection;
