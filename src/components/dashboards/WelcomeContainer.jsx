import React from 'react';
import { useEffect, useState } from 'react';

import user from '../../api/user/UserData';
import auth from '../../api/auth/auth';

const WelcomeContainer = () => {

    document.title = 'Nonverse | Home'

    const [name, setName] = useState(false)

    useEffect(() => {
        async function getData() {
            await user.get(auth.uuid)
            setName(user.firstname)
        }
        getData();
    }, [])

    return (
        <div className="dashboard dash-welcome">
            <h1>Welcome back {name}</h1>
        </div>
    )
}

export default WelcomeContainer