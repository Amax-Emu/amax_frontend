import { useParams } from 'react-router-dom';
import * as React from "react"
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {useTranslation} from "react-i18next";
import PlayerCard from "../../components/profile/player_card";

const { AMAX_API_URL } = process.env;

export interface PlayerData {
    error:     boolean;
    error_msg: string;
    data:      Data;
}

export interface Data {
    playerId:        number;
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
    timestamp:       string;
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
        }
    }),
);

export default function PlayerProfile () {
    let  {profileName} = useParams<{profileName: string}>();
    const { t, i18n } = useTranslation()
    const classes = useStyles();
    const [targetPlayerData,settargetPlayerData] = React.useState<PlayerData | undefined>(undefined);
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
        <>
        {severDataFlag
            ? <PlayerCard playerName={profileName} playerCurrentExp={targetPlayerData.data.statFans} playerLevel={targetPlayerData.data.statLevel+1} playerLegend={targetPlayerData.data.statLegend} playerLevelupExp={targetPlayerData.data.statFans} playerPfpUrl={"123"}/>
            : <a>Loading</a>
        }
        </>
);
}
