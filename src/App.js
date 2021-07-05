import logo from './logo.svg';
import './App.css';
import history_game_item from "./history_game_item/history_game_item";
import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


function App() {
    const [comments, setComments] = useState([])

    useEffect(() => {

        fetchComments();

    }, [])

    useEffect(() => {

        console.log(comments["data"])

    }, [comments])

    const fetchComments = async () => {

        const response = await Axios.get('http://127.0.0.1:8000/pastraces',{
            params: {
                offset: 290
            }}
            );

        setComments(response.data.data)

    }

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );

    return (

        <div className="App">
            <ThemeProvider theme={theme}>
                <CssBaseline/>

            <header className="App-header">
                {
                    comments.map(comment => {

                        return (
                            <div>
                                {history_game_item(comment)}
                            </div>
                        )
                    })

                }


                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            </ThemeProvider>
        </div>
    );
}

export default App;
