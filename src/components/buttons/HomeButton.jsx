import React from 'react';
import { useHistory } from 'react-router';

const HomeButton = () => {

    const history = useHistory();

    function viewHome() {
        window.location.replace('/')
    }

    return (
        <div className="gra-btn home-btn" onClick={viewHome}>
            <i className="fas fa-home"></i>Home
        </div>
    )
}

export default HomeButton