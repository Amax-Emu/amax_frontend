import './session_item.css'
import React from "react";
import player_component from '../../leaderboard_player/leaderboard_player'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

export default function session_item(data) {

    return (
            <div className="session_item_container">
                <div className="session_info">

                    <div className="icon_container">
                        <img className="icon" src="/game_mode_icon.png"/>
                    </div>
                    <div className="session_info_text">
                        <div className="gamemode_info">
                            <div style={{fontWeight: "bold", fontSize: "1.4rem"}}>Power-up racing</div>
                            <div>
                                <FontAwesomeIcon icon={faUsers}  style={{fontSize: "1.2rem",display: "inline-block"}} />
                                <div style={{fontSize: "1.2rem",display: "inline-block",marginLeft:"0.3rem"}}>
                                    {data.session_dummy2 + "/" + (data.session_dummy2 +data.available_slots)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="players">


                    {
                        data["players_list"].map(player => {

                            return (
                                <div className="player_card">
                                    {player_component(player.bdPlayerName,0,player.statLevel,player.statLegend)}
                                </div>
                            )
                        })
                    }

                </div>
            </div>
    );
}