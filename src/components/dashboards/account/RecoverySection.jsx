import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router";

import auth from "../../../api/auth/auth";
import recovery from "../../../api/user/recovery";
import user from "../../../api/user/user";
import validate from "../../../api/user/validate";

const RecoverySection = () => {
  const history = useHistory();

  const [isEdit, setIsEdit] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);
  const [validator, setValidator] = useState({});
  const [recoveryData, setRecoveryData] = useState({});

  async function process() {
    await validate.email(recoveryData.email, recovery.email)
    if (!validate.error() && (recoveryData.email !== user.email)) {
      setProcessing(false);
    }
  }

  async function editHandler() {
    if (isEdit) {
      setProcessing(true);

      await recovery.update(auth.uuid, recoveryData);
      await recovery.get(auth.uuid);

      setError(recovery.update.error)
      if (recovery.update.status === 200) {
        setDone(true);
        setTimeout(() => {
          setDone(false);
        }, 3000);
      }
      setTimeout(() => {
        setProcessing(false);
      }, 500)
      history.push('#');
    } else {
      setError(false);
      setDone(false);
      setRecoveryData({
        email: recovery.email,
        phone: recovery.phone,
      });
    }
    setIsEdit(!isEdit);
  }

  var typeTimerEmail;
  async function emailHandler(email) {
    setValidator({
      ...validator,
      email: false,
    });
    if (email !== user.email) {
      if (email !== recovery.email) {
        await validate.email(email, recovery.email, true);
        if (validate.email.error) {
          setProcessing(true);
          setValidator({
            ...validator,
            email: validate.email.error,
          })
        }
      }
    } else {
      setValidator({
        ...validator,
        email: 'Recovery email cannot be same as primary',
      });
    }
    process();
  }

  return (
    <div className="a-sec sec-recovery">
      <h1>Recovery</h1>
      {error ? <span className="danger">{error}</span> : ''}
      {done ? <span className="success">Account Updated</span> : ''}
      {validator.email ? <span className="danger">{validator.email}</span> : ''}
      <div className="info">
        <div className="l">
          <h4 className="i">Recovery Email</h4>
          <h4 className="i">Recovery Phone</h4>
        </div>
        <div className="r">
          <form action="" className={`out ${isEdit? 'isedit' : ''}`}>
            {isEdit ? <input type="text" className="i" value={recoveryData.email}
            onChange={(e) => {
              setRecoveryData({
                ...recovery,
                email: e.target.value,
              })
            }}
            onKeyDown={() => {
                clearTimeout(typeTimerEmail);
            }}
            onKeyUp={(e) => {
                clearTimeout(typeTimerEmail);
                typeTimerEmail = setTimeout(() => {
                    emailHandler(e.target.value);
                }, 500)
            }}
            />
            :<input className={`i ${recovery.email ? '' : 'danger'}`} value={recovery.email ? recovery.email : 'Recovery Email Not Set'}/>
            }
            {isEdit ? <input type="text" className="i" value={recoveryData.phone}/>
            :<input className={`i ${recovery.phone ? '' : 'danger'}`} value={recovery.phone ? recovery.phone : 'Recovery Phone Not Set'}/>
            }
          </form>
        </div>
      </div>
        <a className={`edit ${processing ? 'isload' : ''}`} 
           onClick={processing ? console.log('Processing') : () => {editHandler()}}>{isEdit ? 'Save' : 'Edit'}
        </a>
    </div>
  );
};

export default RecoverySection;
