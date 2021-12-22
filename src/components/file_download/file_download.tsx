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
        maxWidth:"25em",
        width: "100%",
        height:"auto",
        border: "4px dashed #3E5270",
        boxSizing: "border-box",
        borderRadius: "8px",
        margin: "1em"
    },label:{

        fontFamily: "Ubuntu",
        fontStyle: "italic",
        fontWeight: "normal",
        fontSize: "24px",
        lineHeight: "155%",
        color: "#92929F"
},label_size:{

        fontFamily: "Ubuntu",
        fontStyle: "italic",
        fontWeight: "normal",
        marginLeft: "1em",
        fontSize: "15px",
        lineHeight: "155%",
        color: "#92929F"
    }
});

export default function DownloadFile({filename,size,link}:{filename:string, size:string, link:string}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div style={{margin: "1em"}}>
            <Grid>

                <Typography>
                    <a className={classes.label}>{filename}</a><a className={classes.label_size}>{size}</a>
                </Typography>

                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    href={link}
                    target={"_blank"}



                >
                    Download file
                </Button>

            </Grid>
            </div>
        </div>
    )

}