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
    switch (game_mode_id) {
        case "community_event" :{
        return {
            name: t("sessions_widget.gamemode.communityevent"),
            icon: icons.community_events_icon,
            header_image: headers.community_event_header
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
                name: t("sessions_widget.gamemode.powered_up_racing"),
                icon: icons.powered_up_icon,
                header_image: headers.power_up_racing_header
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
                name: t("sessions_widget.gamemode.motormash"),
                icon: icons.motor_mash_icon,
                header_image: headers.motor_mash_header
            }
        }

        case "team_motor_mash":{
            return {
                name: t("sessions_widget.gamemode.team_motor_mash"),
                icon: icons.team_motor_mash_icon,
                header_image: headers.team_motor_mash_header
            }
        }

        case "world_tour":{
            return {
                name: t("sessions_widget.gamemode.worldtour"),
                icon: icons.world_tour_icon,
                header_image: headers.world_tour_header
            }
        }

        case "driving_school":{
            return {
                name: t("sessions_widget.gamemode.drivingschool"),
                icon: icons.driving_school,
                header_image: headers.driving_school_header
            }
        }

        case "hardcore_racing":{
            return {
                name: t("sessions_widget.gamemode.hardcore_racing"),
                icon: icons.hardcore_racing_icon,
                header_image: headers.hardcore_racing_header
            }
        }

        case "custom_game":{
            return {
                name: "Custom game",
                icon: icons.default_icon,
                header_image: headers.driving_school_header
            }
        }

        case "unknown":{
            return {
                name: "Session",
                icon: icons.default_icon,
                header_image: headers.driving_school_header
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
            <div className="session_info">

                <div className="session_info_text">
                    <div className="gamemode_info">
                        <div className="icon_container">
                            <img className="icon" src={mediadata.icon}/>
                        </div>
                        <div style={{marginLeft:"0.5rem"}}>
                        <div style={{fontWeight: "bold", fontSize: "1.4rem"}}>{mediadata.name}</div>
                        <div className={"playersCounter"}>
                            <PeopleIcon  style={{fontSize: "1.2rem",display: "inline-block"}} />
                            <div style={{fontSize: "1.2rem",display: "inline-block",marginLeft:"0.3rem"}}>
                                {data.players_list.length + "/" + data.totalSlots}
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="lobby_status_container">
                        <GameStatus/>
                    </div>
                </div>
                <img src={mediadata.header_image} className={"session_header_img"}/>
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