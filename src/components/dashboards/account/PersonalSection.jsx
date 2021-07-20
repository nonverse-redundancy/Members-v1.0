import { useState } from "react";
import { useHistory } from "react-router";

import auth from "../../../api/auth/auth";
import user from "../../../api/user/user";
import recovery from "../../../api/user/recovery";
import validate from "../../../api/user/validate";

const PersonalSection = ({ setLoad, setComplete }) => {
  const history = useHistory();

  const [isEdit, setIsEdit] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [userData, setUserData] = useState({});
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);
  const [validator, setValidator] = useState({});

  function trigger() {
    setLoad(0);
    setComplete(false);
  }

  async function process() {
    await validate.email(userData.email, user.email, true)
    await validate.name(userData.name, user.name)
    if (!validate.error() && (user.email !== recovery.email)) {
      setProcessing(false);
    }
  }
  
  async function editHandler() {
    if (isEdit) {
      setProcessing(true);

      await user.update(auth.uuid, userData);
      await user.get(auth.uuid);

      setError(user.update.error);
      if (user.update.status === 200) {
        setDone(true);
        trigger()
        setTimeout(() => {
          setDone(false);
        }, 3000);
      }
      setTimeout(() => {
        setProcessing(false);
      }, 500)
      history.push("#");
    } else {
      setError(false);
      setDone(false);
      setUserData({
        name: user.fullname,
        alias: user.alias,
        email: user.email,
      });
    }
    setIsEdit(!isEdit);
  }

  var typeTimerName;
  async function nameHandler(name) {
    setValidator({
      ...validator,
      name: false,
    });
    if (name !== user.fullname) {
        await validate.name(name, user.fullname);
        if (validate.name.error) {
            setProcessing(true);
            setValidator({
                ...validator,
                name: validate.name.error,
            })
        }
    }
    process();
  }

  var typeTimerEmail;
  async function emailHandler(email) {
    setValidator({
      ...validator,
      email: false,
    });
    if (email !== recovery.email) {
      if (email !== user.email) {
          await validate.email(email, user.email, true);
          if (validate.email.error) {
              setProcessing(true)
              setValidator({
                  ...validator,
                  email: validate.email.error,
              })
          }
      }
    } else {
      setValidator({
        ...validator,
        email: 'Email cannot be the same as recovery',
      });
    }
    process();
  }
  
  return (
    <div className="a-sec sec-personal">
        <h1>Personal Information</h1>
        {error ? <span className="danger">{error}</span> : ''}
        {done ? <span className="success">Account Updated</span> : ''}
        {validator.email ? <span className="danger">{validator.email}</span> : ''}
        {validator.name ? <span className="danger">{validator.name}</span> : ''}
        <div className="info">
            <div className="l">
                <h4 className="i">Name</h4>
                <h4 className="i">Username</h4>
                <h4 className="i">Email</h4>
                <h4 className="i">Birthday</h4>
                <h4 className="i">Phone</h4>
            </div>
            <div className="r">
                <form className={`out ${isEdit ? 'isedit' : ''}`} action="">
                    <input type="text" className="i" value={isEdit ? userData.name : user.fullname} readOnly={!isEdit}
                    onChange={(e) => {
                        setUserData({
                            ...userData,
                            name: e.target.value,
                        })
                    }}
                    onKeyDown={() => {
                        clearTimeout(typeTimerName);
                    }}
                    onKeyUp={(e) => {
                        clearTimeout(typeTimerName);
                        typeTimerName = setTimeout(() => {
                            nameHandler(e.target.value);
                        }, 500)
                    }}/>
                    <input type="text" className="i" name="username" value={user.alias} readOnly={!isEdit}/>
                    <div className="verified">
                        <input type="text" className="i" value={isEdit ? userData.email : user.email} readOnly={!isEdit}
                        onChange={(e) => {
                            setUserData({
                                ...userData,
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
                        }
                        }
                        />
                        {isEdit ? '' : <i className="fas fa-check success"></i>}
                    </div>
                    <input type="text" className="i" value="Unavailable" readOnly={!isEdit}/>
                    <div className="verified">
                        <input type="text" className="i i-short" value="Unavailable" readOnly={!isEdit}/>
                        {isEdit ? '' : <i className="fas fa-times danger"></i>}
                    </div>
                </form>
            </div>
        </div>
        <button className={`edit ${processing ? 'isload' : ''}`} 
           onClick={processing ? () => {console.log('Processing')} : () => {editHandler()}}>{isEdit ? 'Save' : 'Edit'}
        </button>
    </div>
    )
};

export default PersonalSection;
