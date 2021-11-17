import {
    DriverScoreIcon,
    FansIcon,
    FiredIcon, HitsIcon,
    LegendIcon,
    FirstIcon,
    RaceIcon,
    TimeIcon, Top3Icon,
    WrekedIcon
} from "../../general_icons/general_icons";
import {useTranslation} from "react-i18next";
import * as moment from "moment";
import * as React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

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
            flexDirection: "column",
            flexWrap: 'wrap',

            fontFamily: "Ubuntu",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "16px",
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




function GetIcon({statName}:{statName:string}) {
    switch (statName){
        case 'statRaces':{return (<RaceIcon/>)}
        case 'statLevel':{return (<RaceIcon/>)}
        case 'statFans':{return (<FansIcon/>)}
        case 'statRaceTime':{return (<TimeIcon/>)}
        case 'statDriverScore':{return (<DriverScoreIcon/>)}
        case 'statTop3':{return (<Top3Icon/>)}
        case 'statFirst':{return (<FirstIcon/>)}
        case 'statHits':{return (<HitsIcon/>)}
        case 'statFired':{return (<FiredIcon/>)}
        case 'statWrecked':{return (<WrekedIcon/>)}
        case 'statLegend':{return (<LegendIcon/>)}

    }
}

type StatNames = 'statRaces' | 'statLevel' | 'statFans' | 'statRaceTime' | 'statDriverScore' | 'statTop3' | 'statFirst' | 'statHits' | 'statFired' | 'statWrecked' | 'statLegend'
const statNames: Record<StatNames, string> = {
    statRaces: 'general_values_names.total_race',
    statLevel: 'general_values_names.level',
    statFans: 'general_values_names.fans',
    statRaceTime: 'general_values_names.total_time',
    statDriverScore: 'general_values_names.driving_score',
    statTop3: 'general_values_names.top3',
    statFirst: 'general_values_names.first',
    statHits: 'general_values_names.hits',
    statFired: 'general_values_names.fired',
    statWrecked: 'general_values_names.wrecked',
    statLegend: 'general_values_names.legend'
}

function GetStatName(statName: StatNames) {
    const { t, i18n } = useTranslation()
    return t(statNames[statName])
}

export default function SingleStatWidget({statName,value}:{statName: string,value:(number|string)}) {
    const classes = useStyles();

    let value2 = value

    if (statName === "statRaceTime") {
        value2 = moment.utc(moment.duration(value, 'seconds').asMilliseconds()).format('HH:mm:ss')
    }
    return (
        <div className={classes.sswidget_container}>
            <div className={classes.sswidget_icon_value}>
                <GetIcon statName={statName}/> <a style={{marginLeft: "0.3em"}}>{value2}</a>
            </div>

            <a>{GetStatName(statName)}</a>

        </div>
    )
}
