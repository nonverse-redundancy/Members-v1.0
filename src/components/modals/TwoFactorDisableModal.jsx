import React from "react";
import Modal from "./Modal";
import { ClipLoader } from "react-spinners";
import { useState } from "react";
import { useEffect } from "react";
import twofactor from "../../api/auth/twofactor";
import auth from "../../api/auth/auth";

const TwoFactorDisableModal = ({ setTFA, close }) => {

  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState(false);
  const [error, setError] = useState(false);

  async function disableTwoFactor() {
      setLoading(true);
      await twofactor.disable(password);
      if (twofactor.disable.success) {
          setError(false);
          await auth.check();
          setTFA(auth.tfa);
          setLoading(false);
          close();
      } else {
          setError(true);
          setLoading(false);
      }
  }

  useEffect(() => {
      let mounted = true;

      setTimeout(() => {
          if (mounted) {
            setLoading(false);
        }
      }, 500)

      return () => {
          mounted = false;
      }
  }, [])

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
            <h1 className="head">Disable 2 Factor Authentication</h1>
            <div className="layout layout-code tfa-disable">
              <span className="link">
                Enter your password to confirm your identity
                <br />
              </span>
              <span className="danger">{error ? 'Incorrect Password' : ''}</span>
              <input type="password" name="password" placeholder="Password" 
              onChange={(e) => {
                  setPassword(e.target.value);
              }} />
              <span className="danger warn">
                Disabling 2 Factor Authentication will no longer require you to
                verify each login.This could your account more accessible to
                attackers
              </span>
            </div>
          </div>
          <button className="verify" onClick={() => {disableTwoFactor()}}>Disable</button>
        </div>
      )}
    </Modal>
  );
};

export default TwoFactorDisableModal;
