import { useParams } from 'react-router-dom';
import * as React from "react"
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {useTranslation} from "react-i18next";
import PlayerCard from "../../components/profile/player_card";
import Chip from '@material-ui/core/Chip';
import PlayerProfileStats from "../../components/profile/players_stats/player_stats";
import PlayerPastRaces from "../player_past_races/player_past_races";
import ProfileActionMenu from "../../components/profile/action_menu/profile_action_menu";
import {Container} from "@mui/material";

const { AMAX_API_URL } = process.env;

export interface AmaxGeneralUserData {
    error:     boolean;
    error_msg: string;
    data:      Data;
}

export interface Data {
    amaxPlayerData: AmaxPlayerData;
    banData:        BanData;
    player_name:    string;
    isOnline:       boolean;
    status:         number;
    isGameBanned:   boolean;
    accountType:    number;
    amaxPfpUrl: string;
}

export interface AmaxPlayerData {
    amaxPastGames:    string;
    amaxLevelingData: AmaxLevelingData;
    amaxStatsData:    AmaxStatsData;
}

export interface AmaxLevelingData {
    level:       number;
    legend:      number;
    fansTotal:   number;
    fansCurrent: number;
    fansNeeded:  number;
}

export interface AmaxStatsData {
    statLevel:       number;
    statFans:        number;
    statRaceTime:    number;
    statDriverScore: number;
    statTop3:        number;
    statRaces:       number;
    statFirst:       number;
    statHits:        number;
    statFired:       number;
    statWrecked:     number;
    statLegend:      number;
    statLegendTime:  number;
}

export interface BanData {
    ban_reason: string;
    ban_start: Date;
    ban_end: Date;
}


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: 15,
            width: 570,
            height: 636,
            /* Blue/700 (2 L) */
            background: "#304254",

            /* Blue/600 */
            border: "1px solid #3E5270",
            boxSizing: "border-box",
            borderRadius: 8,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        spinner: {
            display: 'flex',
            marginLeft: "calc(50% - 25px)",
            marginTop: "20px",
            '& > * + *': {
                marginLeft: theme.spacing(2),
            },
        },
        CustomIcon: {
            width: "24px",
            height: "24px",
            viewBox: "0 0 24 24",
            // boxShadow: "inset 0px 0px 4px rgba(120, 179, 233, 0.6)",
            // filter: "drop-shadow(0px 0px 20px rgba(4, 90, 255, 0.9))"
        },
        sswidget_container:{
            display: 'inline-flex',
            flex: "0 1 auto",
            flexBasis: "33.33%",
            flexDirection: "column",
            flexWrap: 'wrap',
            width: "33%",
            fontFamily: "Ubuntu",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "16px",
            lineHeight: "155%",
            marginTop: "1em",
            marginBottom: "1em",

            /* identical to box height, or 25px */

            /* Blue / 50 */
            color: "#92929F",

        },
        sswidget_icon_value:{
            display: "flex",
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: "center",
            fontWeight: "bold",
            color: "#E6E6E6",
        },
        sswidgets_container:{
            display: "flex",
            maxWidth: "600px",
            maxHeight: "180px",
            flexWrap: 'wrap',
            flexDirection: "column",
            margin: "1em"

        }
    }),
);



export default function PlayerProfile () {
    let  {profileName} = useParams<{profileName: string}>();
    const { t, i18n } = useTranslation()
    const classes = useStyles();
    const [targetPlayerData,settargetPlayerData] = React.useState<AmaxGeneralUserData | undefined>(undefined);
    const [severDataFlag,setseverDataFlag] = React.useState(false)

    React.useEffect(() => {
        async function getServerData() {
            const resp = await fetch(AMAX_API_URL + "/players/name/"+profileName, {

                method: 'GET',

                headers: {
                    'content-type': 'application/json;charset=UTF-8'
                },
            })
            settargetPlayerData(await resp.json())
            setseverDataFlag(true)
        }

        getServerData().catch(() => {
        })
    }, [])



    return (
        <Container>
            {severDataFlag
                ? (<div>
                        <div style={{display: "flex",flexDirection: "row",flexWrap: "wrap"}}>
                    <PlayerCard playerName={profileName}
                                playerCurrentExp={targetPlayerData.data.amaxPlayerData.amaxLevelingData.fansCurrent}
                                playerLevel={targetPlayerData.data.amaxPlayerData.amaxLevelingData.level + 1}
                                playerLegend={targetPlayerData.data.amaxPlayerData.amaxLevelingData.legend}
                                playerLevelupExp={targetPlayerData.data.amaxPlayerData.amaxLevelingData.fansNeeded}
                                playerPfpUrl={targetPlayerData.data.amaxPfpUrl}
                                playerAccountType={targetPlayerData.data.accountType}/>
                        <ProfileActionMenu user_name={targetPlayerData.data.player_name}/>
                        </div>
                        <PlayerProfileStats playerStatsData={targetPlayerData.data.amaxPlayerData.amaxStatsData}/>
                        <PlayerPastRaces player_name={targetPlayerData.data.player_name}/>
                    </div>


                ) : ( <a>Loading</a> )
            }
        </Container>
);
}
