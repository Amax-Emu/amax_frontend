import * as React from "react"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';
import { useTranslation } from 'react-i18next'
import PlayerPastRaceItem from "../../components/player_past_race/player_past_race";

const { AMAX_API_URL } = process.env;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            alignItems: "flex-end",
            // minWidth: 400,
            maxWidth: "800px"
            // height: 636,
            /* Blue/700 (2 L) */
            // background: "#304254",

            /* Blue/600 */
            // border: "1px solid #3E5270",
            // boxSizing: "border-box",
            // borderRadius: 8,
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
            marginTop: "50%",
            '& > * + *': {
                marginLeft: theme.spacing(2),
            },
        }
    }),
);

export interface PlayerPastRacesResult {
    success: boolean;
    msg:     string;
    data:    PlayerPastRaces[];
}

export interface PlayerPastRaces {
    player_name:       string;
    player_hash:       string;
    traveled_distance: number;
    mod_1_id:          number;
    mod_1_name:        string;
    mod_2_id:          number;
    mod_2_name:        string;
    mod_3_id:          number;
    mod_3_name:        string;
    player_level:      number;
    player_legend:     number;
    player_car_name:   string;
    total_fans:        number;
    starting_pos:      number;
    finish_pos:        number;
    final_state_id:    number;
    final_state:       string;
    player_id:         number;
    race_id:           number;
    timestamp:         string;
}

export default function PlayerPastRaces({player_name}:{player_name:string}) {
    const classes = useStyles();
    const { t, i18n } = useTranslation()
    let [session_data, setData] = React.useState<PlayerPastRacesResult | undefined>(undefined);
    let [dataRequested, setRequestStatus] = React.useState(false);

    const RenderPlayerPastRaces = () => {
        if (dataRequested) {
            return session_data.data.map(session_data =>
                <PlayerPastRaceItem data = {session_data}/>
        )
        } else {
            return (
                <div className={classes.spinner}>
                    <CircularProgress />
                    </div>

            )
        }
    }

    // Lucas:
    // Functions passed to useEffect cannot be async.
    React.useEffect(() => {
        async function getSessionsData() {
            const resp = await fetch(AMAX_API_URL + "/players/past_races/player/name/" + player_name, {

                method: 'GET',

                headers: {
                    'content-type': 'application/json;charset=UTF-8'
                },
            })
            setData(await resp.json())
            setRequestStatus(true)
        }

        getSessionsData().catch(() => {
        })
    }, [])



    return (
        <div className={classes.root}>
        <a className="session_item_name">Past races</a>
    <div >
    <RenderPlayerPastRaces/>
    </div>
    </div>
)
}