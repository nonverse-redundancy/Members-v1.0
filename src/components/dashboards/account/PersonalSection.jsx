import React from 'react';
import { useState } from 'react';

import user from '../../../api/user/user';

const PersonalSection = () => {

    const [isEdit, setIsEdit] = useState(false);

    function editHander() {
        setIsEdit(!isEdit)
    }
    
    return (
        <div className="sec sec-personal">
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
                    <form className={`out ${isEdit ? 'isedit' : ''}`} action="">
                        <input type="text" className="i" value={user.fullname} readOnly={!isEdit}/>
                        <input type="text" className="i" value={user.alias} readOnly={!isEdit}/>
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
            <a className="edit" onClick={() => {editHander()}}>{isEdit ? 'Save' : 'Edit'}</a>
        </div>
        )
}

export default PersonalSection