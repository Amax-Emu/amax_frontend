import {useParams} from 'react-router-dom';
import * as React from "react"
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {useTranslation} from "react-i18next";
import {AmaxPastRaces} from "../../compositions/past_games/past_games";
import {AmaxPastRaceData} from "../../compositions/past_games/past_games";
import {Paper} from "@material-ui/core";
import * as moment from 'moment'
import PastRaceItemTable from "./PastRaceItemTable";
// @ts-ignore
import LocationIcons from "./loc_icons/*.png"
// @ts-ignore
import LocationHeaders from "./location_headers/*.png"

function get_location_icon(location_id) {
    let location_icon = '';
    switch (location_id) {
        case 1:
            location_icon = "oval"
            break;
        case 2:
            location_icon = "barcelona"
            break;
        case 3:
            location_icon = "brighton"
            break;
        case 4:
            location_icon = "barcelona"
            break;
        case 5:
            location_icon = "hackney"
            break;
        case 6:
            location_icon = "la_observatory" //hollywood_hills
            break;
        case 7:
            location_icon = "amboy"
            break;
        case 8:
            location_icon = "la_downtown"
            break;
        case 9:
            location_icon = "amboy"
            break;
        case 10:
            location_icon = "la_docks"
            break;
        case 11:
            location_icon = "la_downtown"
            break;
        case 12:
            location_icon = "la_downtown"
            break;
        case 13:
            location_icon = "la_river"
            break;
        case 14:
            location_icon = "mount_haruna"
            break;
        case 15:
            location_icon = "dumbo"
            break;
        case 16:
            location_icon = "russian_hill"
            break;
        case 17:
            location_icon = "san_francisco"
            break;
        case 18:
            location_icon = "japan_shutoko" //tokyo
            break;
        default:
            location_icon = "double_question_mark";

    }
    return location_icon
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: 15,
        }, race_data_container: {

            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "center",
            borderRadius: "6px 6px 0px 0px",
            position: "relative",
            overflow: "hidden"

        },
        map_image_header: {
            backgroundImage: `url(${LocationHeaders['location_header']})`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            position: "absolute",
            right: "0px",
            top: "0px",
            height: "100px",
            width: "1000px",
            zIndex: 1,

        },
        map_gradient_header: {

            background: "linear-gradient(90deg, rgba(44,56,69,1) 30%, rgba(0,0,0,0) 100%)",
            position: "absolute",
            left: "0px",
            top: "0px",
            height: "100px",
            width: "70%",
            zIndex: 2,

        },
        map_name: {
            fontSize: "25px",
            fontWeight: "bold",

        }, game_data: {
            padding: "0.4em",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            zIndex: 3,

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
            marginRight: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 3,
        }
    }),
);
export default function PastRaceItem({data}: { data: AmaxPastRaceData }) {
    const {t, i18n} = useTranslation()
    const classes = useStyles();
    return (
            <Paper elevation={3} className={classes.root}>
                <div className={classes.race_data_container}>

                    <div className={classes.map_icon_container}>
                        <img src={LocationIcons[get_location_icon(data.location_id)]} className={classes.location_icon} alt="logo"/>
                    </div>

                    <div className={classes.game_data}>
                        <div className={classes.map_name}>{data.map_name}</div>
                        <div className={classes.game_data_stats}>
                            <p>Laps: {data.laps}</p>
                            <p>Racers: {data.number_of_racers}</p>
                            <p>{moment(data.timestamp).local().format("M/D/YYYY- h:mm A z")}</p>
                        </div>
                    </div>
                    <div className={classes.map_gradient_header}></div>
                    <div className={classes.map_image_header}></div>
                </div>
                <div>
                    <PastRaceItemTable tableData={data.racers_info}/>
                </div>
            </Paper>
    )

}