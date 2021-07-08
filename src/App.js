import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import history from './components/history_app/history_app';
import session_item from "./components/sessions/session_item/session_item";
import sessions_item from "./components/sessions/sessions_item/sessions_item";
import Home from './components/home/Home';
//import Contact from './components/Contact';
//import Error from './components/Error';
import Navigation from './components/Navigation';
import index_page from "./components/index_page/index_page"

class App extends Component {

    render() {
        return (
            <BrowserRouter>

                <div>
                    <Navigation />
                    <Switch>
                        
                        <Route path="/" component={Home} exact/>
                        <Route path="/history" component={history}/>
                        <Route path="/sessions" component={index_page}/>

                    </Switch>
                </div>

            </BrowserRouter>
        );
    }
}

export default App;

