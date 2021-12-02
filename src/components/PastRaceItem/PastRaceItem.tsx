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

function get_track_name(track_internal_name:string) {
    let track_name = '';
    switch (track_internal_name) {
        case "Barcelona Oval 0":
            track_name = "Circus Minimus"
            break;
        case "Barcelona Oval 1":
            track_name = "City Breach"
            break;
        case "Barcelona Bowl Multiplayer":
            track_name = "Ocean Pier"
            break;
        case "Brighton 0":
            track_name = "Brighton 0"
            break;
        case "Brighton 3":
            track_name = "Coastal Cruise"
            break;
        case "Brighton 1":
            track_name = "Promenade Loop" //hollywood_hills
            break;
        case "Brighton 2":
            track_name = "Seafront Strip"
            break;
        case "Barcelona Gracia 0":
            track_name = "Passeig de Gracia"
            break;
        case "Barcelona Gracia 5":
            track_name = "Catalon Climb"
            break;
        case "Barcelona Gracia 2":
            track_name = "El Carmel Heights"
            break;
        case "Barcelona Gracia 1":
            track_name = "Passeig de Gracia"
            break;
        case "Hackney 0":
            track_name = "Hackney 0"
            break;
        case "Hackney 4":
            track_name = "Central Sprint"
            break;
        case "Hackney 1":
            track_name = "Shoreditch Sweep"
            break;
        case "Hackney 2":
            track_name = "Urban Belt"
            break;
        case "Hollywood Hills 0":
            track_name = "Hollywood Rift"
            break;
        case "Hollywood Hills 2":
            track_name = "Downtown Vista"
            break;
        case "Hollywood Hills 1":
            track_name = "Hollywood Rift" //tokyo
            break;
        case "Amboy 0":
            track_name = "Amboy 0"
            break;
        case "Amboy 3":
            track_name = "Tumbleweed Alley"
            break;
        case "Amboy 1":
            track_name = "Route 66"
            break;
        case "LA Downtown 0":
            track_name = "Angel Angles"
            break;
        case "LA Downtown 1":
            track_name = "The Money Run"
            break;
        case "LA Downtown 4":
            track_name = "Highrise Ring"
            break;
        case "LA Downtown 6":
            track_name = "Harbor Freeway"
            break;
        case "Amboy Bowl Multiplayer":
            track_name = "Amboy Little Bowl"
            break;
        case "LA Docks 0":
            track_name = "Container Island"
            break;
        case "LA Docks 3":
            track_name = "Cargo Run"
            break;
        case "LA Docks 2":
            track_name = "Pacific Reach"
            break;
        case "LA Downtown Highrise Multiplayer":
            track_name = "LA Heights"
            break;
        case "LA Downtown FigureOf8 Multiplayer":
            track_name = "Figure of 8"
            break;
        case "LA River 0":
            track_name = "Stormdrain Surge"
            break;
        case "LA River 3":
            track_name = "Concrete Basin"
            break;
        case "Mount Haruna 0":
            track_name = "Assent"
            break;
        case "Mount Haruna 1":
            track_name = "Descent"
            break;
        case "NY Dumbo 0":
            track_name = "Fulton Loop"
            break;
        case "NY Dumbo 3":
            track_name = "Brooklyn Tour"
            break;
        case "NY Dumbo 2":
            track_name = "Manhattan View"
            break;
        case "SanFran Russian Hill 0":
            track_name = "Cable Car Chase"
            break;
        case "SanFran Russian Hill 1":
            track_name = "Russian Steppes"
            break;
        case "SanFran Sausalito 0":
            track_name = "la_docks"
            break;
        case "SanFran Sausalito 2":
            track_name = "Bay Area Tour"
            break;
        case "SanFran Sausalito 1":
            track_name = "Golden Gate Rush"
            break;
        case "Tokyo Shutoko 0":
            track_name = "la_docks"
            break;
        case "Tokyo Shutoko 2":
            track_name = "Bayshore Route"
            break;
        case "Tokyo Shutoko 4":
            track_name = "Wangan-sen"
            break;
        default:
            track_name = track_internal_name;

    }
    return track_name
}

