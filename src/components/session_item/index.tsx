import * as React from "react"
import PlayerBar from "../player_bar";
import PeopleIcon from '@material-ui/icons/People';
import {Session} from "../../compositions/sessions";
import './session_item.css'
// @ts-ignore
import icons from "./icons/*.png"
// @ts-ignore
import headers from "./headers/*.png"
import { useTranslation } from 'react-i18next'

import CircularProgress from "@material-ui/core/CircularProgress";

function GetGametypeData(game_mode_id:string) {
    const { t, i18n } = useTranslation()
    console.log(t("sessions_widget.gamemode"))
    switch (game_mode_id) {
        case "community_event" :{
        return {
            name: t("sessions_widget.gamemode.communityevent"),
            icon: icons.community_events_icon,
            header_image: "header.png"
        }
    }
        case "team_racing":{
            return {
                name: t('sessions_widget.gamemode.teamracing'),
                icon: icons.team_racing_icon,
                header_image: headers.team_racing_header
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
                name: t("sessions_widget.gamemode.skirmish"),
                icon: icons.skirmish_racing_icon,
                header_image: headers.skirmish_racing_header
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
    const { t, i18n } = useTranslation()
    const mediadata = GetGametypeData(data.gameType)

    const GameStatus = () => {
        if (data.isInProgress === 1) {
            return(
            <>
                <>
                    <a className="game_in_progress">{t('sessions_widget.status.inprogress')}</a>
                    <div className="led_in_progress"/>
                </>
            </>
            )

        } else {
            return (
                <>
                <a className="game_in_progress">{t('sessions_widget.status.inlobby')}</a>

                </>
        )
        }
    }

    return (
        <div className="session_item_container">
            <div className="session_info" style={{backgroundImage: "url('" + mediadata.header_image +"')"}} >


                <div className="icon_container">
                    <img className="icon" src={mediadata.icon}/>
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
                    <div className="lobby_status_container">
                        <GameStatus/>
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