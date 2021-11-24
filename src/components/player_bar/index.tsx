import './leaderboard_player.css';
import * as React from "react"
import {NavLink} from "react-router-dom";
import Chip from '@material-ui/core/Chip';

function return_rank_class(level,legend) {
    if (legend > 0) {
        return 'legend' + legend
    } else {
        return 'rank' + level
    }
}

export default function PlayerBar({player_name,level,legend, is_bot}: {player_name: string,level: number,legend: number,is_bot: boolean}) {
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
            {!is_bot
            ? (<NavLink to={"/profile/"+player_name} style={{color: 'white',textDecoration: 'none'}} activeStyle={{textDecoration: 'none'}}>
        <p className="player_name">
        {player_name}
        </p>
            </NavLink>)
            : (<div style={{display: "flex",flexDirection: "row",flexWrap: "nowrap"}}><p className="player_name">
            {player_name}
        </p> <Chip style={{marginLeft: "0.2em"}} color="primary" size="small"
            label="Bot"
        /></div>)
            }

        </div>
)


}