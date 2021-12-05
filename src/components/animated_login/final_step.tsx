import * as React from "react";
import {makeStyles, createStyles, Theme, useTheme} from '@material-ui/core/styles';
import {Container} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import "./typewriter.css"
import ReactMarkdown from "react-markdown";
import className = ReactMarkdown.propTypes.className;
import LoginImage from "./login.png";
import {useUserDataStore} from "../../stores/userdataStore";
const useStyles = makeStyles(theme => ({
logindiv:{
  //backgroundColor: "#3E5270", // updated backgroundColor
  backgroundImage: `url(${LoginImage})`,
    backgroundPosition: 'center',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    width: 325,
    height: 276
 },
}));

export default function AnimatedLogin() {
 const classes = useStyles();
    const user = useUserDataStore()
 return (
     <div>
      <div className={classes.logindiv}>
          <div className={"typewriter_name"}>
       <a>{user?.userData?.amax_player_data?.stats?.playerName !== undefined
       ? user.userData?.amax_player_data.stats.playerName
       : "Login"}</a>
          </div>
          <div className={"typewriter_pass"}>
              <a>********</a>
          </div>
      </div>
     </div>
 )

}