function get_header_name(track_internal_name:string) {
    let track_name = '';
    switch (track_internal_name) {
        case "Barcelona Oval 0":
            track_name = "location_header"
            break;
        case "Barcelona Oval 1":
            track_name = "location_header"
            break;
        case "Barcelona Bowl Multiplayer":
            track_name = "location_header"
            break;
        case "Brighton 0":
            track_name = "location_header"
            break;
        case "Brighton 3":
            track_name = "location_header"
            break;
        case "Brighton 1":
            track_name = "location_header" //hollywood_hills
            break;
        case "Brighton 2":
            track_name = "location_header"
            break;
        case "Barcelona Gracia 0":
            track_name = "location_header"
            break;
        case "Barcelona Gracia 5":
            track_name = "location_header"
            break;
        case "Barcelona Gracia 2":
            track_name = "location_header"
            break;
        case "Barcelona Gracia 1":
            track_name = "location_header"
            break;
        case "Hackney 0":
            track_name = "location_header"
            break;
        case "Hackney 4":
            track_name = "location_header"
            break;
        case "Hackney 1":
            track_name = "location_header"
            break;
        case "Hackney 2":
            track_name = "location_header"
            break;
        case "Hollywood Hills 0":
            track_name = "location_header"
            break;
        case "Hollywood Hills 2":
            track_name = "usa_la_observatory_2"
            break;
        case "Hollywood Hills 1":
            track_name = "usa_la_observatory_1" //tokyo
            break;
        case "Amboy 0":
            track_name = "location_header"
            break;
        case "Amboy 3":
            track_name = "location_header"
            break;
        case "Amboy 1":
            track_name = "location_header"
            break;
        case "LA Downtown 0":
            track_name = "location_header"
            break;
        case "LA Downtown 1":
            track_name = "location_header"
            break;
        case "LA Downtown 4":
            track_name = "location_header"
            break;
        case "LA Downtown 6":
            track_name = "location_header"
            break;
        case "Amboy Bowl Multiplayer":
            track_name = "location_header"
            break;
        case "LA Docks 0":
            track_name = "location_header"
            break;
        case "LA Docks 3":
            track_name = "location_header"
            break;
        case "LA Docks 2":
            track_name = "location_header"
            break;
        case "LA Downtown Highrise Multiplayer":
            track_name = "location_header"
            break;
        case "LA Downtown FigureOf8 Multiplayer":
            track_name = "location_header"
            break;
        case "LA River 0":
            track_name = "usa_la_river_6"
            break;
        case "LA River 3":
            track_name = "usa_la_river_3"
            break;
        case "Mount Haruna 0":
            track_name = "location_header"
            break;
        case "Mount Haruna 1":
            track_name = "location_header"
            break;
        case "NY Dumbo 0":
            track_name = "location_header"
            break;
        case "NY Dumbo 3":
            track_name = "usa_ny_dumbo_3"
            break;
        case "NY Dumbo 2":
            track_name = "usa_ny_dumbo_2"
            break;
        case "SanFran Russian Hill 0":
            track_name = "usa_sanfran_russianhill_1"
            break;
        case "SanFran Russian Hill 1":
            track_name = "usa_sanfran_russianhill_1"
            break;
        case "SanFran Sausalito 0":
            track_name = "location_header"
            break;
        case "SanFran Sausalito 2":
            track_name = "usa_sanfran_sausalito_2"
            break;
        case "SanFran Sausalito 1":
            track_name = "usa_sanfran_sausalito_1"
            break;
        case "Tokyo Shutoko 0":
            track_name = "location_header"
            break;
        case "Tokyo Shutoko 2":
            track_name = "location_header"
            break;
        case "Tokyo Shutoko 4":
            track_name = "location_header"
            break;
        default:
            track_name = "location_header";

    }
    return track_name
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
                        <div className={classes.map_name}>{get_track_name(data.map_name)}</div>
                        <div className={classes.game_data_stats}>
                            <p>Laps: {data.laps}</p>
                            <p>Racers: {data.number_of_racers}</p>
                            <p>{moment(data.timestamp).local().format("M/D/YYYY- h:mm A z")}</p>
                        </div>
                    </div>
                    <div className={classes.map_gradient_header}></div>
                    <div className={classes.map_image_header} style={{backgroundImage: `url(${LocationHeaders[get_header_name(data.map_name)]})`,}}></div>
                </div>
                <div>
                    <PastRaceItemTable tableData={data.racers_info}/>
                </div>
            </Paper>
    )

}