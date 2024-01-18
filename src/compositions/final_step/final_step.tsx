import * as React from "react";
import { makeStyles, createStyles, Theme, useTheme } from '@material-ui/core/styles';
import { Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import GuideImgs from "../how_to_play/imgs/*.png"
import AnimatedLogin from "../../components/animated_login/final_step";
import { Paper } from "@material-ui/core";
import DownloadFile from "../../components/file_download/file_download";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useUserDataStore } from "../../stores/userdataStore";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: "1em",
        }, DiscordButton: {
            backgroundColor: '#7289DA',
        },
        DiscordIcon: {
            width: "24px",
            height: "24px",
            viewBox: "0 0 12 12"
        }, stepHeader: {
            marginBottom: "0.1em"
        }, listItem: {
            marginBottom: "4em"
        }, list_container: {
            paddingLeft: "0",
            marginLeft: "15px",
            marginRight: "15px",
            listStylePosition: "outside",
            listStyleType: "decimal"
        }, imgdiv: {
            maxWidth: "400px",
            height: "auto",
            position: "relative",
        }, image_wrapper: {
            maxWidth: "100%",
            maxHeight: "100%",
        },

    }
    ))

export default function FinalSteps() {
    const classes = useStyles();
    const { t, i18n } = useTranslation()

    return (
        <Container>
            <Paper className={classes.root}>
                <Typography>

                    <h1>{t("how_to_play.header")} | Final steps</h1>
                    <ol className={classes.list_container}>


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
                                <DownloadFile filename={"Blur_12.zip"} size={"26M"}
                                    link={"https://cs.amax-emu.com/blur_12.zip"} />
                            </Grid>
                            <a>{t("how_to_play.patch_step_text3")}</a>

                            <Grid container
                                direction="column"
                                justifyContent="center"
                                alignItems="center">
                                <div className={classes.imgdiv}>
                                    <img className={classes.image_wrapper} src={GuideImgs['blur_update_files']}
                                        alt={"blur_update_files"} />
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
                                <DownloadFile filename={"amax_client_files.zip"} size={"1.4M"} link={"https://cs.amax-emu.com/amax_client_files.zip"} />

                            </Grid>
                            <Grid container
                                direction="column"
                                justifyContent="center"
                                alignItems="center">

                                <div className={classes.imgdiv}>
                                    <img className={classes.image_wrapper} src={GuideImgs['amax_client_files']} alt={"amax_emu_files_prev"} />
                                </div>
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