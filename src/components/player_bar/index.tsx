import './leaderboard_player.css';
import * as React from "react"
import {NavLink} from "react-router-dom";

function return_rank_class(level,legend) {
    if (legend > 0) {
        return 'legend' + legend
    } else {
        return 'rank' + level
    }
}

export default function PlayerBar({player_name,place,level,legend}: {player_name: string,place: number,level: number,legend: number}) {
    return (
        <div className="player_component">
        <div className="rank_wrapper">
        <div className="rank_container">
        <div className={return_rank_class(level+1, legend)}/>
    </div>
    </div>
    <p className="level_value">
        {level+1}
        </p>
            <NavLink to={"/profile/"+player_name} style={{color: 'white',textDecoration: 'none'}} activeStyle={{textDecoration: 'none'}}>
        <p className="player_name">
        {player_name}
        </p>
            </NavLink>

        </div>
)


}