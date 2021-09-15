import './history_game_item.css'
import history_player_table from "../components/history_player_table/history_player_table";
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Moment from 'react-moment';
import 'moment-timezone';
import React from "react";

function history_game_item(data) {
    const classes = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            '& > *': {
                margin: theme.spacing(1),
                width: theme.spacing(16),
                height: theme.spacing(16),
            },
        },
    }));

    var racers = data.racers_info
    return (
        <div className={classes.root}>
            <Paper elevation={3} className="history_game_item">
                <div className="race_data_container">
                    <div className="map_icon_container">
                    <img src={"/loc_icons/" + data.location_icon + ".png"} className="location_icon" alt="logo"/>
                    </div>
                    <div className="location_container">
                    <div className="map_location_name">{data.location_name}</div>
                    <div className="map_name">{data.map_name}</div>
                    </div>
                    <div className="game_data">
                        <p>Laps: {data.laps}</p>
                        <p>Racers: {data.number_of_racers}</p>
                        <p><Moment tz="Europe/Moscow">{data.timestamp}</Moment></p>
                    </div>
                </div>
                <div>
                    {history_player_table(racers)}
                </div>
            </Paper>
        </div>

    )


}

export default history_game_item;