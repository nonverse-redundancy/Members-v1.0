// React
import React from 'react';
import { useHistory } from 'react-router';

import nvlogo from "../../assets/svg/nvlogo.svg"

const AccountNav = () => {

    return (
        <div className="nav-cont">
            <div className="nav account-nav">
                <img src={nvlogo} alt="Nonverse-Logo" className="logo"/>
            </div>
        </div>
    )
}

export default AccountNav