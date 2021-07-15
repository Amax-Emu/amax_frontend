import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import history from './components/history_app/history_app';
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






class App extends Component {


    render() {
        return (
            <BrowserRouter>

                <div>
                    <ButtonAppBar/>
                    <MarerialUIDrawer />
                    <MiniDrawer />
                    <Navigation />
                    <Switch>

                        <Route path="/" component={Home} exact/>
                        <Route path="/history" component={history}/>
                        <Route path="/index_new" component={index_page}/>
                        <Route path="/server_status" component={GetRequestAsyncAwait}  />

                    </Switch>
                </div>

            </BrowserRouter>
        );
    }
}

export default App;

