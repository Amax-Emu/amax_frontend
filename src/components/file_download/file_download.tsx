import * as React from "react";
import {Container, Paper, Typography} from "@material-ui/core";
import AnimatedLogin from "../animated_login/final_step";
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import {Button} from "@material-ui/core";
import {CloudDownload} from "@material-ui/icons";
import {NavLink} from "react-router-dom";
const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width:370,
        height:160,
        border: "4px dashed #3E5270",
        boxSizing: "border-box",
        borderRadius: "8px"
    },label:{

        fontFamily: "Ubuntu",
        fontStyle: "italic",
        fontWeight: "normal",
        fontSize: "24px",
        lineHeight: "155%",
        color: "#92929F"
}
});

export default function DownloadFile({filename,size,link}:{filename:string, size:string, link:string}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid>
                <Typography>
                    <p className={classes.label}>Test</p>
                </Typography>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"


                >
                    Download file
                </Button>
            </Grid>
        </div>
    )

}