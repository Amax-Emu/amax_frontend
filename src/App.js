import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import session_item from "./components/sessions/session_item/session_item";
import sessions_item from "./components/sessions/sessions_item/sessions_item";
import GetRequestAsyncAwait from "./components/server_status_item/server_status_item"
import Home from './components/home/Home';
//import Contact from './components/Contact';
//import Error from './components/Error';
import Navigation from './components/Navigation';
import ButtonAppBar from "./appbar";
import index_page from "./components/index_page/index_page"
import MiniDrawer from "./drawer2"
import MarerialUIDrawer from "./drawer"
import GameHistoryApp from "./components/history_app/history_app";
import login_test from "./components/login_test";
import ActivateAccount from "./components/discord_auth"
export const AuthContext = React.createContext();


// https://www.freecodecamp.org/news/state-management-with-react-hooks/

const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
};
const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            localStorage.setItem("token", JSON.stringify(action.payload.token));
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token
            };
        case "LOGOUT":
            localStorage.clear();
            return {
                ...state,
                isAuthenticated: false,
                user: null
            };
        default:
            return state;
    }
};




class App extends Component {

    render() {
        return (

            <BrowserRouter >
                <div className="toolbar" />
                <div style={{ marginLeft: 240 }}>

                    <Navigation />
                    <div style={{padding:"50px",flexGrow: "1",margin:"50px"}}>
                        <div className="toolbar" />
                    <Switch>

                        <Route path="/" component={Home} exact/>
                        <Route path="/history" component={GameHistoryApp}/>
                        <Route path="/history/:historyPage" component={GameHistoryApp}/>
                        <Route path="/index_new" component={index_page}/>
                        <Route path="/server_status" component={GetRequestAsyncAwait}  />
                        <Route path="/login" component={login_test}  />
                        <Route path="/discord_auth" component={ActivateAccount}  />

                    </Switch>
                    </div>
                </div>

            </BrowserRouter>
        );
    }
}

export default App;

