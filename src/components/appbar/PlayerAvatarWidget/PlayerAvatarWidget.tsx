import PlayerAvatar from "../player_avatar/player_avatar";
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import * as React from "react";
import {useUserDataStore} from "../../../stores/userdataStore";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {DiscordIcon} from "../../../compositions/appbar";
import {useTranslation} from "react-i18next";

const { AMAX_API_URL } = process.env;
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
            margin: "1em",
        },
    }),
);

export default function PlayerAvatarWidgetAppBar() {
    const user = useUserDataStore()
    const classes = useStyles();
    const { t, i18n } = useTranslation()

    const PlayerAvatarWidgetComponent = () => {
        if (user.userData?.amax_account !== undefined) {
            if (user.userData?.amax_account === true) {
                return (<PlayerAvatar url={user.userData.avatarUrl}
                                      badge_count={user.userData.amax_player_data.friends_purposes.incoming.length}
                                      friends_incoming={user.userData.amax_player_data.friends_purposes.incoming}/>
                )
            } else {
                return (<>

                    <NavLink to={"/register"} style={{color: '#92929F', textDecoration: 'none'}}>
                        <Button className={classes.CreateAmaxAccButton} size="large">Create Amax Emu account</Button>
                    </NavLink>
                    <Avatar variant="square" className={classes.square} src={user.userData.avatarUrl}>
                        username
                    </Avatar>
                </>)
            }
        } else {
            return (<Button href={AMAX_API_URL + "/auth/login"} className={classes.DiscordButton} disableElevation
                            endIcon={<DiscordIcon/>}>{t("appbar.login_discord")}</Button>)
        }
    }
    return(<PlayerAvatarWidgetComponent/>)
}