import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';

import auth from "../../../api/auth/auth";
import user from "../../../api/user/user";

const PersonalSection = () => {

    const [isEdit, setIsEdit] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [userData, setUserData] = useState({
        name: user.fullname,
    });
    const [error, setError] = useState(false);
    const [done, setDone] = useState(false);

    const history = useHistory()

    async function editHander() {
        if (isEdit) {
            setProcessing(true)
            
            await user.update(auth.uuid, userData)
            await user.get(auth.uuid)

            setError(user.error)
            if (user.status === 200) {
                setDone(true)
                setTimeout(() => {
                    setDone(false);
                }, 3000)
            }
            
            setProcessing(false)
            history.push('#')
        } else {
            setError(false);
            setDone(false);
            setUserData({
                name: user.fullname,
            })

        }
        setIsEdit(!isEdit);
    }
    
    return (
        <div className="a-sec sec-personal">
            <h1>Personal Information</h1>
            {error ? <span className="danger">{error}</span> : ''}
            {done ? <span className="success">Account Updated</span> : ''}
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
                        <input type="text" className="i" value={isEdit ? userData.name : user.fullname} readOnly={!isEdit} onChange={(e) => {
                            setUserData({
                                ...userData,
                                name: e.target.value,
                            })
                        }}/>
                        <input type="text" className="i" name="username" value={user.alias} readOnly={!isEdit}/>
                        <div className="verified">
                            <input type="text" className="i" value={user.email} readOnly={!isEdit}/>
                            <i className="fas fa-check success"></i>
                        </div>
                        <input type="text" className="i" value="Unavailable" readOnly={!isEdit}/>
                        <div className="verified">
                            <input type="text" className="i i-short" value="Unavailable" readOnly={!isEdit}/>
                            <i className="fas fa-times danger"></i>
                        </div>
                    </form>
                </div>
            </div>
            <a className={`edit ${processing ? 'isload' : ''}`} 
               onClick={processing ? console.log('Processing') : () => {editHander()}}>{isEdit ? 'Save' : 'Edit'}
            </a>
        </div>
        )
}

export default PersonalSection