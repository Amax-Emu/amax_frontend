import * as React from "react"
import { useAuthStore } from "./stores"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import set_discord_token from "./discord_auth"
import get_user_data from "./user_data"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AmaxAppBar from "./compositions/appbar/index"
import PermanentDrawerLeft from "./compositions/drawer";
import SessionsWidget from "./compositions/sessions";
import ServerStatus from "./compositions/serverstatus";
import LeaderboardsWidget from "./compositions/leaderboard_widget";
import {Container} from "@material-ui/core";
import Dashboard from "./compositions/dashboard";
import DiscordNews from "./compositions/news";
import CreateBlurAccountForm from "./compositions/register_form";
import "./i18n"
import {useUserDataStore} from "./stores/userdataStore";
import PlayerProfile from "./compositions/PlayerProfile";

const { AMAX_API_URL } = process.env;

function main() {
    const auth = useAuthStore()
    return ( 
        <>
            {auth.user 
                ? <h1>2 Hello {auth.user.token}</h1>
                : <button onClick={auth.signIn}>Sign In</button>
            }
        </>
    )
}

export function App() {

    const auth = useAuthStore()
    const user = useUserDataStore()
    auth.signIn()
    user.getData()
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
      React.useEffect(() => { auth.signIn() }, [])

    return (

        <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Router>
        <div>


        <PermanentDrawerLeft/>
        <div style={{marginLeft: "240px"}}>

            <Container disableGutters={true} maxWidth="xl">
                <AmaxAppBar/>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/user">User data</Link>
                    <Link to="/sessions_test">Sessions</Link>
                    <Link to="/status_test">Status</Link>
                    <Link to="/news">News</Link>
                    <Link to="/discord">=DISCORD=</Link>
                    <Link to="/register"> =MAKE BLUR ACC= </Link>

                </nav>
                <a href={AMAX_API_URL + "/auth/login"}>Login with discord</a>
        <Switch>
            <Route exact path="/" component={main} />
            <Route exact path="/user" component={get_user_data} />
            <Route exact path="/discord" component={set_discord_token} />
            <Route exact path="/discord_auth" component={set_discord_token} />
            <Route exact path="/sessions_test" component={SessionsWidget} />
            <Route exact path="/status_test" component={ServerStatus} />
            <Route exact path="/leaderboards" component={LeaderboardsWidget} />
            <Route exact path="/Dashboard" component = {Dashboard} />
            <Route exact path="/news" component = {DiscordNews} />
            <Route exact path="/register" component = {CreateBlurAccountForm} />
            <Route exact path="/profile/:profileName" component = {PlayerProfile} />
        </Switch>
            </Container>
        </div>
        </div>
        </Router>
        </ThemeProvider>

    )
}

