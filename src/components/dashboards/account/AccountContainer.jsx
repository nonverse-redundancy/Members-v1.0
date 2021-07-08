import React from 'react';
import { useEffect, useState } from 'react';

import user from '../../../api/user/user';

const AccountContainer = () => {

    const [isEditPersonal, setIsEditPersonal] = useState(false);

    function editHander(group) {
        if (group === 0) {
            setIsEditPersonal(!isEditPersonal)
        }
    }

    return (
        <div className="dashboard dash-account">
            <h1>Your Account</h1>
            <h2>{user.fullname}</h2>
            <div className="account">
                <div className="sec sec-account">
                    <h1>Personal Information</h1>
                    <div className="info">
                        <div className="r">
                            <h4 className="i">Name</h4>
                            <h4 className="i">Username</h4>
                            <h4 className="i">Email</h4>
                            <h4 className="i">Birthday</h4>
                            <h4 className="i">Phone</h4>
                        </div>
                        <div className="l">
                            <form className={`out ${isEditPersonal ? 'isedit' : ''}`} action="">
                                <input type="text" className="i" value={user.fullname} readOnly={!isEditPersonal}/>
                                <input type="text" className="i" value={user.alias} readOnly={!isEditPersonal}/>
                                <div className="verified">
                                    <input type="text" className="i" value={user.email} readOnly={!isEditPersonal}/>
                                    <i className="fas fa-check success"></i>
                                </div>
                                <input type="text" className="i" value="Unavailable" readOnly={!isEditPersonal}/>
                                <div className="verified">
                                    <input type="text" className="i i-short" value="Unavailable" readOnly={!isEditPersonal}/>
                                    <i className="fas fa-times danger"></i>
                                </div>
                            </form>
                        </div>
                    </div>
                    <a className="edit" onClick={() => {editHander(0)}}>{isEditPersonal ? 'Save' : 'Edit'}</a>
                </div>
                <div className="sec">
                    <h1>Security</h1>
                </div>
                <div className="sec">
                    <h1>Recovery</h1>
                </div>
                <div className="sec">
                    
                </div>
            </div>
        </div>
    )
}

export default AccountContainer