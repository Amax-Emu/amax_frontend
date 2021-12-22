import PlayerCard from "../player_card";
import * as React from "react";
import SingleStatWidget from "../single_stat/single_stat";
import {AmaxStatsData} from "../../../compositions/PlayerProfile";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import {useTranslation} from "react-i18next";

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
            width: "33%",
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
            flexWrap: 'wrap',
            flexDirection: "row",
            marginTop: "1em",
            maxWidth: "600px",
            columnGap: "1%",
            justifyContent: "space-around"

        },
        stats_career_container:{
            display: "flex",
            flexWrap: 'wrap',
            flexDirection: "column",
            width: "30%"

        }
    }),
);

export default function PlayerProfileStats({playerStatsData}:{playerStatsData:AmaxStatsData}) {
    const classes = useStyles();
    const { t, i18n } = useTranslation()
    return (
                        <>
                            <a className="session_item_name">{t('profile_stats.stats')}</a>

                         <div className = {classes.sswidgets_container}>

                             <div className = {classes.stats_career_container}>
                                 <Typography>
                                     <h2>{t('profile_stats.career')}</h2>
                                 </Typography>
                             <SingleStatWidget statName={"statFans"}
                                               value={playerStatsData.statFans}/>
                             <SingleStatWidget statName={"statDriverScore"}
                                               value={playerStatsData.statDriverScore}/>
                                 <SingleStatWidget statName={"statLegend"}
                                                   value={playerStatsData.statLegend}/>
                                 <SingleStatWidget statName={"statRaceTime"}
                                                   value={playerStatsData.statRaceTime}/>


                             </div>

                             <div className = {classes.stats_career_container}>
                                 <Typography>
                                     <h2>{t('profile_stats.combat')}</h2>
                                 </Typography>
                                 <SingleStatWidget statName={"statFired"}
                                                   value={playerStatsData.statFired}/>
                                 <SingleStatWidget statName={"statHits"}
                                                   value={playerStatsData.statHits}/>
                                 <SingleStatWidget statName={"statWrecked"}
                                                   value={playerStatsData.statWrecked}/>

                             </div>
                             <div className = {classes.stats_career_container}>
                                 <Typography>
                                     <h2>{t('profile_stats.racing')}</h2>
                                 </Typography>
                                 <SingleStatWidget statName={"statRaces"}
                                               value={playerStatsData.statRaces}/>
                             <SingleStatWidget statName={"statFirst"}
                                               value={playerStatsData.statFirst}/>
                             <SingleStatWidget statName={"statTop3"}
                                               value={playerStatsData.statTop3}/>

                            </div>
</div>

                        </>


    );
}