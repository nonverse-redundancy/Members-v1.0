import React from 'react';
import { useEffect, useState } from 'react';

import user from '../../api/user/user';
import calendar from '../../scripts/calendar';

const WelcomeContainer = () => {

    document.title = 'Nonverse | Home'

    // Calendar
    var today = new Date();
    
    return (
        <div className="dashboard dash-welcome">
            <h1>Welcome back {user.firstname}</h1>
            <h2>Its {calendar.today('named-noyear')}</h2>
        </div>
    )
}

export default WelcomeContainer