import * as React from "react"
import { useAuthStore } from "../../stores/authStore"
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import UserStats from "../../components/appbar/player_stats";


export interface MePlayerData {
    stats:            Stats;
    leveling:         Leveling;
    friends:          Friend[];
    friends_purposes: FriendsPurposes;
}

export interface Friend {
    name:     string;
    isOnline: boolean;
    status:   string;
}

export interface FriendsPurposes {
    outcoming: string[];
    icnoming:  string[];
}

export interface Leveling {
    level:                number;
    legend:               number;
    fans:                 number;
    fans_levelup_percent: number;
}

export interface Stats {
    playerName:      string;
    statLevel:       number;
    statFansCurrent: number;
    statRaceTime:    number;
    statDriverScore: number;
    statTop3:        number;
    statRaces:       number;
    statFirst:       number;
    statHits:        number;
    statFired:       number;
    statWrecked:     number;
    statLegend:      number;
    statLegendTime:  number;
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

async function get_data(token:string) {

    let response_data: MePlayerData

    const response = await fetch("http://127.0.0.1:8000/players/@me", {

        method: 'GET',
    
        headers: {
          'content-type': 'application/json;charset=UTF-8',
          'Authorization': `Bearer ${token}`
        },
      });
     response_data = await response.json();
     return response_data
    //console.log(json); // logs 'OK'
  }
  


export default function AmaxAppBar() {
  const classes = useStyles();
  const auth = useAuthStore()
  
  let player_level: number
  let player_legend: number
  let player_name: string
  let player_exp: number
  let player_exp_prc: number

  get_data(auth.user.token).then(response_data =>{
  console.log(response_data)
  player_level = response_data.stats.statLevel
  player_legend = response_data.stats.statLegend
  player_name = response_data.stats.playerName
  player_exp = response_data.leveling.fans
  player_exp_prc = response_data.leveling.fans_levelup_percent
}
  )
    console.log(player_name)
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          {auth.user
           ? UserStats(player_level,player_legend,player_exp,player_exp_prc,player_name)
           : <Button color="inherit">Login</Button>
            }          
        </Toolbar>
      </AppBar>
    </div>
  );
}