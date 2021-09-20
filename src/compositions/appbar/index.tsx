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
import PlayerAvatar from "../../components/appbar/player_avatar/player_avatar";
import TransitionsModal from "../../components/register_modal/index";

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
    incoming:  string[];
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
        width: `calc(100% - 240px)`,
        marginLeft: 240
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

    const auth = useAuthStore()
    auth.signIn()
    const classes = useStyles();
    let [player_data, setData] = React.useState<MePlayerData | undefined>(undefined);

    // Lucas:
    // Functions passed to useEffect cannot be async.
    React.useEffect(() => {
      async function todoFindABetterNameLol() {
        const resp = await fetch("http://127.0.0.1:8000/players/@me", {

          method: 'GET',

          headers: {
              'content-type': 'application/json;charset=UTF-8',
              'Authorization': `Bearer ${auth.user.token}`
          },
        })
        setData(await resp.json())
      }

      todoFindABetterNameLol().catch(() => {})
    }, [])

  return (
      <div className={classes.root}>
          <AppBar position="static">
              <Toolbar>
                  <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                      <MenuIcon/>
                  </IconButton>
                  <Typography variant="h6" className={classes.title}>
                      News
                  </Typography>
                  <TransitionsModal/>
                  {/* Added a questionmark in front of the . for type safety xoxo */}
                  {player_data?.leveling
                  ? <UserStats user_level={player_data.leveling.level} user_legend={player_data.leveling.legend} user_exp={player_data.leveling.fans} user_exp_percent={player_data.leveling.fans_levelup_percent} user_name={player_data.stats.playerName} />
                  : <Button color="inherit" href="http://127.0.0.1:8000/auth/login">Login</Button>

                  }

                  {/* Added a questionmark in front of the . for type safety xoxo */}
                  {player_data?.leveling
                      ? <PlayerAvatar url="https://amax-emu.com/static/img/profile.png" badge_count={player_data.friends_purposes.incoming.length} friends_incoming={player_data.friends_purposes.incoming}/>
                      : <></>

                  }

              </Toolbar>
          </AppBar>
      </div>

  )

}