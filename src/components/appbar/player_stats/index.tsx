import * as React from "react"
import './appbar_player.css';
import PlayerExpBar from './expirience_bar';




function return_rank_class(level: number,legend: number) {
    if (legend > 0) {
        return 'appbar_legend' + legend
    } else {
        return 'appbar_rank' + level
    }
}

export default function UserStats({user_level, user_legend, user_exp, user_exp_percent, user_name}: {user_level: number,user_legend: number,user_exp: number, user_exp_percent: number,user_name: string}){

    return (
        <div className="appbar_player_component">
            <div className="appbar_rank_wrapper">
                <div className="appbar_rank_container">
                    <div className={return_rank_class(user_level, user_legend)}/>
                </div>
            </div>
            <p className="appbar_level_value">
                {user_level}
            </p>
            { /* This is wrong */ }
            {/* CustomizedProgressBars(user_exp_percent) */}
            <PlayerExpBar exp_value={user_exp_percent} />
            <p className="appbar_player_name">
                {user_name}
            </p>


        </div>
    )
}