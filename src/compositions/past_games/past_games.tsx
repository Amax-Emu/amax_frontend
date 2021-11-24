import { useParams } from 'react-router-dom';
import * as React from "react"
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {useTranslation} from "react-i18next";
import Paper from '@material-ui/core/Paper';
import {AmaxGeneralUserData} from "../PlayerProfile";
import PastRaceItem from "../../components/PastRaceItem/PastRaceItem";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Container} from "@material-ui/core";
import Pagination from '@material-ui/lab/Pagination';
import {useHistory} from "react-router-dom";

const { AMAX_API_URL } = process.env;

export interface AmaxPastRaces {
    data: AmaxPastRaceData[];
}

export interface AmaxPastRaceData {
    game_type_hex:    string;
    game_type_id:     number;
    game_type_name:   string;
    location_id:      string;
    location_name:    string;
    map_name:         string;
    number_of_racers: number;
    laps:             number;
    racers_info:      RacersInfo[];
    timestamp:        Date;
}

export interface RacersInfo {
    player_name:       string;
    is_bot:            boolean;
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

        },pagination: {
            '& > *': {
                marginTop: theme.spacing(2),
            },
        },
    }),
);

export default function PastRaces() {
    const { t, i18n } = useTranslation()
    const classes = useStyles();
    let history = useHistory();
    const [pastRaceData,setPestRaceData] = React.useState<AmaxPastRaces | undefined>(undefined);
    const [gotDataFlag, setgotDataFlag] = React.useState(false);
    const [NumOfRaces,SetNumOfRaces] = React.useState(0);
    const [page, setPage] = React.useState(useParams<{pageNumber: string}>().pageNumber);

    const auth2 = async () => {
        let additional_params = "?offset=" + (page - 1) * 10

        const resp = await fetch(AMAX_API_URL + "/data/pastraces" + additional_params, {

            method: 'GET',

            headers: {
                'content-type': 'application/json;charset=UTF-8'
            },
        })
        setPestRaceData(await resp.json())
        setgotDataFlag(true)
    }

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        setgotDataFlag(false)
        history.push(`/past_races/${page}`)
        auth2().then(() => {})

    };

    const RenderSessions = () => {
        if (gotDataFlag) {
            return pastRaceData.data.map(session_data =>
                <PastRaceItem data = {session_data}/>
        )
        } else {
            return (
                <div className={classes.spinner}>
                    <CircularProgress />
                    </div>

            )
        }
    }

    React.useEffect(() => {

        async function getServerData() {
            let additional_params = "?offset=" + (page - 1) * 10

            const resp = await fetch(AMAX_API_URL + "/data/pastraces" + additional_params, {

                method: 'GET',

                headers: {
                    'content-type': 'application/json;charset=UTF-8'
                },
            })
            setPestRaceData(await resp.json())
            setgotDataFlag(true)
        }

        getServerData().catch(() => {
        })

        async function getServerDataPages() {

            const resp = await fetch(AMAX_API_URL + "/data/total_races", {

                method: 'GET',

                headers: {
                    'content-type': 'application/json;charset=UTF-8'
                },
            })
            const r = await resp.json()
            SetNumOfRaces(r.data)
        }

        getServerDataPages().catch(() => {
        })
    }
    , [])

    return (
        <>
            <Container>
            <RenderSessions/>
                <div className={classes.pagination}>
                <Pagination count={Number((NumOfRaces/10).toFixed())} page={Number(page)} onChange={handleChange}/>
                </div>
            </Container>
        </>
    )

}

