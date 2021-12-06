import * as React from "react";
import {makeStyles, createStyles, Theme, useTheme} from '@material-ui/core/styles';
import {Container} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import AnimatedLogin from "../../components/animated_login/final_step";
import {Paper} from "@material-ui/core";
import DownloadFile from "../../components/file_download/file_download";
import {Grid} from "@mui/material";
import Button from "@material-ui/core/Button";
import {DiscordIcon} from "../appbar";
import {useTranslation} from "react-i18next";

const { AMAX_API_URL } = process.env;
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
            root: {
                padding: "1em",
            },      DiscordButton: {
            backgroundColor: '#7289DA',
        },
        DiscordIcon: {
            width: "24px",
            height: "24px",
            viewBox: "0 0 12 12"
        },stepHeader: {
                marginBottom: "0.1em"
        },listItem: {
            marginBottom: "4em"
        },

        }
    ))

export default function HowToPlay() {
    const classes = useStyles();
    const { t, i18n } = useTranslation()
    return (
        <Container>
            <Paper className={classes.root}>

                <Typography>

                    <h1>How to play Blur online</h1>
                    <ol>
                        <li className={classes.listItem}>
                    <h2 className={classes.stepHeader} >Login with your Discord account</h2>
                    <a>Login with your Discord account using the button below</a>
                    <br/>
                    <Button href={AMAX_API_URL + "/auth/login"} className={classes.DiscordButton} disableElevation endIcon={<DiscordIcon/>} >{t("appbar.login_discord")}</Button>
                        </li>
                        <li className={classes.listItem}>
                        <h2 className={classes.stepHeader}>Get a copy of Blur</h2>
                    <a>Install Blur from your legally owned DVD from 2010 or download it from your Steam library.</a>
                        </li>
                    <li className={classes.listItem}>
                        <h2 className={classes.stepHeader}>Apply patch 1.2</h2>
                    <a>You can download patch 1.2 files from here. <strong>You don't need to do it if you installed game
                        thought Steam</strong></a>
                    <Grid container
                          direction="column"
                          justifyContent="center"
                          alignItems="center">
                        <DownloadFile filename={"Test"} size={"18M"} link={"/file"}/>
                    </Grid>
                    <a>Place patch files to the root of your Blur installation</a>
                    </li>
                        <li className={classes.listItem}>
                    <h2 className={classes.stepHeader}>Add Amax Emu files</h2>
                    <a>Download latest Amax Emu files from here and place them into root of your Blur installation.</a>
                    <Grid container
                          direction="column"
                          justifyContent="center"
                          alignItems="center">
                        <DownloadFile filename={"Amax_emu.zip"} size={"18M"} link={"/file2"}/>
                    </Grid>
                        </li>
                        <li className={classes.listItem}>
                    <h2 className={classes.stepHeader}>Login into the Amax Emu in the game</h2>
                    <a>Login into the Amax Emu using your username and password. </a>
                    <Grid container
                          direction="column"
                          justifyContent="center"
                          alignItems="center">
                        <AnimatedLogin/>
                    </Grid>
                        </li>
                        <li className={classes.listItem}>
                    <h2 className={classes.stepHeader}>Play Blur</h2>
                    <a>Enjoy Blur like it is 2010 again!</a>
                        </li>
                    </ol>
                </Typography>

            </Paper>
        </Container>
    )

}