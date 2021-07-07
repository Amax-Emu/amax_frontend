import './session_item.css'
import Paper from '@material-ui/core/Paper';
import React from "react";
import player_component from '../../leaderboard_player/leaderboard_player'

export default function session_item(data) {

    let test = {
        sessionId: "e30b1193ff269994",
        ownerHash: "8fdfb386112ebb52",
        created: "Tue Jul  6 13:46:31 2021",
        gameType: "1786934394",
        session_dummy1: 0,
        available_slots: 9,
        session_dummy2: 1,
        session_dummy3: 34,
        session_dummy4: 0,
        session_dummy5: 1,
        session_dummy6: 196619,
        session_dummy7: 0,
        session_dummy8: 0,
        players_list: [{
            sessionId: "e30b1193ff269994",
            bdPlayerId: "8fdfb386112ebb52",
            bdPlayerName: "SynC",
            statLevel: 34,
            statLegend: 0
        },
            {
                sessionId: "e30b1193ff269994",
                bdPlayerId: "8fdfb386112ebb52",
                bdPlayerName: "WWWWWWWWWWWWW",
                statLevel: 5,
                statLegend: 0
            },
            {
                sessionId: "e30b1193ff269994",
                bdPlayerId: "8fdfb386112ebb52",
                bdPlayerName: "Aibot",
                statLevel: 1,
                statLegend: 0
            }
            ,
            {
                sessionId: "e30b1193ff269994",
                bdPlayerId: "8fdfb386112ebb52",
                bdPlayerName: "LikhtHammer",
                statLevel: 1,
                statLegend: 0
            }]
    };


    return (
            <Paper className="session_item_container">
                <div className="session_info">

                    <div className="icon_container">
                        <img className="icon" src="/game_mode_icon.png"/>
                    </div>
                    <div className="session_info_text">

                        <div className="gamemode_info">
                            <div style={{fontWeight: "bold", fontSize: "1.2rem"}}>Game mode:</div>
                            <div style={{fontSize: "1.1rem"}}>Power-up racing</div>
                        </div>

                        <div className="players_info">
                            <div style={{fontWeight: "bold", fontSize: "1.2rem"}}>Players:</div>
                            <div style={{fontSize: "1.1rem"}}>4/10</div>
                        </div>


                    </div>
                </div>
                <div className="players">


                    {
                        test["players_list"].map(player => {

                            return (
                                <div className="player_card">
                                    {player_component(player.bdPlayerName,0,player.statLevel,player.statLegend)}
                                </div>
                            )
                        })
                    }

                </div>
            </Paper>
    );
}