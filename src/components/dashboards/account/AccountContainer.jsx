import React from 'react';
import { useEffect, useState } from 'react';

import user from '../../../api/user/user';

import PersonalSection from './PersonalSection';
import RecoverySection from './RecoverySection';

const AccountContainer = () => {

    return (
        <div className="dashboard dash-account">
            <h1>Your Account</h1>
            <h2>{user.fullname}</h2>
            <div className="account">
                <PersonalSection />
                <div className="sec">
                    <h1>Security</h1>
                </div>
                <RecoverySection />
                <div className="sec">
                    
                </div>
            </div>
        </div>
    )
}

export default AccountContainer