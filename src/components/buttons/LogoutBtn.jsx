import React from 'react';
import auth from '../../api/auth/auth';

const LogoutBtn = color => {

    return (
        <div className="gra-btn" onClick={() => {auth.logout()}} style={{ backgroundColor: '#fc3b00' }}>
            Logout
        </div>
    )
}

export default LogoutBtn;