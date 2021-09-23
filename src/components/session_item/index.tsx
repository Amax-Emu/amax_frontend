import * as React from "react"
import PlayerBar from "../player_bar";
import PeopleIcon from '@material-ui/icons/People';
import {Session} from "../../compositions/sessions";
import './session_item.css'
import icons from "./icons/*.png"
import header from "./headers/*.png"
import CircularProgress from "@material-ui/core/CircularProgress";

function GetGametypeData(game_mode_id:string) {
    switch (game_mode_id) {
        case "community_event" :{
        return {
            name: "Community Events",
            icon: "community_events_icon.png",
            header_image: "header.png"
        }
    }
        case "team_racing":{
            return {
                name: "Team Racing",
                icon: "team_racing_icon.png",
                header_image: "team_racing_banner.png"
            }
        }

        case "powered_up_racing":{
            return {
                name: "Powered-up Racing",
                icon: "powered_up_racing.png",
                header_image: "powered_up_racing_header.png"
            }
        }

        case "skirmish_racing":{
            return {
                name: "Skirmish Racing",
                icon: "skirmish_racing_icon.png",
                header_image: "skirmish_racing_header.png"
            }
        }

        case "motor_mash":{
            return {
                name: "Motor Mash",
                icon: "game_mode_icon.png",
                header_image: "header.png"
            }
        }
    }
}



export default function SessionItem({data}:{data: Session}) {
    //console.log(icons);
    const mediadata = GetGametypeData(data.gameType)

    const GameStatus = () => {
        render (
        if (data.isInProgress === 1) {
                <a className="server_status">Online</a>
                <div className="server_header_lamp"/>

        } else {
            return (
                <a className="server_status">Online</a>
            <div className="server_header_lamp_offline"/>
        )
        }
    )}

    return (
        <div className="session_item_container">
            <div className="session_info" style={{backgroundImage: "url('/headers/" + mediadata.header_image +"')"}} >


                <div className="icon_container">
                    <img className="icon" src={"/icons/" + mediadata.icon}/>
                </div>
                <div className="session_info_text">
                    <div className="gamemode_info">
                        <div style={{fontWeight: "bold", fontSize: "1.4rem"}}>{mediadata.name}</div>
                        <div>
                            <PeopleIcon  style={{fontSize: "1.2rem",display: "inline-block"}} />
                            <div style={{fontSize: "1.2rem",display: "inline-block",marginLeft:"0.3rem"}}>
                                {(data.totalSlots - data.availableSlots) + "/" + data.totalSlots}
                            </div>
                        </div>
                    </div>
                    <div className="game_progress_led">

                    </div>
                </div>
            </div>
            <div className="players">


                {
                    data.players_list.map(player => {

                        return (
                            <div className="player_card">
                                <PlayerBar player_name={player.bdPlayerName} place={0} level={player.statLevel} legend={player.statLegend} />
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
}