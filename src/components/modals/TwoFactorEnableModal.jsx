import React from "react";
import Modal from "./Modal";
import { ClipLoader } from "react-spinners";
import { useState } from "react";
import { useEffect } from "react";

import twofactor from "../../api/auth/twofactor";
import QRCode from "qrcode.react";
import { useHistory } from "react-router-dom";
import auth from "../../api/auth/auth";

const TwoFactorEnableModal = ( { setTFA, close } ) => {

  let mounted = false;

  const [loading, setLoading] = useState(true);
  const [twoFactorURL, setTwoFactorURL] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [oneTimePassword, setOneTimePassword] = useState(false);
  const [error, setError] = useState(false);

  const history = useHistory();

  async function generateCode() {
    await twofactor.setup()
    .then(() => {
      if (mounted) {
        setTwoFactorURL(twofactor.setup.url);
      }
      console.log(twoFactorURL);
    });
    if (mounted) {
      setLoading(false);
    }
  }

  async function enableTwoFactor() {
    setLoading(true);
    await twofactor.enable(oneTimePassword)
    if (twofactor.enable.success) {
      setError(false);
      await auth.check();
      if (auth.tfa) {
        setTFA(auth.tfa)
      }
      setLoading(false);
      close();
    } else {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    mounted = true;

    generateCode();

    return () => {
      mounted = false;
    }
  })

  return (
    <Modal close={close}>
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
            {showCode ? (
              <div className="layout layout-code">
              <input type="text" placeholder="Code" 
              onChange={(e) => {
                setOneTimePassword(e.target.value)
                setError(false);
              }} />
              <span className="danger"><br />{error ? 'Test' : ''}</span>
                <h1 className="code">{twofactor.setup.code}</h1>
                <div className="out">
                  <span className="splash">1. <span className="default">Enter above code into authenticator app of choice</span><br/></span>
                      <div className="suggested">
                        <span className="splash">Suggested by Nonverse | <a href="https://steptwo.app/" target="_blank" rel="noreferrer">Step Two</a></span>
                      </div>
                  <span className="splash">2. <span className="default">Enter 6 digit code provided by app</span><br/></span>
                  <span className="splash">3. <span className="default">Click Verify</span></span>
                </div>
                <button className="toggle-code" onClick={() => {setShowCode(!showCode)}}>Scan QR Code</button>
              </div>
            ) : (
              <div className="layout">
                <div className="qr">
                  <QRCode renderAs={'svg'} bgColor={'#ECF0F3'} fgColor={"#333344"} value={twoFactorURL} />
                  <button className="toggle-code" onClick={() => {setShowCode(!showCode)}}>Can't Scan?</button>
                </div>
                <div className="out">
                  <input type="text" placeholder="Code" 
                  onChange={(e) => {
                    setOneTimePassword(e.target.value)
                    setError(false);
                  }} />
                  <span className="danger"><br />{error ? 'Invalid Code' : ''}</span>
                    <ul>
                      <li><span className="default">Scan QR code using authenticator app of choice</span></li>
                      <div className="suggested">
                        <span className="splash">Suggested by Nonverse | <a href="https://steptwo.app/" target="_blank" rel="noreferrer">Step Two</a></span>
                      </div>
                      <li><span className="default">Enter 6 digit code provided by app</span></li>
                      <li><span className="default">Click Verify</span></li>
                    </ul>
                </div>
              </div>
            )}
          </div>
          <button className="verify" onClick={() => enableTwoFactor()}>Verify</button>
        </div>
      )}
    </Modal>
  );
};

export default TwoFactorEnableModal;
