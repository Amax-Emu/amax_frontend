import * as React from "react";
import {makeStyles, createStyles, Theme, useTheme} from '@material-ui/core/styles';
import {Container} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import AnimatedLogin from "../../components/animated_login/final_step";
import {Paper} from "@material-ui/core";
import DownloadFile from "../../components/file_download/file_download";
import {Grid} from "@mui/material";
import {useTranslation} from "react-i18next";
import {useUserDataStore} from "../../stores/userdataStore";

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

        }
    ))

export default function FinalSteps() {
    const classes = useStyles();
    const { t, i18n } = useTranslation()
    const user = useUserDataStore()

    React.useEffect(() => {
        const poop = async () => {
            await user.getData()
        }
        poop().then(() => {
        })
    })

    const poop = async () => {
        await user.getData()
    }
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
                             <DownloadFile filename={"Test"} size={"18M"} link={"/file"}/>
                         </Grid>
                         <a>{t("how_to_play.patch_step_text3")}</a>
                     </li>
                     <li className={classes.listItem}>
                         <h2 className={classes.stepHeader}>{t("how_to_play.amax_emu_step_header")}</h2>
                         <a>{t("how_to_play.amax_emu_step_text")}</a>
                         <Grid container
                               direction="column"
                               justifyContent="center"
                               alignItems="center">
                             <DownloadFile filename={"Amax_emu.zip"} size={"18M"} link={"/file2"}/>
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