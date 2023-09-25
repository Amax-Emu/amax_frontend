import * as React from "react"
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {createStyles, makeStyles, Theme, useTheme} from '@material-ui/core/styles';
import { NavLink,useLocation } from 'react-router-dom';
import {useTranslation} from "react-i18next";
import './intro_widget.css';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            backgroundColor: "#111111"
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

export default function IntroWidget(){
    const classes = useStyles();
    const { t, i18n } = useTranslation()
    return (
        <div className={classes.root}>
            <Typography>
                <h1>{t("intro_welcome_header")}</h1>
                <p>
                    Welcome to the Amax Emu - the home of Blur online emulator.
                    <br/>
                    <br/>
                    In order to play Blur online you need Blur, Amax Emu account and install Amax Emu files.
                </p>
            </Typography>
            <NavLink to={"/how_to_play"} style={{color: '#92929F', textDecoration: 'none'}}>
            <Button className={classes.menuButton} size="large">Let's begin!</Button>
            </NavLink>
        </div>
    )
}
