import * as React from "react";
import {makeStyles, createStyles, Theme, useTheme} from '@material-ui/core/styles';
import {Container} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import AnimatedLogin from "../../components/animated_login/final_step";
import {Paper} from "@material-ui/core";
import DownloadFile from "../../components/file_download/file_download";
import {Grid} from "@mui/material";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: "1em",
        },
    }
    ))

export default function FinalSteps() {
    const classes = useStyles();

 return (
     <Container>
      <Paper className={classes.root}>

      <Typography>
       <h1>Final steps</h1>
       <h2>1) Get a copy of Blur</h2>
       <a>Install Blur from your legally owned DVD from 2010 or download it from your Steam library.</a>
       <h2>2) Apply patch 1.2</h2>
       <p>You can download patch 1.2 files from here. <strong>You don't need to do it if you installed game thought Steam</strong></p>
          <Grid   container
                  direction="column"
                  justifyContent="center"
                  alignItems="center">
          <DownloadFile filename={"Test"} size={"18M"} link={"/file"}/>
          </Grid>
       <p>Place patch files to the root of your Blur installation</p>
       <h2>3) Add Amax Emu files</h2>
       <a>Download latest Amax Emu files from here and place them into root of your Blur installation.</a>
          <Grid   container
                  direction="column"
                  justifyContent="center"
                  alignItems="center">
          <DownloadFile filename={"Amax_emu.zip"} size={"18M"} link={"/file2"}/>
          </Grid>
       <h2>4) Login into the Amax Emu in the game</h2>
       <a>Login into the Amax Emu using your username and password. </a>
          <Grid   container
                  direction="column"
                  justifyContent="center"
                  alignItems="center">
       <AnimatedLogin/>
          </Grid>
       <h2>5) Play Blur</h2>
       <a>Enjoy Blur like it is 2010 again!</a>
      </Typography>

      </Paper>
     </Container>
 )

}