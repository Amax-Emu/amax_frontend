import {useParams} from 'react-router-dom';
import * as React from "react"
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {useTranslation} from "react-i18next";
import {AmaxPastRaces} from "../../compositions/past_games/past_games";
import {AmaxPastRaceData} from "../../compositions/past_games/past_games";
import {Paper} from "@material-ui/core";
import * as moment from 'moment'
import PastRaceItemTable from "./PastRaceItemTable";
import LocationIcons from "./loc_icons/*.png"
import LoginImage from "../animated_login/login.png";
import LocationHeaders from "./location_headers/*.png"

function get_location_icon(mod_id) {
    let mod_icon = 'iron_fist';
    switch (mod_id) {
        case 1:
            mod_icon = "iron_fist"
            break;
        case 2:
            mod_icon = "jump_the_gun"
            break;
        case 3:
            mod_icon = "front_runner"
            break;
        case 4:
            mod_icon = "drifter"
            break;
        case 5:
            mod_icon = "titanium_armor"
            break;
        case 6:
            mod_icon = "showy_flourish"
            break;
        case 7:
            mod_icon = "stable_frame"
            break;
        case 8:
            mod_icon = "battering_ram"
            break;
        case 9:
            mod_icon = "placeholder" //decoy drop
            break;
        case 10:
            mod_icon = "placeholder" //road sweep
            break;
        case 11:
            mod_icon = "scrambler"
            break;
        case 12:
            mod_icon = "splash_damage"
            break;
        case 13:
            mod_icon = "shielding_efficency"
            break;
        case 14:
            mod_icon = "safety_net"
            break;
        case 15:
            mod_icon = "shielded_boosters"
            break;
        case 16:
            mod_icon = "shielded_bay"
            break;
        case 17:
            mod_icon = "ecm"
            break;
        case 18:
            mod_icon = "placeholder"
            break;
        case 19:
            mod_icon = "bribe"
            break;
        case 20:
            mod_icon = "fan_favourite"
            break;
        case 21:
            mod_icon = "laser_sight"
            break;
        case 22:
            mod_icon = "placeholder" // Advanced radar
            break;
        case 23:
            mod_icon = "silent_running"
            break;
        case 24:
            mod_icon = "last_gasp"
            break;
        case 25:
            mod_icon = "mastermine"
            break;
        default:
            mod_icon = "placeholder";

    }
    return mod_icon
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: 15,
            /* Blue/700 (2 L) */


            /* Blue/600 */
            border: "1px solid #3E5270",
            boxSizing: "border-box",
            borderRadius: 8,
        }, race_data_container: {

            backgroundImage: `url(${LocationHeaders['location_header']})`,
            backgroundPosition: 'center',
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "center",
            borderRadius: "8px 8px 0px 0px",

        }, map_name: {
            fontSize: "25px",
            fontWeight: "bold",

        }, game_data: {
            padding: "0.4em",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",

        }, game_data_stats: {
            lineHeight: "5px"
        }, location_icon: {
            maxWidth: "100%",
            maxHeight: "100%",
            margin: "5px"

        }, map_icon_container: {
            width: "70px",
            height: "70px",
            marginLeft: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }
    }),
);
export default function PastRaceItem({data}: { data: AmaxPastRaceData }) {
    const {t, i18n} = useTranslation()
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper elevation={3} className="history_game_item">
                <div className={classes.race_data_container}>
                    <div className={classes.map_icon_container}>
                        <img src={LocationIcons['amboy']} className={classes.location_icon} alt="logo"/>
                    </div>

                    <div className={classes.game_data}>
                        <div className={classes.map_name}>{data.map_name}</div>
                        <div className={classes.game_data_stats}>
                            <p>Laps: {data.laps}</p>
                            <p>Racers: {data.number_of_racers}</p>
                            <p>{moment(data.timestamp).local().format("M/D/YYYY- h:mm A z")}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <PastRaceItemTable tableData={data.racers_info}/>
                </div>
            </Paper>
        </div>
    )

}