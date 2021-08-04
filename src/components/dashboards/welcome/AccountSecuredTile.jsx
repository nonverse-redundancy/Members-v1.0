import React from "react";
import DashboardTileSplash from "../../elements/DashboardTileSplash";
import calendar from "../../../scripts/calendar";

const AccountSecuredTile = () => {

    return (
        <DashboardTileSplash title="You account is secured" width="25" bg="linear-gradient(135deg, #EF5DA8 0%, #7879F1 100%)">
            <p className="tile-info-sub">Last login: {calendar.today()}</p>
        </DashboardTileSplash>
    )
};

export default AccountSecuredTile;
