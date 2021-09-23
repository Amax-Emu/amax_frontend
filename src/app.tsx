import * as React from "react"
import { useAuthStore } from "./stores"
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import set_discord_token from "./discord_auth"
import get_user_data from "./user_data"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AmaxAppBar from "./compositions/appbar/index"
import PermanentDrawerLeft from "./compositions/drawer";
import SessionsWidget from "./compositions/sessions";


function main() {
    const auth = useAuthStore()
    return ( 
        <>
            {auth.user 
                ? <h1>Hello {auth.user.token}</h1>
                : <button onClick={auth.signIn}>Sign In</button>
            }
        </>
    )
}

export function App() {

    const auth = useAuthStore()
    auth.signIn()
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

        <AmaxAppBar/>
        <PermanentDrawerLeft/>
        <div style={{marginLeft: "240px"}}>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/user">User data</Link>
            <Link to="/sessiosn_test">Sessions</Link>

        </nav>
        <a href="http://127.0.0.1:8000/auth/login">Login with discord</a>
        <Switch>
            <Route exact path="/" component={main} />
            <Route exact path="/user" component={get_user_data} />
            <Route exact path="/discord_auth" component={set_discord_token} />
            <Route exact path="/sessiosn_test" component={SessionsWidget} />
        </Switch>
        </div>
        </div>
        </Router>
        </ThemeProvider>
    )
}

