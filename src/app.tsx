import * as React from "react"
import { useAuthStore } from "./stores"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import set_discord_token from "./discord_auth"
import get_user_data from "./user_data"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {createTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ServerStatus from "./compositions/serverstatus";
import {Container} from "@material-ui/core";
import Dashboard from "./compositions/dashboard";
import DiscordNews from "./compositions/news";
import CreateBlurAccountForm from "./compositions/register_form";
import "./i18n"
import {useUserDataStore} from "./stores/userdataStore";
import PlayerProfile from "./compositions/PlayerProfile";
import ResponsiveDrawer from "./compositions/drawer/drawer2";
import BigSessions from "./sessions_big";
import FinalSteps from "./compositions/final_step/final_step";
import PersonalPlayerProfile from "./compositions/our_profile";
import PastRaces from "./compositions/past_games/past_games";
import FullLeaderboard from "./compositions/main_leaderboard/main_leaderboard";
import HowToPlay from "./compositions/how_to_play/how_to_play";
import LogOut from "./compositions/log_out/log_out";

const { AMAX_API_URL } = process.env;

const useStyles = makeStyles(theme => ({
    root: {
        marginLeft: 0,

        [theme.breakpoints.up('sm')]: {
            marginLeft: 240,
            flexShrink: 0,
        },

    },
}))

export function App() {
    const classes = useStyles();
    const auth = useAuthStore()
    const user = useUserDataStore()

    React.useEffect(() => {
        const auth2 = async () => {
            await auth.signIn()
        }

        const userdata2 = async () => {
            await user.getData()
        }

        auth2().then(() => {})
        userdata2().then(() => {})
    }, [])

    const theme = createTheme({
        palette: {
          type: 'dark',
          background: {
            default: '#202A34',
            paper: '#2C3845'
        },
        primary: {
            main: '#3E5270',
        },
        secondary: {
            main: '#f44336',
        },
        },

      });

      // You cannot access hooks before initialization iirc
      // //

    return (

        <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Router>
        <div>

        <ResponsiveDrawer/>
        <div className={classes.root}>

            <Container disableGutters={true} maxWidth="xl">

                {/*<nav>*/}
                {/*    <Link to="/">Home</Link>*/}
                {/*    <Link to="/user">User data</Link>*/}
                {/*    <Link to="/sessions">BigSessions</Link>*/}
                {/*    <Link to="/status_test">Status</Link>*/}
                {/*    <Link to="/news">News</Link>*/}
                {/*    <Link to="/discord">=DISCORD=</Link>*/}
                {/*    <Link to="/register"> =MAKE BLUR ACC= </Link>*/}
                {/*    <Link to="/final_steps"> =FINAL STEPS= </Link>*/}
                {/*    <Link to="/past_races"> =PAST RACES= </Link>*/}
                {/*    <Link to="/log_out"> =LOG OUT= </Link>*/}

                {/*</nav>*/}

                {/*<a href={AMAX_API_URL + "/auth/login"}>Login with discord</a>*/}
        <Switch>
            <Route exact path="" component={Dashboard} />
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/user" component={get_user_data} />
            <Route exact path="/log_out" component={LogOut} />
            <Route exact path="/discord" component={set_discord_token} />
            <Route exact path="/discord_auth" component={set_discord_token} />
            <Route exact path="/sessions" component={BigSessions} />
            <Route exact path="/status_test" component={ServerStatus} />
            <Route exact path="/leaderboards" component={FullLeaderboard} />
            <Route exact path="/Dashboard" component = {Dashboard} />
            <Route exact path="/news" component = {DiscordNews} />
            <Route exact path="/register" component = {CreateBlurAccountForm} />
            <Route exact path="/final_steps" component = {FinalSteps} />
            <Route exact path="/how_to_play" component = {HowToPlay} />
            <Route exact path="/profile/:profileName" component = {PlayerProfile} />
            <Route exact path="/profile" component = {PersonalPlayerProfile} />
            <Route exact path="/past_races" component = {PastRaces} />
            <Route exact path="/past_races/:pageNumber" component = {PastRaces} />
        </Switch>
            </Container>
        </div>
        </div>
        </Router>
        </ThemeProvider>

    )
}

