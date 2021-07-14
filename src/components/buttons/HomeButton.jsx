import React from 'react';

const HomeButton = () => {

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