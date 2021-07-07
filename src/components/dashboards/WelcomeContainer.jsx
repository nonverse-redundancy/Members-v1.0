import React from 'react';
import { useEffect, useState } from 'react';

import user from '../../api/user/user';

const WelcomeContainer = () => {

    document.title = 'Nonverse | Home'

    return (
        <div className="dashboard dash-welcome">
            <h1>Welcome back {user.firstname}</h1>
        </div>
    )
}

export default WelcomeContainer