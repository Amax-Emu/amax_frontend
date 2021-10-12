import * as React from "react"
import Avatar from "@material-ui/core/Avatar";
import LevelIcons from "./level_icons/*.png"
import {createStyles, makeStyles, Theme, withStyles} from '@material-ui/core/styles';
import PlayerExpBar from "../../appbar/player_stats/expirience_bar";

function GetLevelClass(level:number,legend:number) {
    if (legend >0){
        switch (legend){
            case 1:{return ("legend_1")}
            case 2:{return ("legend_2")}
            case 3:{return ("legend_3")}
            case 4:{return ("legend_4")}
            case 5:{return ("legend_5")}
            case 6:{return ("legend_6")}
            case 7:{return ("legend_7")}
            case 8:{return ("legend_8")}
            case 9:{return ("legend_9")}
            case 10:{return ("legend_10")}

        }
    } else {
        switch (level){
            case 1:{return ("level_1")}
            case 2:{return ("level_2")}
            case 3:{return ("level_3")}
            case 4:{return ("level_4")}
            case 5:{return ("level_5")}
            case 6:{return ("level_6")}
            case 7:{return ("level_7")}
            case 8:{return ("level_8")}
            case 9:{return ("level_9")}
            case 10:{return ("level_10")}
            case 11:{return ("level_11")}
            case 12:{return ("level_12")}
            case 13:{return ("level_13")}
            case 14:{return ("level_14")}
            case 15:{return ("level_15")}
            case 16:{return ("level_16")}
            case 17:{return ("level_17")}
            case 18:{return ("level_18")}
            case 19:{return ("level_19")}
            case 20:{return ("level_20")}
            case 21:{return ("level_21")}
            case 22:{return ("level_22")}
            case 23:{return ("level_23")}
            case 24:{return ("level_24")}
            case 25:{return ("level_25")}
            case 26:{return ("level_26")}
            case 27:{return ("level_27")}
            case 28:{return ("level_28")}
            case 29:{return ("level_29")}
            case 30:{return ("level_30")}
            case 31:{return ("level_31")}
            case 32:{return ("level_32")}
            case 33:{return ("level_33")}
            case 34:{return ("level_34")}
            case 35:{return ("level_35")}
            case 36:{return ("level_36")}
            case 37:{return ("level_37")}
            case 38:{return ("level_38")}
            case 39:{return ("level_39")}
            case 40:{return ("level_40")}
            case 41:{return ("level_41")}
            case 42:{return ("level_42")}
            case 43:{return ("level_43")}
            case 44:{return ("level_44")}
            case 45:{return ("level_45")}
            case 46:{return ("level_46")}
            case 47:{return ("level_47")}
            case 48:{return ("level_48")}
            case 49:{return ("level_49")}
            case 50:{return ("level_50")}

        }
        }
    }


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {

        },
        container:{
            display: "grid",
    gridTemplateColumns: "min-content min-content",
    gridTemplateRows: "auto",
    gap: "0px 0px",
    gridTemplateAreas:
    "'avatar data'",
},
        avatar_container: { gridArea: "avatar" },
data_container: { gridArea: "data",
marginLeft:"1em"},
        avatar:{
            width: "5em",
            height: "5em",
            display: 'flex',
            alignItems: 'center',
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

export default function PlayerCard({playerName,playerLevel,playerLegend, playerCurrentExp, playerLevelupExp,playerPfpUrl}:{playerName:string,playerLevel:number,playerLegend:number,playerCurrentExp:number,playerLevelupExp:number,playerPfpUrl:string}) {
    const classes = useStyles();
    const level_class = GetLevelClass(playerLevel,playerLegend)
    const img_src = LevelIcons[level_class]
    console.log(playerLevelupExp)
    console.log(playerCurrentExp)
    const percent = playerLevelupExp / 100
    const percent2 = playerCurrentExp / percent

    console.log(percent2)

    return(
        <div className={classes.root}>
            <div className={classes.container}>
            <div className={classes.avatar_container}>
                <Avatar  variant="square" className={classes.avatar} src="https://amax-emu.com/static/img/profile.png"/>
            </div>
                <div className={classes.data_container}>
                    <h1>{playerName}</h1>
                    <img src={img_src}/>



                    <PlayerExpBar exp_value={Math.round(percent2)}/>
                </div>
            </div>

        </div>
    )
}