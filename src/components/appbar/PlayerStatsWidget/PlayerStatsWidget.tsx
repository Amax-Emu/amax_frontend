import * as React from "react";
import {useUserDataStore} from "../../../stores/userdataStore";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {useTranslation} from "react-i18next";
import UserStats from "../player_stats";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            marginLeft: 0,
            width: `calc(100% - 0px)`,
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - 240px)`,
                marginLeft: 240,
                flexShrink: 0,
            },

        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        DiscordButton: {
            backgroundColor: '#7289DA',
        },
        DiscordIcon: {
            width: "24px",
            height: "24px",
            viewBox: "0 0 12 12"
        },
        spinner: {
            display: 'flex',
            marginLeft: "calc(50% - 25px)",
            marginTop: "20px",
            '& > * + *': {
                marginLeft: theme.spacing(2),
            }
        }, avatarButton: {
            margin: '0px 19px'
        },
        square: {
            display: 'flex',
            alignItems: 'center',
            color: '#FFFFFF',
            boxShadow: '0px 0px 16px rgba(220, 4, 255, 0.6), inset 0px 0px 8px rgba(185, 122, 201, 0.6)',
            backdropFilter: 'blur(8px)',
            backgroundColor: 'linear-gradient(360deg, rgba(243, 239, 243, 0.1581) 0%, rgba(222, 90, 225, 0.119) 21.53%, rgba(243, 239, 243, 0.1581) 100%), url(telegram-cloud-photo-size-2-5204293876830024218-y_partial.jpg);',
        },CreateAmaxAccButton: {
            backgroundColor: "#111111",
            marginLeft: "1em"
        },
    }),
);

export default function PlayerStatsWidgetAppBar() {
    const user = useUserDataStore()
    const classes = useStyles();
    const { t, i18n } = useTranslation()

    const PlayerStatsWidget = () => {
        if (user.userData?.amax_account !== undefined) {
            if (user.userData?.amax_account === true) {
                return (<UserStats user_level={user.userData.amax_player_data.leveling.level + 1}
                                   user_legend={user.userData.amax_player_data.leveling.legend}
                                   user_exp={user.userData.amax_player_data.leveling.fans}
                                   user_exp_percent={user.userData.amax_player_data.leveling.fans_levelup_percent}
                                   user_name={user.userData.amax_player_data.stats.playerName}/>
                )
            } else {
                return <></>
            }
        } else {
            return <></>
        }
    }
    return(<PlayerStatsWidget/>)
}