import * as React from "react";
import {makeStyles, createStyles, Theme, useTheme} from '@material-ui/core/styles';
import {Container} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import AnimatedLogin from "../../components/animated_login/final_step";
export default function FinalSteps() {
 return (
     <Container>
      <Typography>
       <h1>Final steps</h1>
       <h2>1) Get a copy of Blur</h2>
       <a>Install Blur from your legally owned DVD from 2010 or download it from your Steam library.</a>
       <h2>2) Apply patch 1.2</h2>
       <a>You can download patch 1.2 files from here. <strong>You don't need to do it if you installed game thought Steam</strong></a>
       <a>Place patch files to the root of your Blur installation</a>
       <h2>3) Add Amax Emu files</h2>
       <a>Download latest Amax Emu files from here and place them into root of your Blur installation.</a>
       <h2>4) Login into the Amax Emu in the game</h2>
       <a>Login into the Amax Emu using your username and password. </a>
       <AnimatedLogin/>
       <h2>5) Play Blur</h2>
       <a>Enjoy Blur like it is 2010 again!</a>
      </Typography>
     </Container>
 )

}