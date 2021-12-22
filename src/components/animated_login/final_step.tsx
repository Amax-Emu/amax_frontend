import * as React from "react";
import {makeStyles, createStyles, Theme, useTheme} from '@material-ui/core/styles';
import "./typewriter.css"
// @ts-ignore
import LoginImage from "./login.png";
import {useUserDataStore} from "../../stores/userdataStore";

const useStyles = makeStyles(theme => ({
    logindiv: {
        maxWidth: "400px",
        height: "auto",
        position: "relative",
    }, login_image: {
        maxWidth: "100%",
        maxHeight: "100%",
    },
}));

export default function AnimatedLogin() {
    const classes = useStyles();
    const user = useUserDataStore()
    return (
        <div className={classes.logindiv}>
            <div className={"typewriter_name"}>
                <a>{user?.userData?.amax_player_data?.stats?.playerName !== undefined
                    ? user.userData?.amax_player_data.stats.playerName
                    : "Login"}</a>
            </div>
            <div className={"typewriter_pass"}>
                <a>********</a>
            </div>
            <img className={classes.login_image} src={LoginImage} alt={"login window"}/>
        </div>

    )

}