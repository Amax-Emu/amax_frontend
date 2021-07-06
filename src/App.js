import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import history from './components/history_app/history_app';
import session_item from "./components/sessions/session_item/session_item";
import Home from './components/home/Home';
//import Contact from './components/Contact';
//import Error from './components/Error';
import Navigation from './components/Navigation';

class App extends Component {

    render() {
        return (
            <BrowserRouter>

                <div>
                    <Navigation />
                    <Switch>
                        
                        <Route path="/" component={Home} exact/>
                        <Route path="/history" component={history}/>
                        <Route path="/sessions" component={session_item}/>

                    </Switch>
                </div>

            </BrowserRouter>
        );
    }
}

export default App;

