import React from 'react';
import auth from '../../api/auth/auth';

const LogoutBtn = color => {

    return (
        <div className="gra-btn logout-btn" onClick={() => {auth.logout()}}>
            Logout
        </div>
    )
}

export default LogoutBtn;