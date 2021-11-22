import * as React from "react"
import {Paper} from "@material-ui/core";
import { useTranslation } from 'react-i18next'
import {PlayerPastRaces} from "../../compositions/player_past_races/player_past_races";
import Mod_slots from "../PastRaceItem/mods_slots/mod_slots";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import * as moment from "moment";
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            position: "relative"
        },
        past_race_data_container:{
            display: "flex",
            flexWrap: 'nowrap',
            flexDirection: "row",
            justifyItems: "center",
            alignItems: "center",
            margin: "1em"

        },
        position_label: {
            fontWeight: "bold",
            fontSize: "25px",
            marginRight: "0.3em"
        },
        divider :{
            marginLeft: "auto"
        },
        mods_container:{
            width: "9em"
        },
        top1: {
            background: "linear-gradient(90deg, rgba(201,176,55,0.15) 0%, rgba(0,0,0,0) 100%)",
            position: "absolute",
            top: "0",
            left: "0",
            width: "50%",
            height: "100%",
            borderRadius: "5px"
        },
        top2: {
            background: "linear-gradient(90deg, rgba(215,215,215,0.15) 0%, rgba(0,0,0,0) 100%)",
            position: "absolute",
            top: "0",
            left: "0",
            width: "50%",
            height: "100%",
            borderRadius: "5px"
        },
        top3: {
            background: "linear-gradient(90deg, rgba(106,56,5,0.15) 0%, rgba(0,0,0,0) 100%)",
            position: "absolute",
            top: "0",
            left: "0",
            width: "50%",
            height: "100%",
            borderRadius: "5px"
        }
    }))
export default function PlayerPastRaceItem({data}:{data: PlayerPastRaces}) {
    const {t, i18n} = useTranslation()
    const classes = useStyles();

    function Top3Classes (pos:number) {
        if (pos === 1) {
            return classes.top1
        } else if (pos === 2){
            return classes.top2

        } else if (pos === 3) {
            return classes.top3
        }
    }

    return (
        <Paper className={classes.root}>
            <div className={classes.past_race_data_container}>
            <a className={classes.position_label}>{"#" + data.finish_pos}</a>
            <p>{data.player_car_name}<br/>{moment(data.timestamp).local().format("M/D/YYYY- h:mm A z")}</p>
                <div className={classes.divider}></div>
                <div className={classes.mods_container}>
            <Mod_slots mod1 = {data.mod_1_id} mod2 = {data.mod_2_id}  mod3 = {data.mod_3_id}  mod1_name = {data.mod_1_name} mod2_name = {data.mod_2_name} mod3_name ={data.mod_3_name}/>
                </div>
            </div>
            <div className={Top3Classes(data.finish_pos)}></div>
        </Paper>
            )

}