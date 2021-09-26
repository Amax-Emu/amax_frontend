import * as React from "react"
import "./dashboard.css"
import SessionsWidget from "../sessions";
import ServerStatus from "../serverstatus";
import LeaderboardsWidget from "../leaderboard_widget";


export default function Dashboard() {
    return (
        <div className="dashboard_container">
            <div className = "column1_container">
            <SessionsWidget/>
            </div >
            <div className = "column2_container">
<LeaderboardsWidget/>
            </div>
            <div className = "column3_container">
<ServerStatus/>
            </div>
        </div>
    )
}