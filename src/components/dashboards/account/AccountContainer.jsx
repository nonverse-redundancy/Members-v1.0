import React from 'react';

import user from '../../../api/user/user';

import PersonalSection from './PersonalSection';
import RecoverySection from './RecoverySection';
import SecuritySection from './SecuritySection';

const AccountContainer = () => {

    return (
        <div className="dashboard dash-account">
            <h1>Your Account</h1>
            <h2>{user.fullname}</h2>
            <div className="account">
                <PersonalSection />
                <SecuritySection />
                <RecoverySection />
            </div>
        </div>
    )
}

export default AccountContainer