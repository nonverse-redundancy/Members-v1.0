import React from 'react';
import { useEffect, useState } from 'react';

import user from '../../api/user/user';

const WelcomeContainer = () => {

    document.title = 'Nonverse | Home'

    const [name, setName] = useState(false)

    useEffect(() => {
        setName(user.firstname)
    })
    

    return (
        <div className="dashboard dash-welcome">
            <h1>Welcome back {name}</h1>
        </div>
    )
}

export default WelcomeContainer