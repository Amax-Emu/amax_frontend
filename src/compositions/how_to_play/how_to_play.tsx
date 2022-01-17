import * as React from "react";
import {makeStyles, createStyles, Theme, useTheme} from '@material-ui/core/styles';
import {Container} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import AnimatedLogin from "../../components/animated_login/final_step";
import {Paper} from "@material-ui/core";
import DownloadFile from "../../components/file_download/file_download";
// @ts-ignore
import GuideImgs from './imgs/*.png'
import {Grid} from "@mui/material";
import Button from "@material-ui/core/Button";
import {DiscordIcon} from "../appbar";
import {useTranslation} from "react-i18next";
import { NavLink,useLocation } from 'react-router-dom';


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
        },list_container: {
            paddingLeft: "0",
            marginLeft: "15px",
            marginRight: "15px",
            listStylePosition: "outside",
            listStyleType: "decimal"
        },
        imgdiv: {
            maxWidth: "400px",
            height: "auto",
            position: "relative",
        }, image_wrapper: {
            maxWidth: "100%",
            maxHeight: "100%",
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

                    <h1>{t("how_to_play.header")}</h1>
                    <ol className={classes.list_container}>

                        <li className={classes.listItem}>

                    <h2 className={classes.stepHeader} >{t("how_to_play.login_step_header")}</h2>
                    <a>{t("how_to_play.login_step_text")}</a>
                    <br/>
                    <Button href={AMAX_API_URL + "/auth/login"} className={classes.DiscordButton} disableElevation endIcon={<DiscordIcon/>} >{t("appbar.login_discord")}</Button>
                        </li>

                        <li className={classes.listItem}>

                            <h2 className={classes.stepHeader} >{t("how_to_play.create_amax_account_header")}</h2>
                            <a>{t("how_to_play.create_amax_account_text")}</a>
                            <br/>
                            <NavLink to={"/register"} style={{color: '#92929F', textDecoration: 'none'}}>
                            <Button color="primary" variant="contained" >{t("appbar.create_amax_account")}</Button>
                                </NavLink>
                        </li>

                        <li className={classes.listItem}>
                        <h2 className={classes.stepHeader}>{t("how_to_play.blur_download_step_header")}</h2>
                    <a>{t("how_to_play.blur_download_step_text")}</a>

                        </li>

                    <li className={classes.listItem}>
                        <h2 className={classes.stepHeader}>{t("how_to_play.patch_step_header")}</h2>
                    <a>{t("how_to_play.patch_step_text1")}<strong>{t("how_to_play.patch_step_text2")}</strong></a>
                    <Grid container
                          direction="column"
                          justifyContent="center"
                          alignItems="center">
                        <DownloadFile filename={"Blur_12.zip"} size={"26M"} link={"https://cs.amax-emu.com/blur_12.zip"}/>
                    </Grid>
                    <a>{t("how_to_play.patch_step_text3")}</a>

                        <Grid container
                              direction="column"
                              justifyContent="center"
                              alignItems="center">
                            <div className={classes.imgdiv}>
                                <img className={classes.image_wrapper} src={GuideImgs['blur_update_files']} alt={"blur_update_files"}/>
                            </div>

                        </Grid>

                    </li>
                        <li className={classes.listItem}>
                    <h2 className={classes.stepHeader}>{t("how_to_play.amax_emu_step_header")}</h2>
                    <a>{t("how_to_play.amax_emu_step_text")}</a>
                    <Grid container
                          direction="column"
                          justifyContent="center"
                          alignItems="center">
                        <DownloadFile filename={"amax_emu_files.zip"} size={"1.7M"} link={"https://cs.amax-emu.com/amax_emu_files.zip"}/>

                    </Grid>
                            <Grid container
                                  direction="column"
                                  justifyContent="center"
                                  alignItems="center">
                                <div className={classes.imgdiv}>
                                    <img className={classes.image_wrapper} src={GuideImgs['amax_emu_files_prev']} alt={"amax_emu_files_prev"}/>
                                </div>

                            </Grid>

                        </li>
                        <li className={classes.listItem}>
                    <h2 className={classes.stepHeader}>{t("how_to_play.amax_emu_login_step_header")}</h2>
                    <a>{t("how_to_play.amax_emu_login_step_text")}</a>
                    <Grid container
                          direction="column"
                          justifyContent="center"
                          alignItems="center">
                        <AnimatedLogin/>
                    </Grid>
                        </li>
                        <li className={classes.listItem}>
                    <h2 className={classes.stepHeader}>{t("how_to_play.play_step_header")}</h2>
                    <a>{t("how_to_play.play_step_text")}</a>
                        </li>
                    </ol>

                </Typography>
            </Paper>
        </Container>
    )

}