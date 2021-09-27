import * as React from "react"
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {createStyles, makeStyles, Theme, useTheme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            margin: 8
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
    return (
        <div className={classes.root}>
            <Typography>
                <h1>Weclome to Amax Emu!</h1>
                <p>
                    Welcome to the Amax Emu - the home of Blur online emulator.
                    <br/>
                    <br/>

                    TEXT
                    <br/>
                    TEXT
                    <br/>
                    TEXT
                    <br/>
                    TEXT
                    <br/>

                </p>
            </Typography>
            <Button className={classes.menuButton} size="large" color="secondary">Press to have moderate amount of fun.</Button>
        </div>
    )
}
